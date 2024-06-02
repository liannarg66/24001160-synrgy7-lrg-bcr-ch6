import { CarRepository } from '../repositories/carRepository';
import { Car } from '../models/Car'

const carRepository = new CarRepository();

export class CarService {
  async createCar(data: Partial<Car>) {
    return carRepository.createCar(data);
  }

  async getCars() {
    return carRepository.getCars();
  }

  async updateCar(id: number, data: Partial<Car>) {
    return carRepository.updateCar(id, data);
  }

  async deleteCar(id: number, userId: number) {
    return carRepository.deleteCar(id, userId);
  }
}
