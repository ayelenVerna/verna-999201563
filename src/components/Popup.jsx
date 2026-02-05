import "../styles/components/Popup.css";

const Popup = ({ message, onClose, autoClose = 3000 }) => {
  
  if (!message) return null;

  
  if (autoClose) {
    setTimeout(onClose, autoClose);
  }

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>
          ✖
        </button>
        <p>{message}</p>
      </div>
    </div>
  );
};

export { Popup };
