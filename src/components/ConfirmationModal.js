export function ConfirmationModal({
  isHidden,
  onDeleteCancel,
  onDeleteConfirm,
}) {
  return (
    <div className={isHidden ? "hide-modal" : "show-modal"}>
      <div className="modal-content">
        <p>Are you sure you want to delete this from list?</p>
        <div className="btn-container">
          <button
            title="Delete"
            className="btn-delete"
            onClick={onDeleteConfirm}
          >
            Delete
          </button>
          <button
            title="Cancel"
            className="btn-cancel"
            onClick={onDeleteCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
