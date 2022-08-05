import { gameTheme, hiraganas, playerNames, paintedPlayer } from "./Database";

/////////////////////////////////////////
// プレイヤーの処理系
/////////////////////////////////////////

// プレイヤーのターン管理
let testPlayerId = 1;
export const getPlayerTurn = () => {
  return testPlayerId;
};
export const updatePlayerTurn = () => {
  testPlayerId = (testPlayerId % 4) + 1;
};

// プレイヤー名の取得
export const getPlayerNameFromId = (playerId: number) => {
  return playerNames[playerId - 1];
};

/////////////////////////////////////////
// タイル処理系
/////////////////////////////////////////

// ひらがな1文字を受け取り、そのタイルの座標を返す関数
const getTilePosFromHiragana = (hiragana: string): { [key: string]: number } => {
  let tile_pos = { x: -1, y: -1 };

  hiraganas.forEach((line, row) =>
    line.forEach((element, col) => {
      if (hiragana === element) {
        tile_pos.x = row;
        tile_pos.y = col;
      }
    })
  );
  return tile_pos;
};

// タイル座標とプレイヤーIDを受け取り、そのタイルを塗る関数
const paintTile = (tilePos: { [key: string]: number }, playerId: number) => {
  // 誰にも塗られていなければ塗る
  if (paintedPlayer[tilePos.x][tilePos.y] === 0) {
    paintedPlayer[tilePos.x][tilePos.y] = playerId;
  }
};

// 変換済み回答文字列を受け取って、タイルに色を塗る関数
// ※引数のtextはひらがなのみであることをチェック済みである想定
export const updateTiles = (text: string, playerId: number) => {
  for (let i = 0; i < text.length; ++i) {
    const tilePos = getTilePosFromHiragana(text.charAt(i));
    paintTile(tilePos, playerId);
  }
};

// プレイヤーIDを受け取り、塗りつぶしたタイル数を返す関数
export const getPaintedTileNumFromPlayerId = (playerId: number) => {
  let paintedTileNum = 0;

  paintedPlayer.forEach((line) =>
    line.forEach((element) => {
      if (element === playerId) {
        paintedTileNum++;
      }
    })
  );
  return paintedTileNum;
};

/////////////////////////////////////////
// ゲーム根幹の処理系
/////////////////////////////////////////

// 0～max-1 の間の整数を返す関数
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// ゲームのお題を返す関数
export const getGameTheme = () => {
  const index = getRandomInt(gameTheme.length);
  return gameTheme[index];
};

// ゲームが終了したか判定する関数
export const isGameOver = () => {
  let isLeftUnpaintedTile = false;

  paintedPlayer.forEach((line) =>
    line.forEach((element) => {
      if (element === 0) {
        isLeftUnpaintedTile = true;
      }
    })
  );

  // ゲームが終了した = 塗り残しがない
  if (!isLeftUnpaintedTile) {
    return true;
  }
  return false;
};

// Modalに表示するゲーム結果内容を更新する
export let gameResultModalContent = <></>;
export const updateGameResultModalContent = () => {
  gameResultModalContent = (
    <>
      <h1>結果発表</h1>
      <b>
        {getPlayerNameFromId(1)}: {getPaintedTileNumFromPlayerId(1)}ポイント
      </b>
      <br />
      <b>
        {getPlayerNameFromId(2)}: {getPaintedTileNumFromPlayerId(2)}ポイント
      </b>
      <br />
      <b>
        {getPlayerNameFromId(3)}: {getPaintedTileNumFromPlayerId(3)}ポイント
      </b>
      <br />
      <b>
        {getPlayerNameFromId(4)}: {getPaintedTileNumFromPlayerId(4)}ポイント
      </b>
      <br />
      <br />
    </>
  );
};

/////////////////////////////////////////
// 回答テキスト処理系
/////////////////////////////////////////
export const checkTextResult = {
  OK: 1,
  EMPTY: 2,
  NOT_HIRAGANA: 3,
  ALREADY_PAINTED: 4
};

// 回答文字列を受け取って、有効な回答かどうか確認する関数
export const checkAnswerText = (answer: string) => {
  const pattern = /^[ぁ-んー]+$/;

  // 全てひらがな
  if (answer.match(pattern)) {
    // 塗りつぶし可能なタイルが残っているか TODO★
    // if (canUpdateTiles(tempText)) {
    return checkTextResult.OK;
    // } else {
    // return checkTextResult.ALREADY_PAINTED
    // }
  }
  // 何も入力されていない
  else if (answer === "") {
    return checkTextResult.EMPTY;
  }
  // ひらがな以外が含まれる
  else {
    return checkTextResult.NOT_HIRAGANA;
  }
};

// 回答文字列を受け取り、以下の処理を施す関数
//  ・濁点・半濁点の除去
//  ・小文字を大文字に変換
//  ・「重複文字・ゎ・ゐ・ゑ・を・ー」の除外
export const convertAnswerText = (text: string) => {
  const patternSmall = /^[ぁぃぅぇぉっゃゅょ]+$/;
  const patternVoicingMark = /^[がぎぐげござじずぜぞだぢづでどばびぶべぼ]+$/;
  const patternPsoundMark = /^[ぱぴぷぺぽ]+$/;
  const patternNotCovered = /^[ゎゐゑをー]+$/;

  let convertedText = "";

  for (let i = 0; i < text.length; ++i) {
    const char = text.charAt(i);
    let tempChar = "";

    // 対象外の文字はスルー
    if (char.match(patternNotCovered)) {
    }
    // 小文字はUnicodeを1つインクリメントする
    else if (char.match(patternSmall)) {
      tempChar = String.fromCharCode(char.charCodeAt(0) + 1);
    }
    // 濁音はUnicodeを1つデクリメントする
    else if (char.match(patternVoicingMark)) {
      tempChar = String.fromCharCode(char.charCodeAt(0) - 1);
    }
    // 半濁音はUnicodeを2つデクリメントする
    else if (char.match(patternPsoundMark)) {
      tempChar = String.fromCharCode(char.charCodeAt(0) - 2);
    }
    // それ以外の素のひらがな
    else {
      tempChar = char;
    }

    // 文字が重複していないか確認
    let isExist = false;
    for (let j = 0; j < convertedText.length; ++j) {
      if (tempChar === convertedText.charAt(j)) {
        isExist = true;
      }
    }
    if (!isExist) {
      convertedText += tempChar;
    }
  }
  return convertedText;
};

/////////////////////////////////////////
// 回答履歴系
/////////////////////////////////////////
