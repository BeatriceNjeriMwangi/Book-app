import React, { useState } from 'react';

const CartItem = ({ item, onRemoveItem, onBuyItem }) => {
  const [quantity, setQuantity] = useState(1);
  const [isPurchaseSuccessful, setPurchaseSuccessful] = useState(false);

  const handleRemoveItem = () => {
    onRemoveItem(item.id);
  };

  const handleBuyClick = () => {
    onBuyItem(item, quantity);

    // Simulate a successful purchase
    setPurchaseSuccessful(true);

    // Reset purchase status after a delay
    setTimeout(() => {
      setPurchaseSuccessful(false);
    }, 2000);
  };

  return (
    <div>
      <li className="cart-item" key={item.id}>
        <span>{item.title}</span>
        <img src={item.image_url} alt="book" />
        <span>{item.price}</span>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button onClick={handleRemoveItem}>Remove from cart</button>
        <button onClick={handleBuyClick}>Buy</button>

        {isPurchaseSuccessful && (
          <div className="purchase-success-popup">
            Purchase successful!
          </div>
        )}
      </li>
    </div>
  );
};

export default CartItem;
