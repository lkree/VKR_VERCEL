var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BaseController } from '../../../shared/lib/BaseController/index.js';
import { RequestDataFields, RequestPropsHandle } from '../../../shared/lib/decorators/index.js';
import { fileService } from '../api/index.js';
import { FRONTEND_FILE_NAME } from '../const/index.js';
import { fileAssertObject } from '../lib/helpers/index.js';
class FileController extends BaseController {
    async upload(req, res, __) {
        res.json(await fileService.upload(req.files[FRONTEND_FILE_NAME]));
    }
    async acceptFile(req, res, __) {
        res.json(await fileService.acceptFile(req.body));
    }
    async deleteExisting(_, res, __) {
        res.json(await fileService.deleteExisting());
    }
    async getFileInfo(_, res, __) {
        res.json(await fileService.getFileInfo());
    }
}
__decorate([
    RequestPropsHandle({ assert: [{ assertObject: fileAssertObject, fieldToExecuteData: RequestDataFields.Files }] })
], FileController.prototype, "upload", null);
export const fileController = new FileController();
