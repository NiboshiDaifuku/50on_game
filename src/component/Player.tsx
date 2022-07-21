import "../css/Player.scss";

const Player = (props) => {
  return (
    <>
      <div className={"Player p1" + (props.turn === 1 ? " turn" : "")}>
        <div className="name">{props.p1_name}</div>
      </div>
      <div className={"Player p2" + (props.turn === 2 ? " turn" : "")}>
        <div className="name">{props.p2_name}</div>
      </div>
      <div className={"Player p3" + (props.turn === 3 ? " turn" : "")}>
        <div className="name">{props.p3_name}</div>
      </div>
      <div className={"Player p4" + (props.turn === 4 ? " turn" : "")}>
        <div className="name">{props.p4_name}</div>
      </div>
    </>
  );
};

export default Player;
