import prisma from "../config/db.js";
import { asyncHandler } from "../middleware/errorHandler.js";

const getMyTransactions = asyncHandler(async (req, res) => {
  const transactions = await prisma.transaction.findMany({
    where: {
      offer: {
        OR: [{ buyerId: req.user.id }, { crop: { farmerId: req.user.id } }],
      },
    },
    include: {
      offer: {
        include: {
          crop: true,
          buyer: { select: { id: true, name: true, location: true } },
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  res.status(200).json({ status: "Success", count: transactions.length, data: transactions });
});

const updateTransaction = asyncHandler(async (req, res) => {
  const { status, paymentStatus } = req.body;

  const transaction = await prisma.transaction.findUnique({
    where: { id: req.params.id },
    include: { offer: { include: { crop: true } } },
  });
  if (!transaction) return res.status(404).json({ error: "Transaction not found" });

  const isParty =
    transaction.offer.buyerId === req.user.id ||
    transaction.offer.crop.farmerId === req.user.id;
  if (!isParty) {
    return res.status(403).json({ error: "You are not part of this transaction" });
  }

  const updated = await prisma.transaction.update({
    where: { id: req.params.id },
    data: {
      ...(status && { status }),
      ...(paymentStatus && { paymentStatus }),
    },
  });

  if (status === "completed") {
    await prisma.crops.update({
      where: { id: transaction.offer.cropId },
      data: { status: "sold" },
    });
  }

  res.status(200).json({ status: "Success", data: updated });
});

export { getMyTransactions, updateTransaction };
