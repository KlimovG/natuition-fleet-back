const User = require('../models/User');
const bcrypt = require('bcrypt');

const get_all_users = async (req, res) => {
    try {
        const games = await User.find();
        console.log(games);

        res.json(games);

    } catch (e) {
        res.status(500).send(e);
    }
};
const get_one_user = async (req, res) => {
    const {id}= req.params;
    try {
        const oneUser = await User.findById(id).populate("robots");
        console.log(oneUser);

        res.json(oneUser);

    } catch (e) {
        res.status(500).send(e);
    }
};
const add_user = async (req, res) => {
    const {
        login,
        password,
        address,
        phone,
        email,
    } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);

    try {
        const newUser = await User.create({
            login,
            password: hashPassword,
            address,
            phone,
            email,
            })


        res.json(newUser);

    } catch (e) {
        res.status(500).send(e);
    }
};

const update_user = async (req,res)=>{

}


const delete_user = async (req,res)=>{

}





module.exports = {
    get_all_users,
    get_one_user,
    add_user,
    update_user,
    delete_user
};
