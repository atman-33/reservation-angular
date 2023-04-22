const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const FakeDb = require('./fake-db');
const path = require('path');

const productRoutes = require('./routes/products');

mongoose.connect(config.DB_URI).then(() => {
    console.log('MongoDB Connected!');

    if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-unused-vars
        const fakeDb = new FakeDb();
        // Fakeデータを初期化する際にコメントアウトを解除
        fakeDb.initDb();
    }
});

const app = express();

app.use('/api/v1/products', productRoutes);


if (process.env.NODE_ENV === 'production') {
    /**
     * apiのURL以外のリクエストが届いた際、
     * dist（プロダクションビルド）に存在するindex.htmlを返す。
     * これにより、node index.jsを起動すればフロントエンド側も合わせて対応可能。
     * （__dirname: カレントディレクトリ（この場合はserver））
     */
    const appPath = path.join(__dirname, '..', 'dist', 'template-app-angular');
    app.use(express.static(appPath));
    app.get('*', function (req, res) {
        res.sendFile(path.resolve(appPath, 'index.html'));
    });
}

const PORT = process.env.PORT || '3001';

app.listen(PORT, function () {
    console.log('I am running!');
});