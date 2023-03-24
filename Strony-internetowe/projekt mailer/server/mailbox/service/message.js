const message = require("../../models/message")
const User = require("../../models/user")
const jwt = require("jsonwebtoken")

const addEmailHandler = async (req,res) => {
    const data = req.body;
    const token = req.headers["authentication"];
    const check = jwt.verify(token, "secret");
    const dataToSend = {
        ...data,
        sender: check.id
    }    
    try {
        await message.create(dataToSend);
        return res.status(200).json({success: true});
    }
    catch (error) {
        console.log(error)
        return res.status(400).json({success: false});
    }
};

const getUsers = async (req, res) => {
    const token = req.headers["authentication"];
    console.log(token)  
    console.log(req.headers)
    const check = jwt.verify(token, "secret");

    if (!check) {
        return res.status(400).json({ success: false });
    }

    try {
        const users = await User.find({admin: {$in: [null, false]}});
        console.log(users)
        return res.status(200).json({ success: true, users });

    } catch (err) {
        return res.status(400).json({ success: false });
    }

};


module.exports = {addEmailHandler, getUsers}