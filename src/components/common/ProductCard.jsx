import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Button from './Button';
import styles from '../../styles/ProductCard.module.css';

const ProductCard = ({ key, product, onClick }) => {

  return (
    <div key={key} className={styles.card}>
      <img src={product.image} className={styles.productImage} alt="" />
      <div className={styles.flex}>
        <div>{product.title}</div>
        <div className={styles.price}>${product.price}</div>
      </div>
      <Input />
      <Button label='Add to cart' />
    </div>
  );
}

export default ProductCard;