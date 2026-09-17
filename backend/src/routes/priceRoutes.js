import express from "express";
import { getPrices, getLatestPrices, createPriceRecord } from "../controllers/priceController.js";
import { protect, authorize } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPrices);
router.get("/latest", getLatestPrices);
router.post("/", protect, authorize("admin"), createPriceRecord);

export default router;
