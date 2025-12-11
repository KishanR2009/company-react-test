import { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const DeleteModal = ({ setOpen, onDelete }) => {
  useEffect(() => {
    const modalElement = document.getElementById("deleteModal");
    const modal = new bootstrap.Modal(modalElement);
    modal.show();

    modalElement.addEventListener("hidden.bs.modal", () => {
      setOpen(false);

      document.body.classList.remove("modal-open");
      document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
    });

    return () => {
      document.body.classList.remove("modal-open");
      document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
    };
  }, [setOpen]);

  const handleDeleteClick = () => {
    onDelete();

    document.body.classList.remove("modal-open");
    document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
  };

  return (
    <div className="modal fade" id="deleteModal" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirm Delete</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div className="modal-body">
            Are you sure you want to delete this category?
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>

            <button
              type="button"
              className="btn btn-danger"
              onClick={handleDeleteClick}
              data-bs-dismiss="modal"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
