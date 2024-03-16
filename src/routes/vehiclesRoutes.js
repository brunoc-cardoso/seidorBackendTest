import express from "express";

import VehicleController from "../controllers/VehicleController.js";

const vehiclesRoutes = express.Router();

vehiclesRoutes.get("/", VehicleController.index);
vehiclesRoutes.get("/:id", VehicleController.show);
vehiclesRoutes.post("/", VehicleController.store);
vehiclesRoutes.put("/:id", VehicleController.update);
vehiclesRoutes.delete("/:id", VehicleController.delete);

export { vehiclesRoutes };
