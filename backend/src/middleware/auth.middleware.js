import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            res.status(401).json({ message: "Unauthorized - No token provided" });
        }
        
    } catch (error) {
        
    }
}