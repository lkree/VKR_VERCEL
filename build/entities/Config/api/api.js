import { configModel } from '../model/index.js';
class ConfigService {
    async writeEmailSettings(config) {
        await configModel.deleteMany();
        await configModel.create(config);
        return this.getEmailSettings();
    }
    getEmailSettings() {
        return configModel.findOne();
    }
    _getFullEmailSettings() {
        return configModel.findOne().then(r => r
            ? {
                host: r.emailSettings.host,
                port: r.emailSettings.port,
                secure: r.emailSettings.secure,
                auth: {
                    user: r.emailSettings.user,
                    pass: r.emailSettings.password,
                },
            }
            : {});
    }
}
export const configService = new ConfigService();
