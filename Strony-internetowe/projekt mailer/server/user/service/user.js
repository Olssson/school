const User = require("../../models/user")
const jwt = require("jsonwebtoken")

const addUser = async (req,res) => {
    const data = req.body;
    try {
        await User.create(data);
        return res.status(200).json({success: true});
    } catch (error) {
        return res.status(400).json({success: false});
    }
};
const getUsers = async (req, res) => {
    const token = req.headers["authorization"];
    console.log(token)
    const check = jwt.verify(token, "secret");

    if (!check) {
        return res.status(400).json({ success: false });
    }

    try {
        const users = await User.find({admin: {$in: [null, false], email: {$ne: check.email}}});
        console.log(users)
        return res.status(200).json({ success: true, users });
    } catch (err) {
        return res.status(400).json({ success: false });
    }

};
const deleteUser = async (req, res) => {
    const token = req.headers.cookie.substring(6);
    const check = jwt.verify(token, "admin4123");

    if (!check) {
        return res.status(400).json({ success: false });
    }

    try {
        const users = await User.deleteOne( { _id: req.params.id } );
        return res.status(200).json({ success: true, users });

    } catch (err) {
        return res.status(400).json({ success: false });
    }

};


module.exports = {addUser, getUsers, deleteUser,}