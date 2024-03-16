import { driversDatabase } from "../database/drivers.js";

class DriversRepository {
  findAll(name) {
    const drivers = driversDatabase.listAll(name);

    return drivers;
  }

  findById(id) {
    const driver = driversDatabase.findById(id);

    return driver;
  }

  findByName(name) {
    const driver = driversDatabase.findByName(name);

    return driver;
  }

  create({ name }) {
    const newDriver = driversDatabase.create({ name });

    return newDriver;
  }

  update({ id, name }) {
    const updatedDriver = driversDatabase.update({ id, name });

    return updatedDriver;
  }

  delete(id) {
    driversDatabase.delete(id);
  }
}

export default new DriversRepository();
