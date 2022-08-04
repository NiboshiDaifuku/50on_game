import { useState } from "react";
import Modal from "./component/Modal";
import GameSection from "./component/GameSection";
import { getGameTheme } from "./lib/GameOperation";
import { ruleModalContent } from "./lib/Database";

import "./css/App.scss";
import "./css/Tiles.scss";

export default function App() {
  // ルール説明用Modal
  const [showModalFlag, setShowModal] = useState(false);
  const showModal = () => {
    setShowModal(true);
  };

  // お題リセットボタン
  const [gameTheme, setGameTheme] = useState(getGameTheme());
  const resetGameTheme = () => {
    setGameTheme(getGameTheme());
  };

  return (
    <div className="App">
      <h1>知的協力ゲーム「50音表をぬりつぶせ！」</h1>
      <h2>お題: {gameTheme}</h2>
      <button className="button-rule" onClick={showModal}>
        ルール説明
      </button>
      <button className="button-rule" onClick={resetGameTheme}>
        お題リセット
      </button>
      <GameSection />
      <Modal showFlag={showModalFlag} setShowModal={setShowModal} content={ruleModalContent} />
    </div>
  );
}
