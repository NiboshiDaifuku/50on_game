import { useState } from "react";
import Tiles from "./component/Tiles";
import Modal from "./component/Modal";
import Player from "./component/Player";
import {
  checkAnswerText,
  checkTextResult,
  convertAnswerText,
  getGameTheme,
  getPlayerTurn,
  updatePlayerTurn,
  updateTiles
} from "./lib/GameOperation";

import "./css/App.css";
import "./css/Tiles.scss";

export default function App() {
  // ルール説明用Modal
  const [showRuleFlag, setShowRuleModal] = useState(false);
  const showRuleModal = () => {
    setShowRuleModal(true);
  };

  // プレイヤー情報
  const p1_name = "プレイヤー1";
  const p2_name = "プレイヤー2";
  const p3_name = "プレイヤー3";
  const p4_name = "プレイヤー4";

  // 回答テキスト
  const [tempText, setTempText] = useState("");
  const [answerText, setAnswerText] = useState("");
  const onClickAnswerButton = () => {
    const checkResult = checkAnswerText(tempText);

    // 回答がOKならテキストを更新してタイルの色塗りを実行
    if (checkResult === checkTextResult.OK) {
      setAnswerText(tempText);
      updateTiles(convertAnswerText(tempText), getPlayerTurn());
      setTempText("");
      updatePlayerTurn();
    }
    // 回答がNGなら通知を出す
    else if (checkResult === checkTextResult.EMPTY) {
      console.log("何も入力されてないよ！");
    } else if (checkResult === checkTextResult.NOT_HIRAGANA) {
      console.log("ひらがな以外の文字が入ってるよ！");
    } else if (checkResult === checkTextResult.ALREADY_PAINTED) {
      console.log("ぬりつぶせるタイルがないよ！");
    }
  };

  return (
    <div className="App">
      <h1>知的協力ゲーム「50音表をぬりつぶせ！」</h1>
      <h3>お題: {getGameTheme()}</h3>
      <button className="button-rule" onClick={showRuleModal}>
        ルール説明
      </button>
      <Tiles />
      <Player
        p1_name={p1_name}
        p2_name={p2_name}
        p3_name={p3_name}
        p4_name={p4_name}
        turn={getPlayerTurn()}
      />
      <Modal showFlag={showRuleFlag} setShowModal={setShowRuleModal} />
      <input
        type="text"
        name="answer"
        placeholder="ひらがなで回答を入力してね"
        onChange={(event) => setTempText(event.target.value)}
      />
      <button className="button-answer" type="button" onClick={onClickAnswerButton}>
        決定
      </button>
      <p>temp: {tempText}</p>
      <p>answer: {answerText}</p>
    </div>
  );
}
