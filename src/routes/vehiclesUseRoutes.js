import express from "express";

import VehicleUseController from "../controllers/VehicleUseController.js";

const vehiclesUseRoutes = express.Router();

vehiclesUseRoutes.get("/", VehicleUseController.index);
vehiclesUseRoutes.post("/", VehicleUseController.store);
vehiclesUseRoutes.put("/:id", VehicleUseController.update);

export { vehiclesUseRoutes };
