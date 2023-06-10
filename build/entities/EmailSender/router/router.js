import { Router } from 'express';
import { authMiddleware } from '../../../entities/AuthMiddleware/index.js';
import { checkAdminMiddleware } from '../../../entities/CheckAdminMiddleware/index.js';
import { Methods } from '../const/index.js';
import { emailSenderController } from '../controller/index.js';
const router = Router();
router.post(Methods.SendTestEmail, authMiddleware, checkAdminMiddleware, (...props) => void emailSenderController.sendTestEmail(...props));
export { router };
