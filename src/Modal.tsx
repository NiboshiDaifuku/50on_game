import "./css/Modal.css";

const Modal = (props) => {
  const closeModal = () => {
    props.setShowModal(false);
  };

  return (
    <>
      {props.showFlag ? ( // showFlagがtrueだったらModalを表示する
        <div className="overlay">
          <div className="modalContent">
            <h2>ルール説明</h2>
            <li>自分の順番がきたら、お題に則った言葉を「ひらがな」で入力します。</li>
            <li>1文字も埋まらない言葉はNGです。</li>
            <li>伸ばし棒はカウントしません。</li>
            <li>大文字と小文字は同じ文字として扱います。（例: や＝ゃ　つ＝っ）</li>
            <li>濁点と半濁点は無視して扱います。（例: は＝ば＝ぱ）</li>
            <br />
            <button onClick={closeModal}>閉じる</button>
          </div>
        </div>
      ) : (
        <></> // showFlagがfalseの場合はModalは表示しない
      )}
    </>
  );
};

export default Modal;
