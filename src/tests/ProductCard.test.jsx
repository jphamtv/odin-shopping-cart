import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../components/common/ProductCard';
import { describe, expect, it, vi } from 'vitest';

describe('ProductCard', () => {
  const product = { id: 1, title: 'Product 1', price: 10 };

  it('renders the product title correctly', () => {
    render(<ProductCard product={product} onAddToCart={() => { }} />);
    expect(screen.getByText('Product 1')).toBeInTheDocument();
  });

  it('renders the product price correctly', () => {
    // const product = { id: 1, title: 'Product 1', price: 10 };
    render(<ProductCard product={product} onAddToCart={() => { }} />);
    expect(screen.getByText('$10.00')).toBeInTheDocument();
  });

  it('calls onAddToCart with the correct product and quantity when "Add to Cart" button is clicked', () => {
    // const product = { id: 1, title: 'Product 1', price: 10 };
    const onAddToCartMock = vi.fn();
    render(<ProductCard product={product} onAddToCart={onAddToCartMock} />);
    fireEvent.click(screen.getByText('Add to cart'));
    expect(onAddToCartMock).toHaveBeenCalledWith(product, 1);
  });  
});