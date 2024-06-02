import { Router } from 'express';
import { addAdmin } from '../controllers/userController';
import authenticate from '../middlewares/authenticate';
import authorize from '../middlewares/authorize';

const router = Router();

router.post('/admin', authenticate, authorize(['superadmin']), addAdmin);

export default router;
