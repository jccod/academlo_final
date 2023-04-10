const { check, param } = require("express-validator");
const validateResult = require("../utils/validate");

const authValidator = [
  check("email", "Error with email")
    .exists()
    .withMessage("Property not found email")
    .notEmpty()
    .withMessage("No value was found for the property 'email'")
    .isString()
    .withMessage("email must be a string")
    .isLength({ min: 7, max: 50 })
    .withMessage("The email must be between 7 and 50 characters in length")
    .isEmail()
    .withMessage("The email is not formatted correctly"),
  check("password", "Password error")
    .exists()
    .withMessage("Password property not found")
    .notEmpty()
    .withMessage("No value found for the password property")
    .isString()
    .withMessage("The password property must be a string")
    .isLength({ min: 7 })
    .withMessage("The password must be at least 7 characters long."),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
    authValidator
}