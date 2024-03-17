import { randomUUID } from "node:crypto";
import vehicleUseMock from "../mock/vehicleUseMock.json" assert { type: "json" };

import { vehiclesDatabase } from "./vehicles.js";
import { driversDatabase } from "./drivers.js";

class VehiclesUse {
  #vehiclesUse = vehicleUseMock;

  create({ driverId, vehicleId, reason }) {
    const newVehicleUse = {
      id: randomUUID(),
      startUseDate: Date.now(),
      driverId,
      vehicleId,
      reason,
    };

    this.#vehiclesUse.push(newVehicleUse);

    return newVehicleUse;
  }

  listAll() {
    const vehicles = vehiclesDatabase.listAll();
    const drivers = driversDatabase.listAll();

    const vehiclesUse = this.#vehiclesUse.map((vehicleUse) => {
      const vehicle = vehicles.find(
        (vehicle) => vehicle.id === vehicleUse.vehicleId
      );

      const driver = drivers.find(
        (driver) => driver.id === vehicleUse.driverId
      );

      return {
        ...vehicleUse,
        vehicle,
        driver,
      };
    });

    return vehiclesUse;
  }

  #findByIndex(id) {
    return this.#vehiclesUse.map((vehicleUse) => vehicleUse.id).indexOf(id);
  }

  findByVehicleId(vehicleId) {
    return this.#vehiclesUse.filter(
      (vehicleUse) => vehicleUse.vehicleId === vehicleId
    );
  }

  findById(id) {
    return this.#vehiclesUse.filter((vehicleUse) => vehicleUse.id === id);
  }

  findByDriverId(driverId) {
    return this.#vehiclesUse.filter(
      (vehicleUse) => vehicleUse.driverId === driverId
    );
  }

  update({ id, endUseDate }) {
    const vehicleUseIndex = this.#findByIndex(id);

    this.#vehiclesUse[vehicleUseIndex].endUseDate = endUseDate;

    return this.#vehiclesUse[vehicleUseIndex];
  }
}

export const vehiclesUseDatabase = new VehiclesUse();
