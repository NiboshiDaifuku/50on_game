import { useState } from "react";
import Tiles from "./component/Tiles";
import Modal from "./component/Modal";
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
      <button className="button-rule" onClick={showRuleModal}>
        ルール説明
      </button>
      <Tiles />
      <Modal showFlag={showRuleFlag} setShowModal={setShowRuleModal} />
      <form>
        <input
          type="text"
          name="answer"
          pattern="[ぁ-んー]+"
          placeholder="ひらがなで回答を入力してね"
          required
        />
        <button className="button-answer">決定</button>
      </form>
    </div>
  );
}
