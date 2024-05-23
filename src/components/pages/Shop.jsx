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
  
  return (
    <div>
      <h2>Items</h2>
      <div className="product-grid">
        <ProductCard key={key} product={product} />
      </div>
    </div>
  ); 
};

export default Shop;