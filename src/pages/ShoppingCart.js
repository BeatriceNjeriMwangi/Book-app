import React from 'react';
import CartItem from './CartItem';


export default function ShoppingCart () {
    const CartItems = [...CartItem]
    return ( 
        <aside className='shopping-cart'>
        <h2>ShoppingCart</h2>
           <ul>
            {CartItems.map((item) => {
                return(
                    <li className="cart-item">
                      <span>{item.title}</span>
                      <img src={item.image_url} />
                      <span>{item.price}</span>
                    </li>
                    <button id='cart-button'> Remove from cart </button>
                    
                )
            })}
           </ul>
    
        </aside>
    )
}