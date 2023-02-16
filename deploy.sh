#!/bin/sh
# distフォルダ
rm -rf ./dist
# TypeScriptビルド
tsc -p tsconfig.json
# package.jsonをdistにコピー
cp -f ./package.json ./yarn.lock ./dist
cd dist
# packageのインストール
yarn install --production
# uploadするためにzip化
# zip -r ./lambda.zip ./
powershell -c Compress-Archive -Path "./*" -DestinationPath lambda.zip

# zipデータをlambdaにアップロード
aws lambda update-function-code \
    --function-name qiitatrend \
    --zip-file fileb://lambda.zip