const express = require('express');
const robotRouter = express.Router();

const {
    get_all_robots,
    get_one_robot,
    add_robot,
    update_robot,
    delete_robot
} = require("../controllers/robotController")

/* GET home page. */
robotRouter.get('/', get_all_robots);
robotRouter.get('/:id', get_one_robot);
robotRouter.post('/', add_robot);
robotRouter.put('/:id', update_robot);
robotRouter.delete('/:id', delete_robot);

module.exports = robotRouter;
