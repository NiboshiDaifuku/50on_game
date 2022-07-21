import Tile from "./Tile";
import { hiraganas, paintedPlayer } from "../lib/Database";
import "../css/Tiles.scss";

const Tiles = () => {
  const tiles = hiraganas.map((line, row) =>
    line.map((element, col) => (
      <Tile key={element} chara={element} paintedPlayer={paintedPlayer[row][col]} />
    ))
  );

  return <div className="Tiles">{tiles}</div>;
};

export default Tiles;
