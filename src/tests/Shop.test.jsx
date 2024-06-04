import { render, screen, waitFor } from '@testing-library/react';
import Shop from '../components/pages/Shop';
import fetchProducts from '../utils/fetchProducts';
import { describe, expect, it, vi } from 'vitest';

vi.mock('./fetchProducts');

describe('Shop', () => {
  it('renders the loading state while fetching products', () => {
    fetchProducts.mockResolvedValueOnce([]);
    render(<Shop />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders the error state if there\'s an error fetching products', async () => {
    fetchProducts.mockRejectedValueOnce(new Error('Error fetching products'));
    render(<Shop />);
    await waitFor(() => {
      expect(screen.getByText('Oops...error fetching products')).toBeInTheDocument();
    });
  });

  it('renders the product grid correctly when products are fetched successfully', async () => {
    const products = [
      { id: 1, title: 'Product 1', price: 10 },
      { id: 2, title: 'Product 2', price: 20 },
    ];
    fetchProducts.mockResolvedValueOnce(products);
    render(<Shop />);
    await waitFor(() => {
      expect(screen.getByText('Product 1')).toBeInTheDocument();
      expect(screen.getByText('Product 2')).toBeInTheDocument();
    });
  });
});