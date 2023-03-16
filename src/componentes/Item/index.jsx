import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Item = ({product}) =>{
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="primary" as={Link} to={`/item/${product.id}`}>
  Ver mas
</Button>
            </Card.Body>
        </Card>

    )
}


export default Item;