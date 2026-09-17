import express from "express";
import { getMyTransactions, updateTransaction } from "../controllers/transactionController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.get("/mine", protect, getMyTransactions);
router.put("/:id", protect, updateTransaction);

export default router;
