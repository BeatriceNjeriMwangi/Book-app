import React from 'react';

const CartItem = ({ item, onRemoveItem }) => {
    return (
        <div>
            <li className="cart-item">
                <span>{item.title}</span>
                <img src={item.image_url} alt='book' />
                <span>{item.price}</span>
                <button onClick={() => onRemoveItem(item.id)}>Remove from cart</button>
            </li>
        </div>
    );
};

export default CartItem;