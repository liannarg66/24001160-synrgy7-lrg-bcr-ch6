import { Request, Response } from 'express';
import { CarService } from '../services/carService';
import cloudinary from '../config/cloudinary';

const carService = new CarService();

export const createCar = async (req: Request, res: Response) => {
  try {
    const car = await carService.createCar({ ...req.body, created_by: req.user.id, updated_by: req.user.id });
    res.status(201).json(car);
  } catch (error: unknown) {
    if (error instanceof Error) {
        return res.status(500).json({ error: error.message})
    }
    res.status(401).json({ error: 'Unknown error occurred' });
  }
};

export const getCars = async (req: Request, res: Response) => {
  try {
    const cars = await carService.getCars();
    res.json(cars);
  } catch (error: unknown) {
    if (error instanceof Error) {
        return res.status(500).json({ error: error.message})
    }
    res.status(401).json({ error: 'Unknown error occurred' });
  }
};

export const updateCar = async (req: Request, res: Response) => {
  try {
    const carId = parseInt(req.params.id);
    const car = await carService.updateCar(carId, { ...req.body, updated_by: req.user.id });
    res.json(car);
  } catch (error: unknown) {
    if (error instanceof Error) {
        return res.status(500).json({ error: error.message})
    }
    res.status(401).json({ error: 'Unknown error occurred' });
  }
};

export const deleteCar = async (req: Request, res: Response) => {
  try {
    const carId = parseInt(req.params.id);
    await carService.deleteCar(carId, req.user.id);
    res.status(200).send({ message: 'Car deleted' });
  } catch (error: unknown) {
    if (error instanceof Error) {
        return res.status(500).json({ error: error.message})
    }
    res.status(401).json({ error: 'Unknown error occurred' });
  }
};

export const uploadCarImage = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).send({ message: 'No file uploaded' });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'car_images',
    });

    res.status(200).send({ message: 'File uploaded successfully', url: result.secure_url });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Unknown error occurred' });
  }
};