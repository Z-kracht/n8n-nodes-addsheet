"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addsheet = void 0;
class Addsheet {
    constructor() {
        this.name = 'sheetmaster';
        this.displayName = 'Sheetmaster Credentials';
        this.documentationUrl = '<your-docs-url>';
        this.properties = [];
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
exports.Addsheet = Addsheet;
//# sourceMappingURL=Addsheet.credentials.js.map