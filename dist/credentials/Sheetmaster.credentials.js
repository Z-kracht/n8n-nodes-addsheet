"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sheetmaster = void 0;
class Sheetmaster {
    constructor() {
        this.name = 'sheetmaster';
        this.displayName = 'Sheetmaster Credentials';
        this.documentationUrl = '<your-docs-url>';
        this.properties = [
            {
                displayName: 'Token',
                name: 'token',
                type: 'string',
                default: '',
                typeOptions: {
                    password: true,
                }
            },
            {
                displayName: 'Domain',
                name: 'domain',
                type: 'string',
                default: 'https://httpbin.org',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    Authorization: '={{"Bearer " + $credentials.token}}',
                },
            },
        };
        this.test = {
            request: {
                baseURL: '={{$credentials?.domain}}',
                url: '/bearer',
            },
        };
    }
}
exports.Sheetmaster = Sheetmaster;
//# sourceMappingURL=Sheetmaster.credentials.js.map