import { createTransport } from 'nodemailer';
export const MailTransport = (emailerSettings) => createTransport(emailerSettings);
