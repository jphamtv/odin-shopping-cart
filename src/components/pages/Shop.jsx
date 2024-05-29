import fetchProducts from "../../utils/fetchProducts";
import ProductCard from "../common/ProductCard";
import { useState, useEffect } from "react";

const Shop = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductsForPage = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
        setError(null);
      } catch (error) {
        setError(error.message);
        setProducts(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsForPage();
  }, []);

  const renderLoading = () => <div>Loading...</div>;
  const renderError = () => <div>Oops...error fetching products</div>;

  if (loading) {
    return renderLoading();
  }

  if (error) {
    return renderError();
  }
  
  return (
    <div>
      <h2>Items</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={(product, quantity) => {
              // Handle adding the product to the cart
              console.log(`Adding ${quantity} ${product.title} to the cart`)
            }}
          />
        ))}
      </div>
    </div>
  ); 
};

export default Shop;