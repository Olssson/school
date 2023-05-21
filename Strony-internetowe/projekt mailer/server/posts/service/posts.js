const messages = require("../../models/message");
const User = require("../../models/user")
const jwt = require("jsonwebtoken")

const get = async (req, res) => {
    const token = req.headers["authentication"];
    const check = jwt.verify(token, "secret");

    console.log(check)

    // const fajnie = messages.find({receiver: check})
    // const response = {
    //     success: true,
    //     messages: fajnie,
    // };
    // return res.status(200).json(response);
};

const send = async (req, res) => {
    const token = req.headers["authentication"];
    const check = jwt.verify(token, "secret");

    const { title, content, receiver } = req.body;
    const message = new messages({
        title,
        content,
        receiver,
        sender: check.email,
    });
    await message.save();
    const response = {
        success: true,
        message: "Message sent",
    };
    return res.status(200).json(response);
};

const users = async (req, res) => {
    const token = req.headers["authentication"];
    const check = jwt.verify(token, "secret");

    const users = await User.find({email: {$ne: check.email}});
    const response = {
        success: true,
        users,
    };
    return res.status(200).json(response);
};

module.exports = {
    get,
    send,
    users,
};