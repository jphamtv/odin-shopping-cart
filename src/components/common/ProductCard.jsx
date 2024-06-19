import { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import Button from "./Button";
import styles from "../../styles/ProductCard.module.css";

const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          className={styles.productImage}
          alt={product.title}
        />
      </div>
      <div className={styles.titleContainer}>
        <div className={styles.title}>{product.title}</div>
      </div>
      <div className={styles.price}>${product.price.toFixed(2)}</div>
      <div className={styles.buttonContainer}>
        <Input
          type="number"
          initialValue={quantity}
          onChange={(value) => setQuantity(value)}
        />
        <Button
          label="Add to cart"
          onClick={handleAddToCart}
          className={styles.addToCartBtn}
        />
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard;
