# トレンド収集用Lambda関数

## 概要
私の学習を効率化するための開発リポジトリです。
現在開発してあるもの
- 技術トレンド収集自動化

## 関数の詳細
### 技術トレンド収集自動化
QiitaのトレンドおよびZennのトレンドをAPI経由で取得し、Gmailに送信する関数になります。
AWS Lambdaにデプロイし、CloudWatch EventBredgeで設定した時間に実行します。
起床時間に合わせた午前６時、退社時刻である午後５時に設定し、トレンド記事を追う習慣づくりが目的です。

## Lambdaへのデプロイ方法とAWS側での設定について
deploy.shを実行することでLambdaへ自動でデプロイを行う。
大まかに解説すると、
1. srcディレクトリ内をzip化
2. distフォルダに格納してzip形式でlambdaにデプロイ
3. EventBridgeで設定したスケジュールで関数を実行する。

## 技術スタック
- TypeScript
  - axios
  - nodemailer
  - ts-node
- AWS Lambda, EventBridge
- shellscript