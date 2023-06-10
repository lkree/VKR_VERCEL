import type { LeftoversOverdraft } from '../../../entities/Leftovers/index.js';
import { MailTransport } from '../../../shared/lib/MailTransport/index.js';
declare class EmailSenderService {
    _emailClient: ReturnType<typeof MailTransport>;
    _email: string;
    constructor();
    sendTestEmail(email: string): Promise<boolean>;
    _sendLeftoverOverdraftEmail(leftoverOverdraft: LeftoversOverdraft, email: string): Promise<boolean>;
    _checkSystem(): void;
}
export declare const emailSenderService: EmailSenderService;
export {};
