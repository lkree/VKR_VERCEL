import { Router } from 'express';
import { authMiddleware } from '../../../entities/AuthMiddleware/index.js';
import { Methods } from '../const/index.js';
import { responsiblePersonsController } from '../controller/index.js';
const router = Router();
router.post(Methods.Write, authMiddleware, (...props) => void responsiblePersonsController.write(...props));
router.get(Methods.GetAll, authMiddleware, (...props) => void responsiblePersonsController.getAll(...props));
export { router };
