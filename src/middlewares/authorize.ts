import { Request, Response, NextFunction } from 'express';

declare global {
    namespace Express {
      interface Request {
        user?: any; // Ganti any dengan tipe yang sesuai dengan objek user Anda
      }
    }
  }

export default (roles: string[]) => (req: Request, res: Response, next: NextFunction) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).send({ message: 'Forbidden' });
  }
  next();
};
