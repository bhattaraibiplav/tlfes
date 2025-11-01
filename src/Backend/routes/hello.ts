import { Router } from "express";

const router = Router();

router.get("/hello", (req, res) => {
  res.status(200).json({ message: "Hello from backend!" });
});

export default router;
