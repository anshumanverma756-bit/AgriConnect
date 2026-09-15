import express from "express";
import {
  createOffer,
  getMyOffers,
  getReceivedOffers,
  respondToOffer,
} from "../controllers/offerController.js";
import { protect, authorize } from "../middleware/auth.js";

const router = express.Router();

router.post("/", protect, authorize("buyer"), createOffer);
router.get("/mine", protect, authorize("buyer"), getMyOffers);
router.get("/received", protect, authorize("farmer"), getReceivedOffers);
router.put("/:id/respond", protect, authorize("farmer"), respondToOffer);

export default router;
