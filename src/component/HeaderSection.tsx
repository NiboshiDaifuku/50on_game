import { useState } from "react";
import Modal from "../component/Modal";
import { ruleModalContent } from "../lib/Database";
import { getGameTheme } from "../lib/GameOperation";

import "../css/HeaderSection.scss";

const HeaderSection = (props) => {
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
    <div className="header-section">
      <h1>言葉遊びゲーム「50音表をぬりつぶせ！」</h1>
      <h2>お題: {gameTheme}</h2>
      <button className="button-rule" onClick={showModal}>
        ルール説明
      </button>
      <button className="button-rule" onClick={resetGameTheme}>
        お題リセット
      </button>
      <Modal showFlag={showModalFlag} setShowModal={setShowModal} content={ruleModalContent} />
    </div>
  );
};

export default HeaderSection;
