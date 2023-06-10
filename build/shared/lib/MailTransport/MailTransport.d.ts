import { createTransport } from 'nodemailer';
export type MailTransportSettings = Parameters<typeof createTransport>[0];
export declare const MailTransport: (emailerSettings: MailTransportSettings) => import("nodemailer").Transporter<unknown>;
