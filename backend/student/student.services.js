const db = require('../_helper/db');
const excelService = require('../excel/service')
const students = db.students;

module.exports = {
    load,
    drop
};

async function load() {
    console.log(excelService.data);
    return (await students).insertMany(excelService.data);
}

async function drop() {
    return (await students).drop();
}