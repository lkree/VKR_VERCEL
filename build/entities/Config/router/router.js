import { Router } from 'express';
import { authMiddleware } from '../../../entities/AuthMiddleware/index.js';
import { checkAdminMiddleware } from '../../../entities/CheckAdminMiddleware/index.js';
import { Methods } from '../const/index.js';
import { configController } from '../controller/index.js';
const router = Router();
router.post(Methods.WriteEmailSettings, authMiddleware, checkAdminMiddleware, (...props) => void configController.writeEmailSettings(...props));
router.get(Methods.GetEmailSettings, authMiddleware, checkAdminMiddleware, (...props) => void configController.getEmailSettings(...props));
export { router };
