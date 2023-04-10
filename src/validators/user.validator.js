const { check, param } = require("express-validator");
const validateResult = require("../utils/validate");

const createUserValidator = [
  check("username", "Error with the username")
    .exists()
    .withMessage("The 'username' property must exist")
    .notEmpty()
    .withMessage("The username must not be empty")
    .isString()
    .withMessage("The username must be a string")
    .isLength({ min: 6, max: 30 })
    .withMessage("The username must be between 6 and 30 characters"),
  check("email", "Error with email")
    .exists()
    .withMessage("The email property was not found")
    .notEmpty()
    .withMessage("No value was found fot the 'email' property")
    .isString()
    .withMessage("The email property must be a string")
    .isLength({ min: 7, max: 50 })
    .withMessage("The email must have a length between 7 and 50 characters")
    .isEmail()
    .withMessage("The email does not have a correct format"),
  check("password", "Error with the password")
    .exists()
    .withMessage("The password property was not found")
    .notEmpty()
    .withMessage("No value was found for the password property")
    .isString()
    .withMessage("The password property must be a string")
    .isLength({ min: 7 })
    .withMessage("The password must have a minimum length of 7 characters."),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const updateUserValidator = [
  param("id").isInt().withMessage("The id must be an integer"),
  check("username", "Error with the username field")
    .exists()
    .withMessage("Debe existir la propiedad 'username'")
    .notEmpty()
    .withMessage("The 'username' property must exist")
    .isString()
    .withMessage("The username must be a string")
    .isLength({ min: 6, max: 30 })
    .withMessage("The username must have between 6 and 30 characters"),
  check("avatar", "Error with the avatar")
    .exists()
    .withMessage("The 'avatar' property must exist")
    .notEmpty()
    .withMessage("The avatar must not be empty")
    .isURL()
    .withMessage("The avatar must be a valid URL"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
  createUserValidator,
  updateUserValidator,
};