const jwt = require("jsonwebtoken");
const JWT_KEY = "dracaris";

module.exports = (req , res , next) => {
    try {
        const token = req.params.token;
        const decoded = jwt.verify(token , JWT_KEY)
        req.decodedJWT = decoded;
        next();
    }catch (error){
        return res.status(403).json({ message: "Auth failed", status: 403 });
    }
}