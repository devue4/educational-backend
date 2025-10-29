const User = require("../models/User");

module.exports = async (req, res, next) => {
    const user = await User.findById(req.user.id)
    if (user.permission !== 'admin') {
        return res.status(403).json({ message: 'دسترسی فقط برای ادمین‌ها است' });
    }
    next();
};
