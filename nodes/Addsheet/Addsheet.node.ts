import { INodeType, INodeTypeDescription, INodeExecutionData, IExecuteFunctions } from 'n8n-workflow';
import * as path from 'path';

export class Addsheet implements INodeType {
	description: INodeTypeDescription = {
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
		credentials: [

		],
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
				displayName: 'Add Sheet', // The value the user sees in the UI
				name: 'addsheet', // The name used to reference the element UI within the code
				type: 'string',
				required: true, // Whether the field is required or not
				default: 'Sheet 1',
				description: 'The name of the sheet you want to add',
				displayOptions: { // the resources and operations to display this element with
					show: {
					}
				},
			},
			{
				displayName: 'Data', // The value the user sees in the UI
				name: 'data', // The name used to reference the element UI within the code
				type: 'json',
				required: true, // Whether the field is required or not
				default: 'Data',
				description: 'The data you want to append',
				displayOptions: { // the resources and operations to display this element with
					show: {
					}
				}
			},
			{
				displayName: 'Binary File',
				name: 'binaryfile',
				type: 'string',
				default: '',
				placeholder: 'file',
				description: 'The binary property containing the file to process',
			}
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		//const items = this.getInputData();

		const sheetname = this.getNodeParameter('addsheet', 0) as string;
		const data = this.getNodeParameter('data', 0) as string;
		const docString = this.getNodeParameter("binaryfile", 0) as object;

		//const outputData: INodeExecutionData[] = [];

		// Voeg data toe aan de sheet
		const addsheetPath = path.resolve(__dirname, 'addsheet.js');
		const { addsheet } = require(addsheetPath);

		const result = addsheet(sheetname, data, docString);

		return this.prepareOutputData([result]);
	}
}
