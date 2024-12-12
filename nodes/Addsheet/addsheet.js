const XLSX = require('xlsx');

function addsheet(sheetname, data, docString) {
	const documentBase64 = docString.data;
	if (!sheetname || typeof sheetname !== 'string') {
		throw new Error('Invalid or missing sheetname');
	}
	if (!Array.isArray(data)) {
		throw new Error('Data must be an array');
	}
	if (!documentBase64 || typeof documentBase64 !== 'string') {
		throw new Error('Document must be a valid base64 string');
	}

	// Decodeer het base64 bestand en laad het als een werkboek
	const binaryData = Buffer.from(documentBase64, 'base64');
	const workbook = XLSX.read(binaryData, {type: 'buffer'});

	// Transformeer de data (extracteer alleen de "json"-key van elk object)
	const transformedData = data.map(item => item.json);

	// Maak een nieuwe werkblad met de getransformeerde data
	const worksheet = XLSX.utils.json_to_sheet(transformedData);

	// Voeg het nieuwe werkblad toe aan het werkboek
	XLSX.utils.book_append_sheet(workbook, worksheet, sheetname);

	// Sla het bijgewerkte werkboek op als een base64 string
	const updatedDocumentBase64 = XLSX.write(workbook, {type: 'base64'});

	return {
		json: {},
		binary: {
			data: {
				data: updatedDocumentBase64,
				mimeType: docString.mimeType,
				fileName: docString.fileName,
			},
		},
	}
}
module.exports = { addsheet };
