const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Không có token' });
  
    jwt.verify(token, 'secret', (err, user) => {
      if (err) return res.status(402).json({ message: 'Token không đúng' });;
      req.user = user;
      next();
    });
  };
  module.exports = authenticateToken;