import { renderHook, act } from '@testing-library/react';
import { useContext } from 'react';
import { CartProvider, CartContext } from '../context/CartContext';
import { describe, expect, it } from 'vitest';

describe('CartContext', () => {
  it('adds a product to the cart correctly', () => {
    const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
    const { result } = renderHook(() => useContext(CartContext), { wrapper });

    act(() => {
      result.current.addToCart({ id: 1, title: 'Product 1', price: 10 });
    });

    expect(result.current.cartItems).toHaveLength(1);
    expect(result.current.cartItems[0].title).toBe('Product 1');
  });

  it('removes a product from the cart correctly', () => {
    const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
    const { result } = renderHook(() => useContext(CartContext), { wrapper })

    act(() => {
      result.current.addToCart({ id: 1, title: 'Product 1', price: 10 });
      result.current.addToCart({ id: 2, title: 'Product 2', price: 20 });
    });

    act(() => {
      result.current.removeFromCart(1);
    });

    expect(result.current.cartItems).toHaveLength(1);
    expect(result.current.cartItems[0].title).toBe('Product 2');
  });

  it('clears all items from the cart', () => {
    const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
    const { result } = renderHook(() => useContext(CartContext), { wrapper })

    act(() => {
      result.current.addToCart({ id: 1, title: 'Product 1', price: 10 });
      result.current.addToCart({ id: 2, title: 'Product 2', price: 20 });
    });

    act(() => {
      result.current.clearCart();
    });

    expect(result.current.cartItems).toHaveLength(0);
  });

  it('updates the quantity of a product in the cart correctly', () => {
    const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
    const { result } = renderHook(() => useContext(CartContext), { wrapper })

    act(() => {
      result.current.addToCart({ id: 1, title: 'Product 1', price: 10 });
    });

    act(() => {
      result.current.updateQuantity(1, 3);
    });

    expect(result.current.cartItems[0].quantity).toBe(3);
  });
});