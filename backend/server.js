require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors');
const odataService = require('./_helper/odata')
const errorHandler = require('./_helper/error-handler');

app.use(cors());

// odata handler
app.use("/odata", function (req, res) {
    odataService.handle(req, res);
});

// api routes
app.use('/student', require('./student/student.controller'));

// global error handler
app.use(errorHandler);

//start the server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3005;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});