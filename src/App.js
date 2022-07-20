import "./css/App.css";
import "./css/Tiles.scss";
import Tiles from "./Tiles";
import { getGameTheme } from "./lib/GameOperation";

export default function App() {
  return (
    <div className="App">
      <h1>知的協力ゲーム「50音表をぬりつぶせ！」</h1>
      <h3>お題: {getGameTheme()}</h3>
      <Tiles />
    </div>
  );
}
