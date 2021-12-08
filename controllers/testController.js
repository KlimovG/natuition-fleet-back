const Test = require('../models/Test');

const test = async (req, res) => {
    try {
        const games = await Test.find();
        console.log(games);

        res.json(games);

    } catch (e) {
        res.status(500).send(e);
    }
};
const create_test = async (req, res) => {
        const {login, password} = req.body;
    try {
        const newTest = await Test.create({ login, password })


        res.json(newTest);

    } catch (e) {
        res.status(500).send(e);
    }
};




module.exports = {
    test, create_test
};