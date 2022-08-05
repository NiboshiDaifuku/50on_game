import AnswerList from "./AnswerList";
import "../css/InformationSection.scss";

const InformationSection = (props) => {
  return (
    <div className="information-section">
      <AnswerList answerQueue={props.answerQueue} />
    </div>
  );
};

export default InformationSection;
