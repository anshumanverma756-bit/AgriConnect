import prisma from "../config/db.js";
import { asyncHandler } from "../middleware/errorHandler.js";


const getCrops = asyncHandler(async (req, res) => {
  const { status, location, name } = req.query;

  const crops = await prisma.crops.findMany({
    where: {
      ...(status && { status }),
      ...(location && { location: { contains: location, mode: "insensitive" } }),
      ...(name && { name: { contains: name, mode: "insensitive" } }),
    },
    include: {
      farmer: { select: { id: true, name: true, location: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  res.status(200).json({ status: "Success", count: crops.length, data: crops });
});

const getCropById = asyncHandler(async (req, res) => {
  const crop = await prisma.crops.findUnique({
    where: { id: req.params.id },
    include: {
      farmer: { select: { id: true, name: true, location: true } },
      offers: true,
    },
  });

  if (!crop) return res.status(404).json({ error: "Crop not found" });
  res.status(200).json({ status: "Success", data: crop });
});

// POST /crops — farmer only
const createCrop = asyncHandler(async (req, res) => {
  const { name, quantity, qualityGrade, price, location, photoUrl } = req.body;

  if (!name || !quantity || !qualityGrade || !price || !location) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const crop = await prisma.crops.create({
    data: {
      name,
      quantity: Number(quantity),
      qualityGrade,
      price: Number(price),
      location,
      photoUrl,
      farmerId: req.user.id,
    },
  });

  res.status(201).json({ status: "Success", data: crop });
});

const updateCrop = asyncHandler(async (req, res) => {
  const crop = await prisma.crops.findUnique({ where: { id: req.params.id } });
  if (!crop) return res.status(404).json({ error: "Crop not found" });
  if (crop.farmerId !== req.user.id) {
    return res.status(403).json({ error: "You can only edit your own crop listings" });
  }

  const { name, quantity, qualityGrade, price, location, photoUrl, status } = req.body;

  const updated = await prisma.crops.update({
    where: { id: req.params.id },
    data: {
      ...(name && { name }),
      ...(quantity && { quantity: Number(quantity) }),
      ...(qualityGrade && { qualityGrade }),
      ...(price && { price: Number(price) }),
      ...(location && { location }),
      ...(photoUrl && { photoUrl }),
      ...(status && { status }),
    },
  });

  res.status(200).json({ status: "Success", data: updated });
});

const deleteCrop = asyncHandler(async (req, res) => {
  const crop = await prisma.crops.findUnique({ where: { id: req.params.id } });
  if (!crop) return res.status(404).json({ error: "Crop not found" });
  if (crop.farmerId !== req.user.id) {
    return res.status(403).json({ error: "You can only delete your own crop listings" });
  }

  await prisma.crops.delete({ where: { id: req.params.id } });
  res.status(200).json({ status: "Success", message: "Crop listing deleted" });
});

const getMyCrops = asyncHandler(async (req, res) => {
  const crops = await prisma.crops.findMany({
    where: { farmerId: req.user.id },
    include: { offers: true },
    orderBy: { createdAt: "desc" },
  });
  res.status(200).json({ status: "Success", count: crops.length, data: crops });
});

export { getCrops, getCropById, createCrop, updateCrop, deleteCrop, getMyCrops };
