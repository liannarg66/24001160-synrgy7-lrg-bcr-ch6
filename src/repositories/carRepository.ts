import { Car } from '../models/Car';

export class CarRepository {
  async createCar(data: Partial<Car>): Promise<Car> {
    return Car.query().insert(data);
  }

  async getCars(): Promise<Car[]> {
    return Car.query();
  }

  async getCarById(id: number): Promise<Car | undefined> {
    return Car.query().findById(id);
  }

  async updateCar(id: number, data: Partial<Car>): Promise<Car> {
    return Car.query().patchAndFetchById(id, data);
  }

  async deleteCar(id: number, userId: number): Promise<void> {
    await Car.query().patchAndFetchById(id, { deleted_by: userId });
    await Car.query().deleteById(id);
  }
}
