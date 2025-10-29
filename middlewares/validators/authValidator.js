const { body } = require('express-validator');

const sendCodeValidator = [
  body('phone').matches(/^(\+98|0)?9\d{9}$/).withMessage('شماره تلفن معتبر نیست')
];
const otpValidator = [
    body('phone').matches(/^(\+98|0)?9\d{9}$/).withMessage('شماره تلفن معتبر نیست'),
    body('otp').matches(/^\d{6}$/).withMessage('کد OTP باید ۶ رقم باشد')
]

module.exports = { sendCodeValidator, otpValidator };