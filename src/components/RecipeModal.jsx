const RecipeModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close" onClick={onClose}>
          ✖
        </button>

        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export { RecipeModal };
