export function ConfirmationModal({
  isHidden,
  onDeleteCancel,
  onDeleteConfirm,
}) {
  return (
    <div className={isHidden ? "hide-modal" : "show-modal"}>
      <div className="modal-content">
        <p>Delete this task?</p>
        <button className="btn-delete" onClick={onDeleteConfirm}>Delete</button>
        <button className="btn-cancel" onClick={onDeleteCancel}>Cancel</button>
      </div>
    </div>
  );
}
