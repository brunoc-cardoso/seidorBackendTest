import { vehiclesDatabase } from "../database/vehicles.js";

class VehiclesRepository {
  findAll() {
    const vehicles = vehiclesDatabase.listAll();

    return vehicles;
  }

  findById(id) {
    const vehicle = vehiclesDatabase.findById(id);

    return vehicle;
  }

  findByPlate(id) {
    const vehicle = vehiclesDatabase.findByPlate(id);

    return vehicle;
  }

  create({ plate, color, brand }) {
    const newVehicle = vehiclesDatabase.create({
      plate,
      color,
      brand,
    });

    return newVehicle;
  }

  update({ id, color, brand }) {
    const updatedVehicle = vehiclesDatabase.update({
      id,
      color,
      brand,
    });

    return updatedVehicle;
  }

  delete(id) {
    vehiclesDatabase.delete(id);
  }
}

export default new VehiclesRepository();
