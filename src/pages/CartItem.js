import React from 'react';

const CartItem = ({ item, onRemoveFromCart }) => {
  return (
    <div>
      <li className="cart-item" key={item.id}>
        <span>{item.title}</span>
        <img src={item.imageURL} alt='book' />
        <span>{item.price}</span>
        <button onClick={() => onRemoveFromCart(item)}>Remove from cart</button>
      </li>
    </div>
  );
};

export default CartItem;