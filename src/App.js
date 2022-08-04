import HeaderSection from "./component/HeaderSection";
import GameSection from "./component/GameSection";
import InformationSection from "./component/InformationSection";

import "./css/App.scss";
import "./css/Tiles.scss";

export default function App() {
  return (
    <div className="App">
      <HeaderSection />
      <GameSection />
      <InformationSection />
    </div>
  );
}
