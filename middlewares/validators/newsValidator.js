const { body } = require('express-validator');

const createNewsValidator = [
  body('title')
    .trim()
    .notEmpty().withMessage('عنوان خبر الزامی است')
    .isLength({ max: 128 }).withMessage('عنوان خبر نباید بیشتر از ۱۲۸ کاراکتر باشد'),

  body('content')
    .notEmpty().withMessage('متن خبر الزامی است'),
];

const updateNewsValidator = [
  body('title')
    .optional()
    .trim()
    .isLength({ max: 128 }).withMessage('عنوان خبر نباید بیشتر از ۱۲۸ کاراکتر باشد'),

  body('content')
    .optional(),
];

module.exports = { createNewsValidator, updateNewsValidator };
