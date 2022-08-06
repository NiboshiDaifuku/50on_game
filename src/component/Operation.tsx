import "../css/Operation.scss";

const Operation = (props) => {
  return (
    <div className="operation">
      <input
        type="text"
        name="answer"
        className={props.inputFormClassName}
        placeholder="ひらがなで回答を入力してね"
        value={props.inputValue}
        onChange={(event) => props.onChangeText(event.target.value)}
      />
      <button className={props.buttonClassName} type="button" onClick={props.onClickAnswerButton}>
        決定
      </button>
      <button className={props.buttonClassName} type="button" onClick={props.onClickPassButton}>
        パス
      </button>
    </div>
  );
};

export default Operation;
