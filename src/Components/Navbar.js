import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar(){
    return(
        <div>
            <NavLink to="/">Books</NavLink>
            <NavLink to="/details">BookDetails</NavLink>
            <NavLink to="/cart">ShoppingCart</NavLink>
            
            
        </div>
    )
}
export default Navbar;