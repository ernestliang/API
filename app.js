const express = require('express');
const cors = require('cors');

const taskController = require('./Controllers/taskController.js');

var app = express();

app
    .use(cors())
    .use(express.json())
    .use(taskController)

const portName = process.env.PORT || 3000;
app.listen(portName, () => {
    console.log(`Listening in on Port ${portName}`)
})