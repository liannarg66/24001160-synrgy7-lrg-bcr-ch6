import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AuthService } from '../services/authService';

const authService = new AuthService();

interface JwtPayload {
  id: number;
  role: string;
}

export default async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) {
    return res.status(401).send({ message: 'No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
    const user = await authService.getCurrentUser(decoded.id);
    if (!user) {
      return res.status(404).send({ message: 'User not found.' });
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(401).send({ message: 'Failed to authenticate token.' });
  }
};
