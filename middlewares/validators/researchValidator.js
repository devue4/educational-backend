const { body } = require('express-validator');

const createResearchValidator = [
  body('title')
    .trim()
    .notEmpty().withMessage('عنوان پژوهش الزامی است')
    .isLength({ max: 128 }).withMessage('عنوان پژوهش نباید بیشتر از ۱۲۸ کاراکتر باشد'),

  body('content')
    .notEmpty().withMessage('متن پژوهش الزامی است'),
];

const updateResearchValidator = [
  body('title')
    .optional()
    .trim()
    .isLength({ max: 128 }).withMessage('عنوان پژوهش نباید بیشتر از ۱۲۸ کاراکتر باشد'),

  body('content')
    .optional(),
];

module.exports = { createResearchValidator, updateResearchValidator };
