import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";

export const test = (req, res) => {
  res.json({
    message: "Api route is working",
  });
};

export const updateUser = async (req, res) => {
  console.log(req.body);
  // if (req.user.id !== req.params.id)
  //   return next(errorHandler(401, "You can only update your own account!"));
  // try {
  //   if (req.body.password) {
  //     req.body.password = bcryptjs.hashSync(req.body.password, 10);
  //   }

  //   const updatedUser = await User.findByIdAndUpdate(
  //     req.params.id,
  //     {
  //       $set: {
  //         username: req.body.username,
  //         email: req.body.email,
  //         password: req.body.password,
  //         avatar: req.body.avatar,
  //       },
  //     },
  //     { new: true }
  //   );

  //   const { password, ...rest } = updatedUser._doc;
  //   console.log("Request cookies:", req.cookies);
  //   console.log("Request headers:", req.headers);

  //   res.status(200).json(rest);
  // } catch (error) {
  //   next(error);
  // }
};
