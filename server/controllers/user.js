const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../model/user');

function notAuthorized(res) {
    return res.status(401).json({ error: [{ title: 'Not Autorized', detail: 'You need to login!' }] });
}

/**
 * ミドルウェア
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
exports.authMiddleware = function (req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return notAuthorized(res);
    }

    // tokenが「Bearer ~~token~~」という形のデータを保持しているため、スペースでsplitしてtoken部分のみ取得 
    jwt.verify(token.split(' ')[1], config.SECRET, function (err, decodedToken) {
        if (err) {
            return res.status(401).json({ error: [{ title: 'Not Autorized', detail: 'Invalid token!' }] });
        }

        try {
            const foundUser = User.findById(decodedToken.userId);

            if (!foundUser) {
                return res.status(401).json({ error: [{ title: 'Not Autorized', detail: 'User does not found!' }] });
            }

            next();
        } catch {
            console.log(err);
            return res.status(401).json({ error: [{ title: 'Not Autorized', detail: 'Invalid token!' }] });
        }
    });
};