import Tile from "./Tile";
import { hiraganas } from "../lib/Database";
import "../css/Tiles.scss";

const check_player: number[][] = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 4, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 3, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 2, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1]
];

const Tiles = () => {
  const tiles = hiraganas.map((line, row) =>
    line.map((element, col) => (
      <Tile key={element} chara={element} check_player={check_player[row][col]} />
    ))
  );

  return <div className="Tiles">{tiles}</div>;
};

export default Tiles;
