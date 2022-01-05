const dateFNS = require('date-fns')
// const filterByDay = dateFNS.isSameDay();
// const filterByWeek = dateFNS.isSameWeek();
// const filterByMonth = dateFNS.isSameMonth();
// const filterByYear = dateFNS.isSameYear();
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
const filter_all_sessions = async (req, res) => {
    const {id, type}= req.params;
    // const {date}= req.body;
    const date = new Date("Sep 02 2021")
    console.log(date)
    // const date = new Date()
    //
    // console.log(date)
    try {
        const sessions = await Session.find({robot: id});
        console.log()
        const result = sessions.filter((session) => {
                    const sessionDay = new Date(session["start_time"]);
                    if (dateFNS.isSameDay(date, sessionDay)) {
                        return session;
                    }
                })
        console.log(result)
        // res.json(type);
        // switch (type) {
        //     case "day":
        //         sessions.filter((session) => {
        //             const sessionDay = new Date(session["start_time"]);
        //             if (isSameDay(startDate, sessionDay)) {
        //                 return session;
        //             }
        //         })
        //         break;
        //     case "week":
        //         filterByWeek(sessions);
        //         break;
        //     case "month":
        //         filterByMonth(sessions);
        //         break;
        //     case "year":
        //         filterByYear(sessions);
        //         break;
        //     default:
        //         filterByDay(sessions);
        //         break;
        // }
        res.send(result);

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
    filter_all_sessions,
    add_session,
    update_session,
    delete_session,
    load_sessions
};
