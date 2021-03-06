投げ銭アプリ
===

NUXTによるSPAの実装方法を学習するため作成したサンプルアプリ。他ユーザに投げ銭することができる。
バックエンドはfirebaseの利用を想定している。

## 機能
- 新規登録
  - EmailとPasswordでユーザの新規登録が可能
  - 新規登録時にはユーザ名の登録が必須
  - 入力内容が不備がある場合は新規登録ボタンを押下できずに警告文が表示される
  - 新規登録に成功した場合はダッシュボードページに遷移する

- ログイン
  - EmailとPasswordですでに登録されているアカウントとしてログイン可能
  - 入力した内容でログインできない場合は警告文が表示される
  - ログイン成功した場合はダッシュボードページに遷移する
  - ログイン未実施時にダッシュボードページにアクセスるとログイン画面にリダイレクトされる
  - 定期的にtokenをリフレッシュする

- 自動ログイン
  - localstrageにidTokenがあればそれをもとに自動でログインする
  - localstrageのidTokenが期限切れの場合はlocalstrageに保存されたrefreshTokenを使ってtokenをリフレッシュするs