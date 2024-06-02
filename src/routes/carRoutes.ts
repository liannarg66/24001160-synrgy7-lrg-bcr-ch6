import { Router } from 'express';
import { createCar, getCars, updateCar, deleteCar } from '../controllers/carController';
import authenticate from '../middlewares/authenticate';
import authorize from '../middlewares/authorize';

const router = Router();

router.post('/', authenticate, authorize(['admin', 'superadmin']), createCar);
router.get('/', getCars);
router.put('/:id', authenticate, authorize(['admin', 'superadmin']), updateCar);
router.delete('/:id', authenticate, authorize(['admin', 'superadmin']), deleteCar);

export default router;
