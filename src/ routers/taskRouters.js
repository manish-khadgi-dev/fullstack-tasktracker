import express from "express";
const router = express.Router();
//routers

router.get("/", (req, res) => {
  res.json({
    message: "you",
  });
});

router.post("/", (req, res) => {
  res.json({
    message: "adding data to the db",
  });
});

router.put("/", (req, res) => {
  res.json({
    message: "updating data to the db",
  });
});

export default router;
