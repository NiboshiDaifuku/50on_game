import { checkTextResult, getErrorAnswerMessage } from "../lib/GameOperation";
import "../css/ErrorAnswerNotice.scss";

const ErrorAnswerNotice = (props) => {
  // 回答がNGなら通知を出す
  return props.errorCode !== checkTextResult.OK ? (
    <div className="answer-error-notice">{getErrorAnswerMessage(props.errorCode)}</div>
  ) : (
    <></>
  );
};

export default ErrorAnswerNotice;
