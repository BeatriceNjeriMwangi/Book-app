import React from 'react';

const CartItem = ({ item, onRemoveItem }) => {

     onRemoveItem = (item) => {
        return(item.id !== item.key);
    }; 
    


    return (
        <div>
            <li className="cart-item" key={item.id}>
                <span>{item.title}</span>
                <img src={item.image_url} alt='book' />
                <span>{item.price}</span>
                <button onClick={() => onRemoveItem()}>Remove from cart</button>
            </li>
        </div>
    );
};
export default CartItem