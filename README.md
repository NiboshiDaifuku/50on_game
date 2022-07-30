# 50on_game
お題に則した単語を回答し、50音表を埋めていく言葉遊び系ブラウザゲームです。

![image](https://user-images.githubusercontent.com/53576995/181919876-1de31997-d6f3-4816-b1f7-fafb42e444d3.png)

# ゲームの遊び方
以下のURLにアクセスして、添付画像右上の位置にある`Open in New Window`ボタンをクリックしてください。   
（面倒なので真面目にデプロイしていません）  
https://codesandbox.io/s/github/NiboshiDaifuku/50on_game  
  
複数人で遊ぶ場合は、ホスト役の人が画面共有してあげてください。  
（オンライン対戦機能は技術面・時間面から諦めました）  
  
![キャプチャ](https://user-images.githubusercontent.com/53576995/181920053-9998c047-2f4c-46f9-8d92-ad61aca9f59b.PNG)

1. 好きなお題を決めます
2. 自分の番が来たプレイヤーは、お題に則した単語を**ひらがなで**入力するか、パスします  
（ひらがな以外の文字を入力した場合、その単語は反映されません）
3. 2.を50音表が埋まるまで繰り返します

# ルール説明
### 回答の制限事項
- 大文字と小文字は同じ文字としてカウントします
  - 例: や=ゃ　つ=っ
- 濁点と半濁点は無視してカウントします
  - 例: は=ば=ぱ
- 伸ばし棒はカウントしません
- 回答しても50音表が1つも埋まらない単語はNGです

### プレイ人数
1～4人

# Release Note
|バージョン|日付|詳細内容|
|-|-|-|
|0.1.0|2022.07.31|β版リリース|

# 開発環境
Google Chrome + CodeSandbox のみで書いてます。  
以下にアクセスできれば、特に準備は不要なはずです。  
https://codesandbox.io/s/github/NiboshiDaifuku/50on_game  

# 元ネタ
https://www.youtube.com/watch?v=eLaofAijAo0
