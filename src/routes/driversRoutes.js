import express from "express";

import DriverController from "../controllers/DriverController.js";

const driversRoutes = express.Router();

driversRoutes.get("/", DriverController.index);
driversRoutes.get("/:id", DriverController.show);
driversRoutes.post("/", DriverController.store);
driversRoutes.put("/:id", DriverController.update);
driversRoutes.delete("/:id", DriverController.delete);

export { driversRoutes };
