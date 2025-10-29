const express = require("express")
const router = express.Router()
const researchController = require("../controllers/researchController");
const asyncHandler = require("../middlewares/errorHandler");
const isAdmin = require("../middlewares/isAdmin");
const { authenticate } = require("../services/jwtService");
const { createResearchValidator, updateResearchValidator } = require("../middlewares/validators/researchValidator");

router.get("/",
    asyncHandler(researchController.getResearch)
)

router.get("/:id",
    asyncHandler(researchController.getResearch)
)

router.post("/",
    [
        authenticate,
        createResearchValidator,
        isAdmin
    ],
    asyncHandler(researchController.addResearch)
)

router.put("/:id",
    [
        authenticate,
        updateResearchValidator,
        isAdmin
    ],
    asyncHandler(researchController.updateResearch)
)

router.delete("/:id",
    [
        authenticate,
        isAdmin
    ],
    asyncHandler(researchController.deleteResearch)
)

module.exports = router