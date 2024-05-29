import { useState } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Button from './Button';
import styles from '../../styles/ProductCard.module.css';

const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
  };

  return (
    <div className={styles.card}>
      <img src={product.image} className={styles.productImage} alt={product.title} />
      <div className={styles.flex}>
        <div>{product.title}</div>
        <div className={styles.price}>${product.price}</div>
      </div>
      <Input type='number' initialValue={quantity} onChange={(value) => setQuantity(value)} />
      <Button label='Add to cart' onClick={handleAddToCart} />
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
  onAddToCart: PropTypes.func,
};

export default ProductCard;