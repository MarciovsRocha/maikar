const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'Token não fornecido' });

    jwt.verify(token, '1c48c66e22592324cde1b46ccf03b5e62e046a0047f8d156195b1d2a26e6f8b575fd3e351e4abd229aa643c4b0149a30b8daf93f6e3f4c827bb121e146238e84' /*process.env.JWT_SECRET*/, (err, user) => {
        if (err) return res.status(403).json({ message: 'Token inválido' });
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;
