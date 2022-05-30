const Modal = ({ modalState }) => {
  const [name, description, shortDescription, quantity] = modalState;
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {name}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h3>Description</h3>
            <p>{description}</p>
            <h3>Short Description</h3>
            <p>{shortDescription}</p>
            <h3>Quantity</h3>
            <p>{quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
