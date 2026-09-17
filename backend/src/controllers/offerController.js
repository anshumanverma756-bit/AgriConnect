import prisma from "../config/db.js";
import { asyncHandler } from "../middleware/errorHandler.js";

const createOffer = asyncHandler(async (req, res) => {
  const { cropId, offerPrice } = req.body;

  if (!cropId || !offerPrice) {
    return res.status(400).json({ error: "cropId and offerPrice are required" });
  }

  const crop = await prisma.crops.findUnique({ where: { id: cropId } });
  if (!crop) return res.status(404).json({ error: "Crop not found" });
  if (crop.status !== "listed") {
    return res.status(400).json({ error: "This crop is no longer available for offers" });
  }

  const offer = await prisma.offer.create({
    data: {
      cropId,
      buyerId: req.user.id,
      offerPrice: Number(offerPrice),
    },
  });

  res.status(201).json({ status: "Success", data: offer });
});

const getMyOffers = asyncHandler(async (req, res) => {
  const offers = await prisma.offer.findMany({
    where: { buyerId: req.user.id },
    include: { crop: true },
    orderBy: { createdAt: "desc" },
  });
  res.status(200).json({ status: "Success", count: offers.length, data: offers });
});

const getReceivedOffers = asyncHandler(async (req, res) => {
  const offers = await prisma.offer.findMany({
    where: { crop: { farmerId: req.user.id } },
    include: { crop: true, buyer: { select: { id: true, name: true, location: true } } },
    orderBy: { createdAt: "desc" },
  });
  res.status(200).json({ status: "Success", count: offers.length, data: offers });
});

const respondToOffer = asyncHandler(async (req, res) => {
  const { status } = req.body;
  if (!["accepted", "rejected"].includes(status)) {
    return res.status(400).json({ error: "status must be 'accepted' or 'rejected'" });
  }

  const offer = await prisma.offer.findUnique({
    where: { id: req.params.id },
    include: { crop: true },
  });
  if (!offer) return res.status(404).json({ error: "Offer not found" });
  if (offer.crop.farmerId !== req.user.id) {
    return res.status(403).json({ error: "You can only respond to offers on your own crops" });
  }

  const updatedOffer = await prisma.offer.update({
    where: { id: req.params.id },
    data: { status },
  });

  if (status === "accepted") {
    await prisma.crops.update({
      where: { id: offer.cropId },
      data: { status: "reserved" },
    });
    await prisma.transaction.create({
      data: { offerId: offer.id },
    });
  }

  res.status(200).json({ status: "Success", data: updatedOffer });
});

export { createOffer, getMyOffers, getReceivedOffers, respondToOffer };
