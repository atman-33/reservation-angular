const express = require('express');
const router = express.Router();
const Product = require('../model/product');
const UserCtrl = require('../controllers/user');

// ミドルウェア動作確認用
// router.get('/secret', UserCtrl.authMiddleware, async (req, res) => {
//     return res.json({ 'secret': true });
// });

/**
 * Productの全データを取得
 */
router.get('', async (req, res) => {
    try {
        const foundProducts = await Product.find({});
        return res.json(foundProducts);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Server Error' });
    }
});

/**
 * 指定したIDのProductデータを取得
 */
router.get('/:productId', UserCtrl.authMiddleware, async (req, res) => {
    try {
        const productId = req.params.productId;
        const foundProduct = await Product.findById(productId);
        return res.json(foundProduct);
    } catch (err) {
        console.log(err);
        return res.status(422).json({ error: [{ title: 'Product error', detail: 'Product not found!' }] });
        // ↑レスポンスがjsonであれば上記の書き方の方が良い（Content-Typeヘッダーが自動的に設定されるため）
        //return res.status(422).send({ error: [{ title: 'Product error', detail: 'Product not found!' }] });
    }
});

module.exports = router;