const { check, param } = require("express-validator");
const validateResult = require("../utils/validate");


const addToCartValidator = [
    check("product_id", "Error with the field product_id")
        .exists()
        .withMessage("The 'product_id' property must exist")
        .notEmpty()
        .withMessage("The product_id field must not be empty")
        .isInt()
        .withMessage("The product_id field must be an integer"),
    check("quantity", "error quantity field")
        .exists()
        .withMessage("There must exist the property 'quantity'")
        .notEmpty()
        .withMessage("The quantity field must not be empty")
        .isInt()
        .withMessage("The quantity field must be an integer"),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];

module.exports = {
    addToCartValidator,
}