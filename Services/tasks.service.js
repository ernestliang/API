const connObject = require("./../Utilities/connection.js");
const getSql = "SELECT * from holiday_todo";
const insSql = "INSERT INTO holiday_todo (name, title) VALUES (?, ?)";
const updSql = "UPDATE holiday_todo SET name = ?, title = ? WHERE id = ?";
const delSql = "DELETE from holiday_todo WHERE id = ?";

const taskService = {
    getAll: async function(req, res, next) {
        await connObject.query(`${getSQL}`)
            .then( ([data, fields]) => {
                res.json(data[0])
            })
            .catch(err => {
                res.status(500).json(err.message);
            })
    },
    insert: async function(req, res, next) {
        await connObject.execute(`${insSql}`, [model.newName, model.newTime])
            .then(result => {
                res.json(result[0].affectedRows)
            })
            .catch(err => {
                res.status(500).json(err.message);
            })
    },
    update: async function(req, res, next) {
        let model = req.body;

        await connObject.execute(`${updSql}`, [model.newName, model.newTime, model.taskId])
            .then(result => {
                res.json(result[0].affectedRows)
            })
            .catch(err => {
                res.status(500).json(err.message);
            })
    },
    delete: async function(req, res, next) {
        let model = req.body;

        await connObject.execute(`${delSql}`, [model.taskId])
            .then(result => {
                res.json(result[0].affectedRows)
            })
            .catch(err => {
                res.status(500).json(err.message);
            })
    },
};