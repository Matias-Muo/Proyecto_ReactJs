import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/index';
import ItemCount from '../componentes/ItemCount'; 
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function Cart() {
  
  const { cartItems, setCartItems } = useContext(CartContext); 

  const [total, setTotal] = useState(0);

  useEffect(() => {

    const calculateTotal = () => {
     
      const suma = cartItems.reduce((accumulator, product) => {
        return accumulator + (product.price * product.count);
      }, 0);
      setTotal(suma);
    }
   
    calculateTotal();
  }, [cartItems]);

  function handleQuantityChange(id, newQuantity) {
    let newCartItems = cartItems.map(product => {
      if (product.id === id) {
        return { ...product, count: newQuantity };
      } else {
        return product;
      }
    });
    setCartItems(newCartItems);

  }

  function handleRemoveFromCart(id) {
    let newCartItems = cartItems.filter(product => product.id !== id);
    setCartItems(newCartItems);
  }



  return (
    <Container> 
    <div>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                 <addItem/> 
              </td>
              <td>{product.price * product.count}</td>
              <td>
                <button onClick={() => handleRemoveFromCart(product.id)}>Borrar</button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="3">Total:</td>
            <td>{total}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <Link to={'/Checkout'} ><button>Finalizar</button></Link>
    
    </div>
    </Container>
  );
}

export default Cart;
