import "../css/Modal.scss";

const Modal = (props) => {
  const closeModal = () => {
    props.setShowModal(false);
  };

  return (
    <>
      {props.showFlag ? ( // showFlagがtrueだったらModalを表示する
        <div className="overlay">
          <div className="modal-content">
            <div className="text-area">{props.content}</div>
            <button className="button" onClick={closeModal}>
              閉じる
            </button>
          </div>
        </div>
      ) : (
        <></> // showFlagがfalseの場合はModalは表示しない
      )}
    </>
  );
};

export default Modal;
