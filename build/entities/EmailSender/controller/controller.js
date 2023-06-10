var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BaseController } from '../../../shared/lib/BaseController/index.js';
import { RequestPropsHandle } from '../../../shared/lib/decorators/index.js';
import { checkEmailValidity } from '../../../shared/lib/helpers/index.js';
import { emailSenderService } from '../api/index.js';
class EmailSenderController extends BaseController {
    async sendTestEmail(req, res, __) {
        const { email } = req.body;
        res.json(await emailSenderService.sendTestEmail(email));
    }
    async _sendOverdraftEmails(leftoversOverdraftList, emailList) {
        if (leftoversOverdraftList.length) {
            await Promise.all(leftoversOverdraftList.map(overdraft => {
                const email = emailList.find(it => it.cityName === overdraft.cityName)?.email;
                return email ? emailSenderService._sendLeftoverOverdraftEmail(overdraft, email) : null;
            }));
        }
    }
}
__decorate([
    RequestPropsHandle({ validate: [{ validationObject: { email: checkEmailValidity } }] })
], EmailSenderController.prototype, "sendTestEmail", null);
export const emailSenderController = new EmailSenderController();
