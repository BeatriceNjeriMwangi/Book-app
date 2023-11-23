// CartItem.js

import React from 'react';

const CartItem = ({ item, onRemoveFromCart }) => {
  return (
    <div className="cart-item-card">
      <img src={item.imageURL} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>Author: {item.author}</p>
        <p>Price: {item.price}</p>
        <button onClick={() => onRemoveFromCart(item)}>Remove from cart</button>
      </div>
    </div>
  );
};

export default CartItem;
