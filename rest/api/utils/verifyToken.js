import  Jwt from "jsonwebtoken";
import { createError } from "./Error.js";


export const verifyToken = (req,res,next) => {
    const token = req.cookies.access_token;
    if(!token) {
        return next (createError(401, "You are not Authenticated ... "))
    }

    Jwt.verify(token, process.env.Jwt, (err, user) => {
        if(err) return next (createError(403, "Token Is Not Valid"));
        req.user = user;
        next()
    })
}

// here we are bascically very the user ...
// if the user has cookie than he/she can perform any task .... 
export const verifyUser = (req, res, next) => {
    verifyToken(req, res,next, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next()
      } else {
        return next(createError(403, "You are not authorized!"));
      }
    });
  };

//   now we will verify that the user is admin or not .... 
export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};