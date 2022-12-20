const express = require('express');
const router = express.Router();

const TodoRouter = require('./TodoRouter');

router.use('/todo', TodoRouter);

router.get('/', function (req, res, next) {

    res.status(200).send('Main Router');
});

module.exports = router;
