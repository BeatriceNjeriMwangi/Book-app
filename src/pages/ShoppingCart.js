import React, { useEffect} from 'react';
import CartItem from "./CartItem";


export default function ShoppingCart ({cartItems}) { 
const MyFetch = () => {useEffect(() => {
  fetching();
}, []);}

function fetching () {
  fetch("https://json-server-books.onrender.com/cart",   {
    method: "POST",
    body: myMap(),
  }); 
 
  
  

}

 const myMap = (item) => {
  return (
    <CartItem />
  )
 }
 return myMap
}

