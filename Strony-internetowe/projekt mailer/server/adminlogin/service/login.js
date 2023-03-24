const User = require('../../models/user');
const jwt = require('jsonwebtoken');

const adminlogin = async (req, res) => {
    const data = req.body;

    try {
        const user = await User.findOne({ 'email': data.email });
        if (!user) return res.status(200).json({ success: false });

        if (data.password === user.password && user.admin === true) {
            const token = jwt.sign({ id: user._id }, "secret");
            return res.status(200).json({ success: true, token });
        }
        return res.status(200).json({ success: false }); 

    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false });   
    }
};

module.exports = {
    adminlogin,
};