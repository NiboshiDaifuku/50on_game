import { checkTextResult, getErrorAnswerMessage } from "../lib/GameOperation";

const ErrorAnswerNotice = (props) => {
  // 回答がNGなら通知を出す
  return props.errorCode !== checkTextResult.OK ? (
    <>{getErrorAnswerMessage(props.errorCode)}</>
  ) : (
    <></>
  );
};

export default ErrorAnswerNotice;
