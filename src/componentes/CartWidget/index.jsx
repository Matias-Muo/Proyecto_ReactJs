import "./cardWidget.css"
import Widget from "../../assets/images/shopping-cart.png"
import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import { CartContext } from '../../context';

function CardWidget(){
    const { cartItems } = useContext(CartContext);
    return(
      <div>

        <Link to="/cart">
        <div className="card-widget">
            <img className="img-widget" src= {Widget} alt="imagen del carrito" />
            <span>{cartItems.length}</span>
        </div>
        </Link>
      </div>
    )    
}
export default CardWidget;
    
    