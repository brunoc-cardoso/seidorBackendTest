import DriversRepository from "../repositories/DriversRepository.js";

class DriverController {
  index(request, response) {
    const { name } = request.query;

    const drivers = DriversRepository.findAll(name);

    response.send(drivers);
  }

  show(request, response) {
    const { id } = request.params;

    const driver = DriversRepository.findById(id);

    if (!driver) {
      return response.status(400).json({ message: "Driver not found." });
    }

    response.send(driver);
  }

  store(request, response) {
    const { name } = request.body;

    const driverAlreadyExists = DriversRepository.findByName(name);

    if (driverAlreadyExists) {
      return response
        .status(400)
        .json({ message: "This driver already exists." });
    }

    const driver = DriversRepository.create({ name });

    response.send({ message: "Driver stored successfully", driver });
  }

  update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const driverExists = DriversRepository.findById(id);

    if (!driverExists) {
      return response
        .status(400)
        .json({ message: "This Driver doesn't exists." });
    }

    const updatedDriver = DriversRepository.update({ id, name });

    response.json({ message: "Driver updated successfully", updatedDriver });
  }

  delete(request, response) {
    const { id } = request.params;

    DriversRepository.delete(id);

    response.status(201).send();
  }
}

export default new DriverController();
