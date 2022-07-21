import "../css/Player.scss";
import { getPlayerNameFromId } from "../lib/GameOperation";

const Player = (props) => {
  return (
    <>
      <div className={"Player p1" + (props.turn === 1 ? " turn" : "")}>
        <div className="name">{getPlayerNameFromId(1)}</div>
      </div>
      <div className={"Player p2" + (props.turn === 2 ? " turn" : "")}>
        <div className="name">{getPlayerNameFromId(2)}</div>
      </div>
      <div className={"Player p3" + (props.turn === 3 ? " turn" : "")}>
        <div className="name">{getPlayerNameFromId(3)}</div>
      </div>
      <div className={"Player p4" + (props.turn === 4 ? " turn" : "")}>
        <div className="name">{getPlayerNameFromId(4)}</div>
      </div>
    </>
  );
};

export default Player;
