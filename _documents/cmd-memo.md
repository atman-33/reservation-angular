# サーバー起動（--open オプションでWebブラウザ起動）
ng serve --open

# bootstrap適用

## bootstrapインストール　※安定板のver4を指定
npm install bootstrap@4 --save

## angular.jsonの styles に、bootstrap.min.cssを追記（node_modulesフォルダに保存）
            "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.scss"
            ],
※sytlesは複数存在するので、全てに適用すること

# Angularコンポーネント生成
ng generate component component-name

