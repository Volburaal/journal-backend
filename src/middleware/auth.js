import jwt from "jsonwebtoken";

export const authenticate = () => (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];      
      const user = jwt.verify(token, process.env.JWT_SECRET);

      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({ message: "Unauthorized" });
    }
};