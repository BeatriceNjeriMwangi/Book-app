import { useEffect } from "react";

function CartItem({ item }) {
  return (
    <li className="cart-item">
      <span>{item.title}</span>
      <span>Quantity: {item.quantity}</span>
      <span>${item.price * item.quantity}</span>
      {/* Add a button to remove the item from the cart */}
    </li>
  );
}

export default CartItem;