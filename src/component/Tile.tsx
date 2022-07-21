const getTileColor = (paint_player: number) => {
  switch (paint_player) {
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
    <div className={getTileColor(props.paintedPlayer)}>
      <div className="chara">{props.paintedPlayer === 0 ? props.chara : ""}</div>
    </div>
  );
};

export default Tile;
