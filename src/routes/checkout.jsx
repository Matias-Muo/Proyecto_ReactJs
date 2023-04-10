import React, { useState,useContext } from 'react';
import { collection, addDoc, getFirestore, updateDoc, doc } from 'firebase/firestore';
import { CartContext } from '../context';
import { Container,Button,Form  } from 'react-bootstrap';


function Checkout() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const db = getFirestore();

  function updateProductStock(productId, newStock) {
    const productRef = doc(db, "items", productId);
    updateDoc(productRef, { stock: newStock });
  }

  function placeOrder() {
    const collectionRef = collection(db, "orders");
    const total = cartItems.reduce(
      (acc, product) => acc + product.count * product.price,
      0
    );

    const order = {
      buyer: { name, email, phone },
      items: cartItems,
      total,
    };

    addDoc(collectionRef, order)

        .then((numRef) => { 
          const compraId = numRef.id;
        cartItems.map((product) => {
          const newStock = product.stock - product.count;
          updateProductStock(product.id, newStock);
        });
        setCartItems([]); 
       
        alert (`Gracias por su compra. Tu numero de comprobante es: ${compraId}`)
       
      })
      .catch((error) => console.log({ error }));
  }

  return (
    <Container>
      <Form> 
        <Form.Group>
          <Form.Label style={{ marginTop: '10px' }}>Nombre</Form.Label>
          <Form.Control type="text" style={{ marginBottom: '5px' }}value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="text" style={{ marginBottom: '5px' }} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Teléfono" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" style={{ marginBottom: '5px' }} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        </Form.Group>
        <Button  variant="secondary" style={{ marginTop: '10px' ,marginBottom:'20px'}} onClick={placeOrder}>Comprar</Button>
      </Form>
    </Container>
  );
}

export default Checkout;



