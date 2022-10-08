export const gameTheme: string[] = [
  "家にあるもの",
  "曲名",
  "虫の名前",
  "ケガ・病気の名前",
  "植物の名前",
  "生き物の名前",
  "乗り物の名前",
  "文房具の名前",
  "任天堂のキャラクター",
  "食べ物・飲み物",
  "ポケモンの名前",
  "ポケモンの技名",
  "有名企業の名前",
  "キャラクターの名前",
  "アニメ・漫画・映画のタイトル",
  "賢そうな単語",
  "ことわざ・四字熟語",
  "暖色のもの",
  "寒色のもの"
];

export const hiraganas: string[][] = [
  ["や", "ら", "ま", "は", "な", "た", "さ", "か", "あ"],
  ["ゆ", "り", "み", "ひ", "に", "ち", "し", "き", "い"],
  ["よ", "る", "む", "ふ", "ぬ", "つ", "す", "く", "う"],
  ["わ", "れ", "め", "へ", "ね", "て", "せ", "け", "え"],
  ["ん", "ろ", "も", "ほ", "の", "と", "そ", "こ", "お"]
];

// 盤面を塗りつぶしたプレイヤー
export const paintedPlayer: number[][] = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

export const playerNames: string[] = ["プレイヤー1", "プレイヤー2", "プレイヤー3", "プレイヤー4"];

// 回答履歴
export interface answerArray {
  player: number;
  answer: string;
  point: number;
}
export const answerQueue: answerArray[] = [];

// ルール説明用Modal
export const ruleModalContent = (
  <>
    <h1>ルール説明</h1>
    <h3>ゲームの遊び方</h3>
    <li>好きなお題を決めます。</li>
    <li>自分の順番がきたプレイヤーは、お題に則した言葉を「ひらがな」で入力します。</li>
    <li>単語を思いつかなかった場合はパスします。</li>
    <li>以上を50音表が埋まるまで繰り返します。</li>
    <br />
    <h3>回答の制限事項</h3>
    <li>大文字と小文字は同じ文字としてカウントします。（例: や＝ゃ　つ＝っ）</li>
    <li>濁点と半濁点は無視してカウントします。（例: は＝ば＝ぱ）</li>
    <li>伸ばし棒はカウントしません。</li>
    <li>50音表が1文字も埋まらない言葉はNGです。</li>
    <br />
  </>
);
