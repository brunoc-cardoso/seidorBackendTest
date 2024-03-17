import express from "express";
import { vehiclesRoutes } from "./vehiclesRoutes.js";
import { driversRoutes } from "./driversRoutes.js";
import { vehiclesUseRoutes } from "./vehiclesUseRoutes.js";

const router = express.Router();

router.use("/vehicles", vehiclesRoutes);
router.use("/drivers", driversRoutes);
router.use("/vehicles-use", vehiclesUseRoutes);

router.get("/", (req, res) => {
  res.json({ message: "ok" });
});

export default router;
