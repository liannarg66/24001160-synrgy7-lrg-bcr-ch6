import { Request, Response } from 'express';
import { UserService } from '../services/userService';

const userService = new UserService();

export const addAdmin = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await userService.addAdmin(username, password);
    res.status(201).json(user);
  } catch (error: unknown) {
    if (error instanceof Error) {
        return res.status(500).json({ error: error.message})
    }
    res.status(401).json({ error: 'Unknown error occurred' });
  }
};
