import { render, screen, fireEvent } from '@testing-library/react';
import CartSidebar from '../components/common/CartSidebar';
import { CartContext } from '../context/CartContext';
import { describe, expect, it, vi } from 'vitest';

describe('CartSidebar', () => {
  it('renders "Cart is empty" when the cart is empty', () => {
    const cartItems = [];
    render(
      <CartContext.Provider value={{ cartItems }}>
        <CartSidebar toggleCardSidebar={() => { }} />
      </CartContext.Provider>
    );
    expect(screen.getByText('Cart is empty')).toBeInTheDocument();
  });

  it('renders cart items correctly when the cart is not empty', () => {
    const cartItems = [
      { id: 1, title: 'Product 1', price: 10, quantity: 1 },
      { id: 2, title: 'Product 2', price: 20, quantity: 2 },
    ];
    render(
      <CartContext.Provider value={{ cartItems }}>
        <CartSidebar toggleCardSidebar={() => { }} />
      </CartContext.Provider>
    );
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
    expect(screen.getByText('Qty: 1')).toBeInTheDocument();
    expect(screen.getByText('Qty: 2')).toBeInTheDocument();
  });  

  it('calls removeFromCart with the correct product ID when "Remove" button is clicked', () => {
    const cartItems = [{ id: 1, title: 'Product 1', price: 10, quantity: 1 }];
    const removeFromCartMock = vi.fn();
    render(
      <CartContext.Provider value={{ cartItems, removeFromCart: removeFromCartMock }}>
        <CartSidebar toggleCartSidebar={() => {}} />
      </CartContext.Provider>
    );
    fireEvent.click(screen.getByText('Remove'));
    expect(removeFromCartMock).toHaveBeenCalledWith(1);
  });

  it('calls clearCart when "Clear Cart" button is clicked', () => {
    const cartItems = [{ id: 1, title: 'Product 1', price: 10, quantity: 1 }];
    const clearCartMock = vi.fn();
    render(
      <CartContext.Provider value={{ cartItems, clearCart: clearCartMock }}>
        <CartSidebar toggleCartSidebar={() => {}} />
      </CartContext.Provider>
    );
    fireEvent.click(screen.getByText('Clear Cart'));
    expect(clearCartMock).toHaveBeenCalled();
  });
});