const express = require("express")
const router = express.Router()
const newsController = require("../controllers/newsController");
const asyncHandler = require("../middlewares/errorHandler");
const isAdmin = require("../middlewares/isAdmin");
const { authenticate } = require("../services/jwtService");
const { createNewsValidator, updateNewsValidator } = require("../middlewares/validators/newsValidator");

router.get("/",
    asyncHandler(newsController.getNews)
)

router.get("/:id",
    asyncHandler(newsController.getNews)
)

router.post("/",
    [
        authenticate,
        createNewsValidator,
        isAdmin
    ],
    asyncHandler(newsController.addNews)
)

router.put("/:id",
    [
        authenticate,
        updateNewsValidator,
        isAdmin
    ],
    asyncHandler(newsController.updateNews)
)

router.delete("/:id",
    [
        authenticate,
        isAdmin
    ],
    asyncHandler(newsController.deleteNews)
)

module.exports = router