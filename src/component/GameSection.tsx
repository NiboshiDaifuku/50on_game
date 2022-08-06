import { useState, useReducer } from "react";
import Tiles from "./Tiles";
import Modal from "./Modal";
import Player from "./Player";
import ErrorAnswerNotice from "./ErrorAnswerNotice";
import {
  checkAnswerText,
  checkTextResult,
  convertAnswerText,
  countPaintableTiles,
  gameResultModalContent,
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

  // 回答NG時の吹き出し
  const [errorCode, setErrorCode] = useState(checkTextResult.OK);

  // 回答テキスト
  const [tempText, setTempText] = useState("");
  const onClickPassButton = () => {
    updatePlayerTurn();
    forceUpdate();
  };
  let checkResult = checkTextResult.OK;
  const onClickAnswerButton = () => {
    checkResult = checkAnswerText(tempText);

    // 回答がOKならテキストを更新してタイルの色塗りを実行
    if (checkResult === checkTextResult.OK) {
      const convertedAnswerText = convertAnswerText(tempText);
      const point = countPaintableTiles(convertedAnswerText);
      updateTiles(convertedAnswerText, getPlayerTurn());
      props.updateAnswerQueue({
        player: getPlayerTurn(),
        answer: tempText,
        point: point
      });
      setTempText("");
      updatePlayerTurn();
    }
    // 回答がNGなら通知を出す
    setErrorCode(checkResult);

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
        value={tempText}
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
      <ErrorAnswerNotice errorCode={errorCode} />
    </div>
  );
};

export default GameSection;
