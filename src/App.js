import { useState } from "react";
import Tiles from "./Tiles";
import Modal from "./Modal";
import { getGameTheme } from "./lib/GameOperation";

import "./css/App.css";
import "./css/Tiles.scss";

export default function App() {
  const [showRuleFlag, setShowRuleModal] = useState(false);
  const showRuleModal = () => {
    setShowRuleModal(true);
  };

  return (
    <div className="App">
      <h1>知的協力ゲーム「50音表をぬりつぶせ！」</h1>
      <h3>お題: {getGameTheme()}</h3>
      <button onClick={showRuleModal}>ルール説明</button>
      <Tiles />
      <Modal showFlag={showRuleFlag} setShowModal={setShowRuleModal} />
    </div>
  );
}
