import { useState } from "react";
import Tiles from "./component/Tiles";
import Modal from "./component/Modal";
import Player from "./component/Player";
import {
  addAnswerQueue,
  checkAnswerText,
  checkTextResult,
  convertAnswerText,
  getGameTheme,
  getPlayerNameFromId,
  getPlayerTurn,
  updatePlayerTurn,
  updateTiles
} from "./lib/GameOperation";

import "./css/App.scss";
import "./css/Tiles.scss";
import { answerQueue } from "./lib/Database";

export default function App() {
  // ルール説明用Modal
  const [showRuleFlag, setShowRuleModal] = useState(false);
  const showRuleModal = () => {
    setShowRuleModal(true);
  };

  // お題リセットボタン
  const [gameTheme, setGameTheme] = useState(getGameTheme());
  const resetGameTheme = () => {
    setGameTheme(getGameTheme());
  };

  // 回答テキスト
  const [tempText, setTempText] = useState("");
  //const [answerText, setAnswerText] = useState("");
  const onClickAnswerButton = () => {
    const checkResult = checkAnswerText(tempText);

    // 回答がOKならテキストを更新してタイルの色塗りを実行
    if (checkResult === checkTextResult.OK) {
      //setAnswerText(tempText);
      updateTiles(convertAnswerText(tempText), getPlayerTurn());
      addAnswerQueue({
        player: getPlayerNameFromId(getPlayerTurn()),
        answer: tempText,
        point: convertAnswerText(tempText).length
      });
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
      <h3>お題: {gameTheme}</h3>
      <button className="button-rule" onClick={showRuleModal}>
        ルール説明
      </button>
      <button className="button-rule" onClick={resetGameTheme}>
        お題リセット
      </button>
      <Tiles />
      <Player turn={getPlayerTurn()} />
      <Modal showFlag={showRuleFlag} setShowModal={setShowRuleModal} />
      <input
        type="text"
        name="answer"
        className={"answer-input-form p" + getPlayerTurn()}
        placeholder="ひらがなで回答を入力してね"
        onChange={(event) => setTempText(event.target.value)}
      />
      <button
        className={"button-answer p" + getPlayerTurn()}
        type="button"
        onClick={onClickAnswerButton}
      >
        決定
      </button>
      {/* answerQueue */}
    </div>
  );
}
