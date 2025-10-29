const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = '12h';

module.exports = {
  generateToken: (payload) => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
  },

  verifyToken: (token) => {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (err) {
      return null;
    }
  },

  authenticate: (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'توکن ارسال نشده' });

    const token = authHeader.split(' ')[1]; // Bearer TOKEN
    const decoded = module.exports.verifyToken(token);
    if (!decoded) return res.status(401).json({ message: 'توکن نامعتبر است' });
    
    req.user = decoded;
    next();
  }
};
