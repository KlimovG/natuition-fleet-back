const express = require('express');
const userRouter = express.Router();

const {
  get_all_users,
  get_one_user,
  add_user,
  update_user,
  delete_user
} = require("../controllers/userController")

/* GET home page. */
userRouter.get('/', get_all_users);
userRouter.get('/:id', get_one_user);
userRouter.post('/', add_user);
userRouter.put('/:id', update_user);
userRouter.delete('/:id', delete_user);

module.exports = userRouter;
