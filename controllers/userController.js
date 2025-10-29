const User = require("../models/User");
const { validationResult } = require('express-validator');

exports.updateProfile = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullName, nationalCode } = req.body;
    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({ message: 'کاربر یافت نشد' });
    }
    if (nationalCode) {
        const existingUser = await User.findOne({ nationalCode, _id: { $ne: userId } });
        if (existingUser) {
            return res.status(400).json({ message: 'کد ملی قبلا ثبت شده است' });
        }
        user.nationalCode = nationalCode;
    }
    if (fullName) {
        user.fullName = fullName;
    }
    await user.save();
    res.json({ message: 'پروفایل با موفقیت به‌روزرسانی شد' });
}

exports.getProfile = async (req, res) => {
    const userId = req.user.id;
    const user = await User.findById(userId).select('-__v -createdAt -updatedAt');
    if (!user) {
        return res.status(404).json({ message: 'کاربر یافت نشد' });
    }
    res.json(user);
}
