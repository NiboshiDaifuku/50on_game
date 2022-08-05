import Answer from "./Answer";
import "../css/AnswerList.scss";

const AnswerList = (props) => {
  const answers = props.answerQueue.map((e) => (
    <Answer key={e.answer} player={e.player} answer={e.answer} point={e.point} />
  ));

  return (
    <table className="answer-list">
      <tbody>
        <tr>
          <th>回答者</th>
          <th>回答</th>
          <th>獲得点数</th>
        </tr>
        {answers}
      </tbody>
    </table>
  );
};

export default AnswerList;
