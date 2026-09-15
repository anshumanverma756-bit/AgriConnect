import express from "express";



const router = express.Router()

router.get("/require", (req, res) => {
  res.json({httpmethod: "get"});
});
router.post("/require", (req, res) => {
  res.json({httpmethod: "post"});
});
router.put("/require", (req, res) => {
  res.json({httpmethod: "put"});
});
router.delete("/require", (req, res) => {
  res.json({httpmethod: "delete"});
});

export default router;