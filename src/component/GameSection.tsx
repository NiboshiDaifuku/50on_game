import { useState, useReducer } from "react";
import Tiles from "./Tiles";
import Modal from "./Modal";
import Player from "./Player";
import {
  addAnswerQueue,
  checkAnswerText,
  checkTextResult,
  convertAnswerText,
  gameResultModalContent,
  getPlayerNameFromId,
  getPlayerTurn,
  isGameOver,
  updateGameResultModalContent,
  updatePlayerTurn,
  updateTiles
} from "../lib/GameOperation";

import "../css/App.scss";
import "../css/Tiles.scss";
import "../css/GameSection.scss";

const GameSection = (props) => {
  // 強制レンダリング
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  // Modal
  const [showModalFlag, setShowModal] = useState(false);
  const showModal = () => {
    setShowModal(true);
  };

  // ゲーム終了画面用Modal
  const [gameOver, setGameOver] = useState(false);

  // 回答テキスト
  const [tempText, setTempText] = useState("");
  //const [answerText, setAnswerText] = useState("");
  const onClickPassButton = () => {
    updatePlayerTurn();
    forceUpdate();
  };
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

    if (isGameOver()) {
      updateGameResultModalContent();
      setGameOver(true);
    }
  };

  return (
    <div className="game-section">
      <Tiles />
      <Player turn={getPlayerTurn()} />
      <Modal showFlag={gameOver} setShowModal={setShowModal} content={gameResultModalContent} />
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
      <button
        className={"button-answer p" + getPlayerTurn()}
        type="button"
        onClick={onClickPassButton}
      >
        パス
      </button>
      {/* answerQueue */}
    </div>
  );
};

export default GameSection;
