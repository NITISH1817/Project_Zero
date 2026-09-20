import jwt from "jsonwebtoken";
import { query } from "../config/db.js";

export const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret');
      
      const result = await query("SELECT id, name, email, role FROM users WHERE id = $1", [decoded.id]);
      req.user = result.rows[0];
      
      if (!req.user) {
        return res.status(401).json({ success: false, error: "Not authorized, user not found" });
      }
      next();
    } catch (error) {
      res.status(401).json({ success: false, error: "Not authorized, token failed" });
    }
  } else {
    res.status(401).json({ success: false, error: "Not authorized, no token" });
  }
};
