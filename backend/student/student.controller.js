const express = require('express');
const router = express.Router();
const studentsDB = require('./student.services');

// routes
router.post('/load', load);
router.delete('/drop', drop);

module.exports = router;

function load(req, res, next){
    studentsDB.load()
    .then((result) => res.json(result))
    .catch(err => next(err));
}

function drop(req, res, next){
    studentsDB.drop()
    .then((status) => res.json({result: status}))
    .catch(err => next(err));
}