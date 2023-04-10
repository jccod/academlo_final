const AuthServices = require("../services/auth.services");
const UsersServices = require("../services/user.services");
const transporter = require("../utils/mailer")

const createUser = async (req, res, next) => {
  try {
    const newUser = req.body;
    console.log(newUser);
    const user = await UsersServices.create(newUser);
    if (user) {
      await transporter.sendMail({
        from: process.env.MAILER_CONFIG_USER,
        to: user.email,
        subject: "Welcome",
        html: `
          <p>Hola ${user.username} Welcome to Ecommerce_API, where you can buy and sell everything with the best commissions in the market.</p>`
      });
    }

    res.status(201).json({
      success: true
    });

  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    await UsersServices.update(id, {avatar: req.file?.path});

    res.status(201).json({success: true});
  } catch (error) {
    next(error)
  }
};

module.exports = {
  createUser,
  updateUser,
};
