const dataController = require('express').Router();

dataController.get('/', (req, res) => {
    res.json([]);
});

module.exports = dataController;