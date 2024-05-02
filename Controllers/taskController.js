const express = require('express');
const taskService = require('./../Services/tasks.service.js');
const router = express.router();

// This is to route to API URLs
router.route('/tasks')
    .get(taskService.getAll)
router.route('/task')
    .post(taskService.insert)
    .put(taskService.update)
    .delete(taskService.delete)

module.exports = router;