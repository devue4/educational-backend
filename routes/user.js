const express = require('express');
const router = express.Router()
const { updateProfileValidator } = require("../middlewares/validators/userValidator")
const userController = require("../controllers/userController")
const asyncHandler = require('../middlewares/errorHandler');
const jwtService = require('../services/jwtService');
const isAdmin = require('../middlewares/isAdmin');

router.get(
    "/profile",
    [
        jwtService.authenticate,
    ],
    asyncHandler(userController.getProfile)
)
router.put(
    "/profile",
    [
        jwtService.authenticate,
        updateProfileValidator
    ],
    asyncHandler(userController.updateProfile)
)


module.exports = router