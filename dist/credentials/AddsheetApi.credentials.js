"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddsheetApi = void 0;
class AddsheetApi {
    constructor() {
        this.name = 'addsheetApi';
        this.displayName = 'Addsheet Credentials API';
        this.documentationUrl = 'https://example.com/docs/auth';
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
exports.AddsheetApi = AddsheetApi;
//# sourceMappingURL=AddsheetApi.credentials.js.map