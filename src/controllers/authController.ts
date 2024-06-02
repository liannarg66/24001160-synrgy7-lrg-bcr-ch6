import { Request, Response } from 'express';
import { AuthService } from '../services/authService';

const authService = new AuthService();

export const register = async (req: Request, res: Response) => {
  try {
    const { username, password, role } = req.body;
    const user = await authService.register(username, password, role);
    res.status(201).json(user);
  } catch (error: unknown) {
    if (error instanceof Error) {
        return res.status(500).json({ error: error.message})
    }
    res.status(500).json({ error: 'Unknown error occurred' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const { user, token } = await authService.login(username, password);
    res.json({ user, token });
  } catch (error: unknown) {
    if (error instanceof Error) {
        return res.status(500).json({ error: error.message})
    }
    res.status(401).json({ error: 'Unknown error occurred' });
  }
};

export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const user = await authService.getCurrentUser(req.user.id);
    res.json(user);
  } catch (error: unknown) {
    if (error instanceof Error) {
        return res.status(500).json({ error: error.message})
    }
    res.status(500).json({ error: 'Unknown error occurred' });
  }
};
