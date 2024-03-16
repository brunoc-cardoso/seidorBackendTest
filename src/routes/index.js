import express from "express";
import { vehiclesRoutes } from "./vehiclesRoutes.js";

const router = express.Router();

router.use("/vehicles", vehiclesRoutes);

router.get("/", (req, res) => {
  res.json({ message: "ok" });
});

export default router;
