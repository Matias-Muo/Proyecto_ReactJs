import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context';
import React, { useContext, useState} from 'react';

const ItemDetail = ({product}) => {



 
    const {addItem}=useContext(CartContext)
  
    const [cartCount, setCartCount] = useState(0);
  
  
    function onAddProduct(count){
      addItem(product,count);
      setCartCount(count);
  
    }
 
    return (
      <div >
      <Card style={{ width: '30rem', display: 'flex', justifyContent: 'center' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Title className="card-detail-small">{product.detail}</Card.Title>
          <Card.Text>Stock: {product.stock}</Card.Text>
          <Card.Text>Precio: $ {product.price}</Card.Text>
          <div>
            {cartCount === 0 && (
              <ItemCount stock={product.stock} addItem={onAddProduct}  />
            )}

            <Link to="/cart">
              <Button variant="secondary">
                Ir al carrito
              </Button>
            </Link>


          </div>
        </Card.Body>
      </Card>
    </div>
    );
  };


  
  export default ItemDetail;