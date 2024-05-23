import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ key, product, onClick }) => {

  return (
    <div key={key} className='card'>
      <img src="" alt="" />
      <div className='flex'>
        <div>{product.title}</div>
        <div>{product.price}</div>
      </div>
      <Input />
      <Button />
    </div>
  );
}

export default ProductCard;