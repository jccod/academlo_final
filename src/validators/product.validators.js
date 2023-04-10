const { check, param, body } = require("express-validator");
const validateResult = require("../utils/validate");


const createProductValidator = [
    body("name", "Error in the name field")
        .exists()
        .withMessage("There must be the property 'name'")
        .notEmpty()
        .withMessage("El campo name no debe estar vacio")
        .isString()
        .withMessage("The name field must not be empty")
        .isLength({ min: 6, max: 30 })
        .withMessage("The name field must be between 6 and 30 characters long."),
    body("description", "The description field contains an error")
        .exists()
        .withMessage("A property 'description' is required")
        .notEmpty()
        .withMessage("Please provide a description in the field")
        .isString()
        .withMessage("The description field must be in text format")
        .isLength({ min: 6 })
        .withMessage("The description field should contain at least 6 characteres"),
    body("price", "Error in the price field")
        .exists()
        .withMessage("There must be a property 'price'")
        .notEmpty()
        .withMessage("The price field must not be empty"),
    body("stock", "error in the stock field")
        .exists()
        .withMessage("There must be a property 'stock'")
        .notEmpty()
        .withMessage("The stock field must not be empty"),
    body("file", "Error in the file field")
        .exists()
        .withMessage("There must be a property 'product_image'")
        .notEmpty(),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];

const updateProductValidator = [
    param("id_product").isInt().withMessage("The id must be an integer"),
    check("description", "Error in the description field")
        .exists()
        .withMessage("There must be a property 'description'")
        .notEmpty()
        .withMessage("The description field must not be empty")
        .isString()
        .withMessage("The description field must be an string")
        .isLength({ min: 6 })
        .withMessage("The description field must be at least 6 characters long"),
    (req, res, next) => {
        validateResult(req, res, next);
    },
]

module.exports = {
    createProductValidator,
    updateProductValidator,
};