import { Router } from 'express';
import { register, login, getCurrentUser } from '../controllers/authController';
import authenticate from '../middlewares/authenticate';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', authenticate, getCurrentUser);

export default router;
