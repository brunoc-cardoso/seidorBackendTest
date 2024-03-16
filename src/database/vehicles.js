import { randomUUID } from "node:crypto";
import mockVehicle from "../mock/vehicle.json" assert { type: "json" };

class Vehicles {
  #vehicles = mockVehicle;

  create({ plate, color, brand }) {
    const newVehicle = {
      id: randomUUID(),
      plate,
      color,
      brand,
    };

    this.#vehicles.push(newVehicle);

    return newVehicle;
  }

  listAll() {
    return this.#vehicles;
  }

  findById(id) {
    return this.#vehicles.find((vehicle) => vehicle.id === id);
  }

  findByPlate(plate) {
    return this.#vehicles.find((vehicle) => vehicle.plate === plate);
  }

  #findByIndex(id) {
    return this.#vehicles.findIndex((vehicle) => vehicle.id === id);
  }

  update({ id, color, brand }) {
    const vehicleIndex = this.#findByIndex(id);

    this.#vehicles[vehicleIndex].color = color;
    this.#vehicles[vehicleIndex].brand = brand;

    return this.#vehicles[vehicleIndex];
  }

  delete(id) {
    const index = this.#findByIndex(id);

    if (index) {
      this.#vehicles.splice(index, 1);
    }

    return;
  }
}

export const vehiclesDatabase = new Vehicles();
