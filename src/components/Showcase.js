import React from 'react';
import { Container, Button } from 'reactstrap';

const Showcase = () => (
  <div id="showcase" className="d-flex justify-content-center align-items-center">
    <div id="overlay"></div>

    <Container id="header" className="text-white text-center">
      <h3 className="display-5 mb-0">MODERN CAMPING</h3>

      <h1 className="display-1">AURORA GROVE</h1>

      <p className="lead d-none d-md-block">Lorem ipsum dolor amet swag meh poke, letterpress crucifix disrupt.</p>

      <Button id="book-now" color="primary" size="lg" className="px-5">BOOK NOW</Button>
    </Container>
  </div>
);

export default Showcase;
