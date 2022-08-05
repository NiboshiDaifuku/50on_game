import { getPlayerNameFromId } from "../lib/GameOperation";

const getAnswerColor = (player: number) => {
  switch (player) {
    case 1:
      return "answer p1";
    case 2:
      return "answer p2";
    case 3:
      return "answer p3";
    case 4:
      return "answer p4";
    default:
      return "answer";
  }
};

const Answer = (props) => {
  // 回答履歴があれば表示する
  return props.length !== 0 ? (
    <tr className={getAnswerColor(props.player)}>
      <td>{getPlayerNameFromId(props.player)}</td>
      <td>{props.answer}</td>
      <td>{"+" + props.point}</td>
    </tr>
  ) : (
    <></>
  );
};

export default Answer;
