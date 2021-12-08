const Robot = require('../models/Robot');
const User = require("../models/User")
const get_all_robots = async (req, res) => {
    try {
        const robots = await Robot.find();
        console.log(robots);

        res.json(robots);

    } catch (e) {
        res.status(500).send(e);
    }
};
const get_one_robot = async (req, res) => {
    try {
        // const oneRobot = await Robot.findById(id).populate("robots");
        // console.log(oneRobot);
        //
        // res.json(oneRobot);

    } catch (e) {
        res.status(500).send(e);
    }
};
const add_robot = async (req, res) => {
    const {
        robot_name,
        status,
        user
    } = req.body;
    try {
        const newRobot = await Robot.create({
            robot_name,
            status,
            user
        })
        await User.findByIdAndUpdate(user, {$push: {robots: newRobot._id}})


        res.json(newRobot);

    } catch (e) {
        res.status(500).send(e);
    }
};

const update_robot = async (req,res)=>{

}


const delete_robot = async (req,res)=>{

}





module.exports = {
    get_all_robots,
    get_one_robot,
    add_robot,
    update_robot,
    delete_robot
};
