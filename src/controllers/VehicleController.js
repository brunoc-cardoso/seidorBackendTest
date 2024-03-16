import VehiclesRepository from "../repositories/VehiclesRepository.js";

class VehicleController {
  index(request, response) {
    const vehicles = VehiclesRepository.findAll();

    response.send(vehicles);
  }

  show(request, response) {
    const { id } = request.params;

    const vehicle = VehiclesRepository.findById(id);

    if (!vehicle) {
      return response.status(400).json({ message: "Vehicle not found." });
    }

    response.send(vehicle);
  }

  store(request, response) {
    const { plate, color, brand } = request.body;

    const vehicleAlreadyExists = VehiclesRepository.findByPlate(plate);

    if (vehicleAlreadyExists) {
      return response
        .status(400)
        .json({ message: "This vehicle already exists." });
    }

    const vehicle = VehiclesRepository.create({ brand, plate, color });

    response.send({ message: "vehicle stored successfully", vehicle });
  }

  update(request, response) {
    const { id } = request.params;
    const { color, brand } = request.body;

    const vehicleExists = VehiclesRepository.findById(id);

    if (!vehicleExists) {
      return response
        .status(400)
        .json({ message: "This vehicle doesn't exists." });
    }

    const updatedVehicle = VehiclesRepository.update({ id, brand, color });

    response.json({ message: "vehicle updated successfully", updatedVehicle });
  }

  delete(request, response) {
    const { id } = request.params;

    VehiclesRepository.delete(id);

    response.status(201).send();
  }
}

export default new VehicleController();
