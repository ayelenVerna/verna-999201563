import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import "../styles/views/Home.css";
import { Footer } from "../components/Footer";
import {
  addNewProduct as addNewProductFirebase,
  getAllProducts as getAllProductsFirebase,
  updateProduct as updateProductFirebase,
  deleteProduct as deleteProductFirebase,
} from "../services/apiFirebase.js";
import { RecipeModal } from "../components/RecipeModal";


const Home = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDescription, setShowDescription] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    image: "",
    description: "",
    tiempo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const fetchingData = async () => {
    const products = await getAllProductsFirebase();
    setProducts(products);
  };

  useEffect(() => {
    fetchingData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingProduct) {
      const res = await updateProductFirebase(editingProduct, formData);
      const updatedProducts = products.map((p) =>
        p.id === editingProduct ? res : p
      );
      setProducts(updatedProducts);
      setEditingProduct(null);
    } else {
      const addedProduct = await addNewProductFirebase(formData);
      setProducts([addedProduct, ...products]);
    }

    setFormData({
      name: "",
      category: "",
      image: "",
      description: "",
      tiempo: "",
    });
  };

  const handleUpdateProduct = (product) => {
    setFormData({
      name: product.name,
      category: product.category,
      image: product.image,
      description: product.description,
      tiempo: product.tiempo || "",
    });
    setEditingProduct(product.id);
  };

  const handleDeleteProduct = async (id) => {
    if (!confirm("¿Estás seguro que deseas borrar esta receta?")) return;

    await deleteProductFirebase(id);
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleOpenDescription = (product) => {
    setSelectedProduct(product);
    setShowDescription(true);
  };

  const handleCloseDescription = () => {
    setSelectedProduct(null);
    setShowDescription(false);
  };

  return (
    <>
      <Header />

      <main>
        <section className="recetas">
          <h2>App de Recetas</h2>
          <p>
            Bienvenido a la Comunidad de Recetas donde podés compartir y encontrar
            comidas ricas
          </p>
        </section>

        <section>
          <h2>{editingProduct ? "Editar receta" : "Agregar receta"}</h2>

          <form onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Título"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <input
              name="category"
              type="text"
              placeholder="Categoría"
              required
              value={formData.category}
              onChange={handleChange}
            />

            <input
              name="image"
              type="text"
              placeholder="URL imagen"
              required
              value={formData.image}
              onChange={handleChange}
            />

            <textarea
              name="description"
              placeholder="Descripción"
              required
              value={formData.description}
              onChange={handleChange}
            />

            <button>{editingProduct ? "Actualizar" : "Agregar"}</button>
          </form>
        </section>

        <section className="products">
          <h2>Mis Recetas</h2>

          <div className="products-list">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                {product.image && (<img src={product.image} alt={product.name} />)}

                <h4>{product.name}</h4>

                <p>
                  {product.description.length > 80
                    ? product.description.slice(0, 80) + "..."
                    : product.description}
                </p>

                <button onClick={() => handleOpenDescription(product)}>
                  Ver más
                </button>

                <button onClick={() => handleUpdateProduct(product)}>
                  Actualizar
                </button>

                <button onClick={() => handleDeleteProduct(product.id)}>
                  Borrar
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
<RecipeModal
  product={selectedProduct}
  onClose={handleCloseDescription}
/>

      
      <Footer />
    </>
  );
};

export { Home };


