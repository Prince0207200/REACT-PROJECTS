import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      res.status(400).json({ message: "Token not found" });
    }
    const decodeToken = jwt.verify(token, process.env.SECRET_KEY);
    if (!decodeToken) {
      return res.status(400).json({ message: "decodeToken not verify" });
    }
    
    req.userId = decodeToken.userId;
    next();
  } catch (error) {
    return res.status(500).json({ message: "isAuth error" });
  }
};

export default isAuth
