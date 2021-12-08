const express = require('express');
const sessionRouter = express.Router();

const {
    get_all_sessions,
    get_one_session,
    add_session,
    update_session,
    delete_session,
    load_sessions
} = require("../controllers/sessionController")

/* GET home page. */
sessionRouter.get('/all/:id', get_all_sessions);
sessionRouter.get('/:id', get_one_session);
sessionRouter.post('/', add_session);
sessionRouter.post('/load', load_sessions);
sessionRouter.put('/:id', update_session);
sessionRouter.delete('/:id', delete_session);

module.exports = sessionRouter;
