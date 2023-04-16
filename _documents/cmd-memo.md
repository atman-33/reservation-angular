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