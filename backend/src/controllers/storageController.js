import prisma from "../config/db.js";
import { asyncHandler } from "../middleware/errorHandler.js";

const getStorageListings = asyncHandler(async (req, res) => {
  const { location, isAvailable } = req.query;

  const listings = await prisma.storageListing.findMany({
    where: {
      ...(location && { location: { contains: location, mode: "insensitive" } }),
      ...(isAvailable !== undefined && { isAvailable: isAvailable === "true" }),
    },
    include: { owner: { select: { id: true, name: true, location: true } } },
    orderBy: { createdAt: "desc" },
  });

  res.status(200).json({ status: "Success", count: listings.length, data: listings });
});

const createStorageListing = asyncHandler(async (req, res) => {
  const { location, capacity, pricePerWeek, cropSuitability } = req.body;

  if (!location || !capacity || !pricePerWeek || !cropSuitability) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const listing = await prisma.storageListing.create({
    data: {
      location,
      capacity: Number(capacity),
      pricePerWeek: Number(pricePerWeek),
      cropSuitability,
      ownerId: req.user.id,
    },
  });

  res.status(201).json({ status: "Success", data: listing });
});

// PUT /storage/:id — owner only
const updateStorageListing = asyncHandler(async (req, res) => {
  const listing = await prisma.storageListing.findUnique({ where: { id: req.params.id } });
  if (!listing) return res.status(404).json({ error: "Storage listing not found" });
  if (listing.ownerId !== req.user.id) {
    return res.status(403).json({ error: "You can only edit your own storage listings" });
  }

  const { location, capacity, pricePerWeek, cropSuitability, isAvailable } = req.body;

  const updated = await prisma.storageListing.update({
    where: { id: req.params.id },
    data: {
      ...(location && { location }),
      ...(capacity && { capacity: Number(capacity) }),
      ...(pricePerWeek && { pricePerWeek: Number(pricePerWeek) }),
      ...(cropSuitability && { cropSuitability }),
      ...(isAvailable !== undefined && { isAvailable }),
    },
  });

  res.status(200).json({ status: "Success", data: updated });
});

// DELETE /storage/:id — owner only
const deleteStorageListing = asyncHandler(async (req, res) => {
  const listing = await prisma.storageListing.findUnique({ where: { id: req.params.id } });
  if (!listing) return res.status(404).json({ error: "Storage listing not found" });
  if (listing.ownerId !== req.user.id) {
    return res.status(403).json({ error: "You can only delete your own storage listings" });
  }

  await prisma.storageListing.delete({ where: { id: req.params.id } });
  res.status(200).json({ status: "Success", message: "Storage listing deleted" });
});

export { getStorageListings, createStorageListing, updateStorageListing, deleteStorageListing };
