import { randomUUID } from "node:crypto";
import driversMock from "../mock/driversMock.json" assert { type: "json" };

class Drivers {
  #drivers = driversMock;

  create({ name }) {
    const newDriver = {
      id: randomUUID(),
      name,
    };

    this.#drivers.push(newDriver);

    return newDriver;
  }

  listAll(name) {
    if (name) {
      return this.#drivers.filter((driver) => driver.name.includes(name));
    }

    return this.#drivers;
  }

  findById(id) {
    return this.#drivers.find((driver) => driver.id === id);
  }

  findByName(name) {
    return this.#drivers.find((driver) => driver.name === name);
  }

  #findByIndex(id) {
    return this.#drivers.map((driver) => driver.id).indexOf(id);
  }

  update({ id, name }) {
    const driverIndex = this.#findByIndex(id);

    this.#drivers[driverIndex].name = name;

    return this.#drivers[driverIndex];
  }

  delete(id) {
    const index = this.#findByIndex(id);

    if (index > 0) {
      this.#drivers.splice(index, 1);
    }

    return;
  }
}

export const driversDatabase = new Drivers();
