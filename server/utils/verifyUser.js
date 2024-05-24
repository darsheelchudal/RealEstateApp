import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  
  try{
if(!token){
    res.status(4001).send("No tokenn")
    return
}
const user=jwt.verify(token, process.env.JWT_SECRET)

req.body=user
next()
}

  catch(err){
    next(err)
  }
 
};
