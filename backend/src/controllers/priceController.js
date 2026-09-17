import prisma from "../config/db.js";
import { asyncHandler } from "../middleware/errorHandler.js";

const getPrices = asyncHandler(async (req, res) => {
  const { commodity, market, state, limit } = req.query;

  const prices = await prisma.priceRecord.findMany({
    where: {
      ...(commodity && { commodity: { contains: commodity, mode: "insensitive" } }),
      ...(market && { market: { contains: market, mode: "insensitive" } }),
      ...(state && { state: { contains: state, mode: "insensitive" } }),
    },
    orderBy: { date: "desc" },
    take: limit ? Number(limit) : 100,
  });

  res.status(200).json({ status: "Success", count: prices.length, data: prices });
});

const getLatestPrices = asyncHandler(async (req, res) => {
  const latest = await prisma.priceRecord.findMany({
    distinct: ["commodity"],
    orderBy: [{ commodity: "asc" }, { date: "desc" }],
  });

  res.status(200).json({ status: "Success", count: latest.length, data: latest });
});

const createPriceRecord = asyncHandler(async (req, res) => {
  const { commodity, market, state, minPrice, maxPrice, modalPrice, date } = req.body;

  if (!commodity || !market || !state || !minPrice || !maxPrice || !modalPrice || !date) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const record = await prisma.priceRecord.create({
    data: {
      commodity,
      market,
      state,
      minPrice: Number(minPrice),
      maxPrice: Number(maxPrice),
      modalPrice: Number(modalPrice),
      date: new Date(date),
    },
  });

  res.status(201).json({ status: "Success", data: record });
});

export { getPrices, getLatestPrices, createPriceRecord };
