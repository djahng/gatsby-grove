import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import tentImg from '../images/icons/tent.png';
import campfireImg from '../images/icons/campfire.png';
import natureImg from '../images/icons/nature.png';

const About = () => (
  <Container className="text-center mt-5" id="about">
    <h2>YOU SHOW UP, WE PITCH THE TENT</h2>

    <Row>
      <Col md="4" className="p-3">
        <img className="img-fluid d-none d-md-inline" src={tentImg} alt="tent" />

        <h3>Amenities You Want</h3>

        <p className="lead">
          Lorem ipsum dolor amet copper mug salvia umami, cronut pickled mustache tilde try-hard iceland live-edge woke prism. Helvetica whatever jianbing gentrify.
        </p>
      </Col>

      <Col md="4" className="p-3">
        <img className="img-fluid d-none d-md-inline" src={campfireImg} alt="campfire" />

        <h3>The Food You Crave</h3>

        <p className="lead">
          Whatever lo-fi flannel activated charcoal. Narwhal semiotics slow-carb cray blue bottle post-ironic. Godard iPhone pork belly, cold-pressed bitters.
        </p>
      </Col>

      <Col md="4" className="p-3">
        <img className="img-fluid d-none d-md-inline" src={natureImg} alt="nature" />

        <h3>The Nature You Need</h3>

        <p className="lead">
          Waistcoat messenger bag aesthetic ramps four dollar toast, shaman enamel pin mixtape palo santo. Farm-to-table wayfarers pork belly, microdosing pinterest.
        </p>
      </Col>
    </Row>
  </Container>
);

export default About;
