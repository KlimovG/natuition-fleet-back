const Session = require('../models/Session');
const fs = require('fs')
const path = require('path')

const get_all_sessions = async (req, res) => {
    const {id}= req.params;
    try {
        const sessions = await Session.find({robot: id});
        console.log(sessions);

        res.json(sessions);

    } catch (e) {
        res.status(500).send(e);
    }
};
const get_one_session = async (req, res) => {
    try {
        const games = await Session.find();
        console.log(games);

        res.json(games);

    } catch (e) {
        res.status(500).send(e);
    }
};
const add_session = async (req, res) => {
    const {
        login,
        password,
        address,
        phone,
        email,
        robots_ids
    } = req.body;
    try {
        const newSession = await Session.create({
            login,
            password,
            address,
            phone,
            email,
            robots_ids,})


        res.json(newSession);

    } catch (e) {
        res.status(500).send(e);
    }
};

const update_session = async (req,res)=>{

}


const delete_session = async (req,res)=>{

}


const load_sessions = async (req,res)=>{

    const basePath = path.join(process.cwd(), "/helpers/SN005")
    fs.readdir(basePath, (err, files)=>{
        console.log(files)
        Promise.all(
        files.filter(file=> file !== ".DS_Store").map(async file=> {
            const nextFile = require(path.join(basePath, file))

            try{
            const loadSession = await Session.create(nextFile)
                return loadSession
            } catch (e) {
                res.status(500).send(e)
            }
        })
        )
            res.send("ok")
    })

}





module.exports = {
    get_all_sessions,
    get_one_session,
    add_session,
    update_session,
    delete_session,
    load_sessions
};
