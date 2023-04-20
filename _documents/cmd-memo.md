# ---- 開発環境構築 ----

### package-lock.json に含まれたモジュールをインストール
npm install

# ---- フロントエンド ----
### サーバー起動（--open オプションでWebブラウザ起動）
ng serve --open

## bootstrap適用
### 1. bootstrapインストール　※安定板のver4を指定
npm install bootstrap@4 --save

### 2. angular.jsonの styles に、bootstrap.min.cssを追記（node_modulesフォルダに保存）
            "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.scss"
            ],
※sytlesは複数存在するので、全てに適用すること

### Angularコンポーネント生成
ng generate component component-name

# ---- バックエンド ----

### express インストール
npm install express --save