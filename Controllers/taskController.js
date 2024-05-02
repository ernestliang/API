const express = require('express');
const taskService = require('./../Services/tasks.service.js');
const router = express.router();

router.route('/tasks')
    .get(taskService.getAll)
router.route('/task')
    .post(taskService.insert)
    .put(taskService.update)
    .delete(taskService.delete)

module.exports = router;