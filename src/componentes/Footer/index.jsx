import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const Footer = () => {
  return (
    <footer  className="footer">
      <Container>
        <Row>
          <Col className="text-footer">
            <p>Todos los derechos reservados - Mou Desing </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
