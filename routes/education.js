const express = require("express")
const router = express.Router()
const educationController = require("../controllers/educationController");
const asyncHandler = require("../middlewares/errorHandler");
const isAdmin = require("../middlewares/isAdmin");
const { authenticate } = require("../services/jwtService");
const { createEducationValidator, updateEducationValidator } = require("../middlewares/validators/educationValidator");

router.get("/",
    asyncHandler(educationController.getEducation)
)

router.get("/:id",
    asyncHandler(educationController.getEducation)
)

router.post("/",
    [
        authenticate,
        createEducationValidator,
        isAdmin
    ],
    asyncHandler(educationController.addEducation)
)

router.put("/:id",
    [
        authenticate,
        updateEducationValidator,
        isAdmin
    ],
    asyncHandler(educationController.updateEducation)
)

router.delete("/:id",
    [
        authenticate,
        isAdmin
    ],
    asyncHandler(educationController.deleteEducation)
)

module.exports = router