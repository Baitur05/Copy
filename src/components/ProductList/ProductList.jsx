import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";

const ProductList = ({ getProducts, products }) => {
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container d-flex justify-content-between flex-wrap">
      {products.map((item) => (
        <Card key={item.id} style={{ width: "15rem" }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.price}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
