import express from "express";
import {
  getCrops,
  getCropById,
  createCrop,
  updateCrop,
  deleteCrop,
  getMyCrops,
} from "../controllers/cropController.js";
import { protect, authorize } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getCrops);
router.get("/mine", protect, authorize("farmer"), getMyCrops);
router.get("/:id", getCropById);
router.post("/", protect, authorize("farmer"), createCrop);
router.put("/:id", protect, authorize("farmer"), updateCrop);
router.delete("/:id", protect, authorize("farmer"), deleteCrop);

export default router;
