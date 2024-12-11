"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addsheet = void 0;
const path = __importStar(require("path"));
class Addsheet {
    constructor() {
        this.description = {
            displayName: 'Add sheet',
            name: 'addsheet',
            icon: 'file:addsheet.svg',
            group: ['transform'],
            version: 1,
            subtitle: '',
            description: 'Add a new sheet to an Binary XLSX File',
            defaults: {
                name: 'Add Sheet',
            },
            inputs: ['main'],
            outputs: ['main'],
            credentials: [],
            requestDefaults: {
                baseURL: '',
                url: '',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            },
            properties: [
                {
                    displayName: 'Add sheet',
                    name: 'addsheet',
                    type: 'string',
                    required: true,
                    default: 'Sheet 1',
                    description: 'The name of the sheet you want to add',
                    displayOptions: {
                        show: {}
                    },
                },
                {
                    displayName: 'Data',
                    name: 'data',
                    type: 'json',
                    required: true,
                    default: 'Data',
                    description: 'The data you want to append',
                    displayOptions: {
                        show: {}
                    }
                },
                {
                    displayName: 'Binary File',
                    name: 'binaryfile',
                    type: 'string',
                    default: '',
                    placeholder: 'file',
                    description: 'The binary property containing the file to process.',
                }
            ],
        };
    }
    async execute() {
        const sheetname = this.getNodeParameter('sheetname', 0);
        const data = this.getNodeParameter('data', 0);
        const docString = this.getNodeParameter("binaryfile", 0);
        const addsheetPath = path.resolve(__dirname, 'addsheet.js');
        const { addsheet } = require(addsheetPath);
        const result = addsheet(sheetname, data, docString);
        return this.prepareOutputData([result]);
    }
}
exports.Addsheet = Addsheet;
//# sourceMappingURL=Addsheet.node.js.map