const jwt = require('jsonwebtoken');
const JWT_SECRET = "mysecret";

const verifyToken=(req, res, next)=> {
  const token = req.header('Authorization');
  
  if (!token) {
    return res.status(401).json({ error: 'token not found' });
  }


  
  try {
      const data=jwt.verify(token,JWT_SECRET);
      req.userId=data.userId;
      next();

  } catch (error) {
    console.log(error);
  }
}




module.exports = verifyToken;
