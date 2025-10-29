const { validationResult } = require('express-validator');
const User = require('../models/User');
const otpService = require('../services/otpService');
const jwtService = require("../services/jwtService");

function normalizePhone(phone) {
    if (phone.startsWith("+98")) return "0" + phone.slice(3);
    return phone;
}

exports.sendCode = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { phone: rawPhone } = req.body;
    const phone = normalizePhone(rawPhone);
    const otp = otpService.generateOtp(6);
    await otpService.saveOtp(phone, otp, 300);

    console.log(`${phone}:${otp}`);
    return res.json({ message: 'کد تایید با موفقیت ارسال شد', code: otp });
};

exports.verify = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { phone: rawPhone, otp } = req.body;
    const phone = normalizePhone(rawPhone); 
    const isValid = await otpService.verifyOtp(phone, otp);

    if (!isValid) {
        return res.status(400).json({ message: 'کد تایید نامعتبر یا منقضی شده است' });
    }

    let user = await User.findOne({ phone });
    if (!user) {
        user = new User({ phone });
        user.lastLogin = new Date();
        await user.save();
    } else {
        user.lastLogin = new Date();
        await user.save();
    }

    const token = jwtService.generateToken({ id: user._id });
    return res.json({ message: 'کد تایید با موفقیت تایید شد', token });
};
