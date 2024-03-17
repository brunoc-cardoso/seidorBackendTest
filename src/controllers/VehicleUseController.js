import VehiclesUseRepository from "../repositories/VehiclesUseRepository.js";

class VehicleUseController {
  index(request, response) {
    const vehiclesUse = VehiclesUseRepository.findAll();

    response.send(vehiclesUse);
  }

  store(request, response) {
    const { driverId, vehicleId, reason } = request.body;

    const vehicleUsesByVehicle =
      VehiclesUseRepository.findByVehicleId(vehicleId);

    const vehicleAlreadyHasDriver = vehicleUsesByVehicle.filter(
      (vehicleUse) => !vehicleUse.endUseDate
    );

    if (vehicleAlreadyHasDriver.length) {
      return response.status(400).json({
        message: "Vehicle already has driver.",
      });
    }

    const vehicleUsesByDriver = VehiclesUseRepository.findByDriverId(driverId);

    const driverAlreadyHasVehicle = vehicleUsesByDriver.filter(
      (vehicleUse) => !vehicleUse.endUseDate
    );

    if (driverAlreadyHasVehicle.length) {
      return response.status(400).json({
        message: "Driver has vehicle without endUseDate.",
      });
    }

    if (!reason) {
      return response.status(400).json({ message: "Reason is required." });
    }

    const newVehicleUse = VehiclesUseRepository.create({
      driverId,
      reason,
      vehicleId,
    });

    response.send({ message: "VehicleUse stored successfully", newVehicleUse });
  }

  update(request, response) {
    const { id } = request.params;
    const { endUseDate } = request.body;

    const vehicleUseAlreadyExists = VehiclesUseRepository.findById(id);

    if (!vehicleUseAlreadyExists) {
      return response
        .status(400)
        .json({ message: "This vehicleUse doesn't exists." });
    }

    const updatedVehicleUse = VehiclesUseRepository.update({ id, endUseDate });

    response.json({
      message: "VehicleUse updated successfully",
      updatedVehicleUse,
    });
  }
}

export default new VehicleUseController();
