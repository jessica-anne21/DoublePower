const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.authenticate = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, 'your_jwt_secret');
    const user = User.findByPk(decoded.id);

    if (!user) {
        return res.status(401).send({ error: 'Please authenticate.' });
    }

    req.user = user;
    next();
};
