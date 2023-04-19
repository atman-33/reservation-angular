const Product = require('./model/product');

// eslint-disable-next-line no-unused-vars
class FakeDb {

    constructor() {
        this.products = [
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingText1: '1:XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXXX',
                headingText2: '2:XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXXX',
                headingText3: '3:XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXXX',
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingText1: '1:XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXXX',
                headingText2: '2:XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXXX',
                headingText3: '3:XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXXX',
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Standard',
                price: 299,
                description: '',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingText1: '1:XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXXX',
                headingText2: '2:XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXXX',
                headingText3: '3:XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXXX',
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Special',
                price: 999,
                description: '',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingText1: '1:XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXXX',
                headingText2: '2:XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXXX',
                headingText3: '3:XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXXX',
            }
        ];
    }

    /**
     * MongoDBのデータを初期化
     */
    async initDb() {
        await this.cleanDb();
        this.pushProductsToDb();
    }

    /**
     * MongoDBのFakeデータを削除
     */
    async cleanDb() {
        // deleteMany({})でDBデータを全て削除
        await Product.deleteMany({});
    }

    /**
     * MongoDBにFakeデータをINSERT
     */
    pushProductsToDb() {
        this.products.forEach(product => {
            const newProduct = new Product(product);
            newProduct.save();
        });
    }
}

module.exports = FakeDb;