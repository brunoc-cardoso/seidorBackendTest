import { vehiclesUseDatabase } from "../database/vehicleUse.js";

class VehiclesUseRepository {
  create({ driverId, vehicleId, reason }) {
    const newVehicleUse = vehiclesUseDatabase.create({
      driverId,
      vehicleId,
      reason,
    });

    return newVehicleUse;
  }

  update({ id, endUseDate }) {
    const updatedVehicle = vehiclesUseDatabase.update({
      id,
      endUseDate,
    });

    return updatedVehicle;
  }

  findByVehicleId(vehicleUseId) {
    const vehicleUse = vehiclesUseDatabase.findByVehicleId(vehicleUseId);

    return vehicleUse;
  }

  findByDriverId(driverId) {
    const vehicleUse = vehiclesUseDatabase.findByDriverId(driverId);

    return vehicleUse;
  }

  findAll() {
    const vehiclesUse = vehiclesUseDatabase.listAll();

    return vehiclesUse;
  }

  findById(id) {
    const vehicleUse = vehiclesUseDatabase.findById(id);

    return vehicleUse;
  }
}

export default new VehiclesUseRepository();
