const Modal = (props) => {
  const confirmHandler = () => {
    props.onConfirm();
  };
  const cancelHandler = () => {
    props.onCancel();
  };

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
