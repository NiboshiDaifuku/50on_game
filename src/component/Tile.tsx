const getTileColor = (check_player: number) => {
  switch (check_player) {
    case 1:
      return "Tile p1check";
    case 2:
      return "Tile p2check";
    case 3:
      return "Tile p3check";
    case 4:
      return "Tile p4check";
    default:
      return "Tile";
  }
};

const Tile = (props) => {
  return (
    <div className={getTileColor(props.check_player)}>
      <div className="chara">{props.check_player === 0 ? props.chara : ""}</div>
    </div>
  );
};

export default Tile;
