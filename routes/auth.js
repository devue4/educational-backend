const express = require('express');
const router = express.Router()
const { sendCodeValidator, otpValidator } = require("../middlewares/validators/authValidator")
const authController = require("../controllers/authController")
const asyncHandler = require('../middlewares/errorHandler');

router.post(
    "/send-code",
    sendCodeValidator,
    asyncHandler(authController.sendCode)
)

router.post(
    "/verify",
    otpValidator,
    asyncHandler(authController.verify)
)

module.exports = router