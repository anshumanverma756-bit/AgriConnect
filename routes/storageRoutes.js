import express from "express";
import {
  getStorageListings,
  createStorageListing,
  updateStorageListing,
  deleteStorageListing,
} from "../controllers/storageController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getStorageListings);
router.post("/", protect, createStorageListing);
router.put("/:id", protect, updateStorageListing);
router.delete("/:id", protect, deleteStorageListing);

export default router;
