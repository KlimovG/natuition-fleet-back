const express = require('express');
const testRouter = express.Router();

const {
    test, create_test
} = require("../controllers/testController")

/* GET home page. */
testRouter.get('/', test);
testRouter.post('/', create_test);

module.exports = testRouter;
