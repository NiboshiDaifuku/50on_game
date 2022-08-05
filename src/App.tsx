import HeaderSection from "./component/HeaderSection";
import GameSection from "./component/GameSection";
import InformationSection from "./component/InformationSection";
import { answerArray, answerQueue } from "./lib/Database";

import "./css/App.scss";
import "./css/Tiles.scss";
import { useState } from "react";

export default function App() {
  const [, setAnswerQueue] = useState([]);
  const updateAnswerQueue = (answer: answerArray) => {
    answerQueue.unshift(answer);
    setAnswerQueue((preState) => ({ ...preState, answer }));
  };

  return (
    <div className="App">
      <HeaderSection />
      <GameSection updateAnswerQueue={updateAnswerQueue} />
      <InformationSection answerQueue={answerQueue} />
    </div>
  );
}
