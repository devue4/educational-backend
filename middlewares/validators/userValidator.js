const { body } = require('express-validator');

const updateProfileValidator = [
  body('nationalCode')
    .optional({ checkFalsy: true })
    .matches(/^\d{10}$/)
    .withMessage('کد ملی باید ۱۰ رقم باشد'),

  body('fullName')
  .trim()
  .matches(/^[\u0600-\u06FF\s]+$/)
  .withMessage('نام و نام خانوادگی باید فقط شامل حروف فارسی و فاصله باشد')
  .isLength({ min: 1, max: 32 })
  .withMessage('نام و نام خانوادگی باید بین ۱ تا ۳۲ کاراکتر باشد'),
  
  body('birthday')
  .optional({ checkFalsy: true })
  .isISO8601()
  .withMessage('تاریخ تولد باید فرمت معتبر داشته باشد (YYYY-MM-DD)')
  .toDate()
];

module.exports = { updateProfileValidator };