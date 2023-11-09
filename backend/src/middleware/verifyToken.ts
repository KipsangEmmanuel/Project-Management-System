import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";

dotenv.config();

import jwt from "jsonwebtoken";
import { checkDetailsUser } from "../types/userInterfaces";

export interface ExtendedUser extends Request {
  info?: checkDetailsUser;
}

export const verifyToken = (
  request: ExtendedUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = request.headers["token"] as string;
    if (!token) {
      return res.status(401).json({
        message: "No token provided",
      });
    }
    const decoded = jwt.verify(
      token,
      process.env.SECRET as string
    ) as checkDetailsUser;
    request.info = decoded;
  } catch (error) {
    return res.json((error as Error).message);
  }

  next();
};
