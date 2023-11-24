import React from 'react';
import CartItem from "./CartItem";

export default function ShoppingCart({ cartItems, onRemoveFromCart, onProceedToCheckout }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} onRemoveFromCart={onRemoveFromCart} />
        ))}
      </ul>
      <button onClick={onProceedToCheckout}>Purchase books</button>
    </div>
  );
}