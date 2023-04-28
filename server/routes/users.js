const express = require('express');
const router = express.Router();
const User = require('../model/user');
const jwt = require('jsonwebtoken');
const config = require('../config');

/**
 * ユーザーログイン
 */
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
        return res.status(422).json({ error: [{ title: 'User error', detail: 'Please fill email!' }] });
    }

    if (!password) {
        return res.status(422).json({ error: [{ title: 'User error', detail: 'Please fill password!' }] });
    }

    try {
        const foundUser = await User.findOne({ email });
        if (!foundUser) {
            return res.status(422).json({ error: [{ title: 'User error', detail: 'User does not Exist!' }] });
        }

        if (!foundUser.hasSamePassword(password)) {
            return res.status(422).json({ error: [{ title: 'User error', detail: 'Incorrect password!' }] });
        }

        const token = jwt.sign({
            userId: foundUser.id,
            username: foundUser.username
        }, config.SECRET, { expiresIn: '1h' });

        return res.json(token);

    } catch (err) {
        console.log(err);
        return res.status(422).json({ error: [{ title: 'User error', detail: 'Something wet wrong!' }] });
    }
});

/**
 * ユーザー登録
 */
router.post('/register', async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    /* 上と下の記述は同じ意味
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    */

    if (!username) {
        return res.status(422).json({ error: [{ title: 'User error', detail: 'Please fill username!' }] });
    }

    if (!email) {
        return res.status(422).json({ error: [{ title: 'User error', detail: 'Please fill email!' }] });
    }

    if (!password) {
        return res.status(422).json({ error: [{ title: 'User error', detail: 'Please fill password!' }] });
    }

    if (password !== confirmPassword) {
        return res.status(422).json({ error: [{ title: 'User error', detail: 'Please check passwords!' }] });
    }

    try {
        const foundUser = await User.findOne({ email });
        if (foundUser) {
            return res.status(422).json({ error: [{ title: 'User error', detail: 'User already Exists!' }] });
        }
    } catch (err) {
        return res.status(422).json({ error: [{ title: 'User error', detail: 'Something wet wrong!' }] });
    }

    const user = new User({ username, email, password });

    try {
        await user.save();
        return res.json({ 'registered': true });
    } catch (err) {
        return res.status(422).json({ error: [{ title: 'User error', detail: 'Something wet wrong!' }] });
    }
});

module.exports = router;