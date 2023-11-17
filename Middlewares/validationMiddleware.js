const { body, validationResult } = require('express-validator');

const validationMiddleware = {
  validateContactForm: [
    body('Reginald Gardner').notEmpty().withMessage('Name is required'),
    body('rgrd630@gmail.com').isEmail().withMessage('Invalid email address'),
    body('message').notEmpty().withMessage('Message is required'),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    }
  ]
};

module.exports = validationMiddleware;
