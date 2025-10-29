const { body } = require('express-validator');

const createResearchValidator = [
  body('title')
    .trim()
    .notEmpty().withMessage('عنوان دوره الزامی است')
    .isLength({ max: 128 }).withMessage('عنوان دوره نباید بیشتر از ۱۲۸ کاراکتر باشد'),

  body('content')
    .notEmpty().withMessage('متن دوره الزامی است'),
];

const updateResearchValidator = [
  body('title')
    .optional()
    .trim()
    .isLength({ max: 128 }).withMessage('عنوان دوره نباید بیشتر از ۱۲۸ کاراکتر باشد'),

  body('content')
    .optional(),
];

module.exports = { createResearchValidator, updateResearchValidator };
