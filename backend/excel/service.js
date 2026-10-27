require('dotenv').config();
const excelToJson = require('convert-excel-to-json');

// -> Read Excel File to Json Data
const excel = excelToJson({
    sourceFile: './excel/data.xlsx',
    sheets: [{
        // Excel Sheet Name
        name: 'data',
        // Header Row -> be skipped and will not be present at our result object.
        header: {
            rows: 1
        },
        // Mapping columns to keys
        columnToKey: {
            //A: '_id',
            B: '_id',
            C: 'name',
            D: 'DOB',
            E: 'address',
            F: 'age',
            '*': '{{columnHeader}}',
        }
    }]
});

module.exports = {
    data: excel.data
}