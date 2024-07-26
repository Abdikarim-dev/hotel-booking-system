const User = require("../model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const checkEmail = await User.findOne({
      email: email,
    }).select("+password");

    if (checkEmail) {
      if (
        checkEmail.status === "inactive" ||
        checkEmail.status === "suspended"
      ) {
        const message =
          checkEmail.status === "inactive"
            ? "You're temporarily inactive, please contact your superior!"
            : "You're suspended, please contact your superior!";

        return res.status(403).send({
          success: false,
          message: message,
        });
      } else {
        const passwordMatched = await bcrypt.compare(
          password,
          checkEmail.password
        );

        if (passwordMatched) {
          const dataToBeSendToFrontend = {
            _id: checkEmail._id,
          };
          const expiresIn = 7 * 24 * 60 * 60;
          const token = jwt.sign(
            dataToBeSendToFrontend,
            process.env.JWT_SECRET,
            {
              expiresIn,
            }
          );

          res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: expiresIn * 1000,
          });

          checkEmail.password = undefined;

          res.status(200).send({
            success: true,
            username: checkEmail,
            expiresIn,
            token,
          });
        } else {
          return res.status(200).send({
            success: false,
            message: "Incorrect Password, Please try again!",
          });
        }
      }
    } else {
      return res.status(200).send({
        success: false,
        message: "Username is not exist!, please create an account!",
      });
    }
  } catch (err) {
    next(err);
  }
};

exports.register = async (req, res, next) => {
  try {
    res.status(200).json({
      status: "success",
      message: "Implement Register here",
    });
  } catch (err) {
    next(err);
  }
};
