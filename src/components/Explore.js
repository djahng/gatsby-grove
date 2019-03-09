import React from 'react';
import { Link } from 'gatsby';

import winterImg from '../images/winter.png';
import dogsImg from '../images/dogs.png';

const Explore = () => (
  <div className="container text-center mt-2 p-3" id="explore">
    <h3>WE'VE CREATED A CAMPING EXPERIENCE THAT'S TURN-KEY AND HASSLE FREE</h3>

    <div className="row m-2">
      <div className="col-md-6 p-3">
        <div className="card">
          <img className="card-img-top" src={winterImg} alt="winter" />

          <div className="card-body">
            <h2 className="card-title text-primary">EXPERIENCE</h2>
            <p className="card-text">Asymmetrical banh mi master cleanse, squid actually deep v gochujang edison.</p>
            <Link to="#" className="btn btn-lg btn-outline-primary">Go Somewhere</Link>
          </div>
        </div>
      </div>

      <div className="col-md-6 p-3">
        <div className="card">
          <img className="card-img-top" src={dogsImg} alt="dogs" />

          <div className="card-body">
            <h2 className="card-title text-primary">EXPLORE</h2>
            <p className="card-text">Sustainable church-key beard tbh everyday carry flexitarian umami asymmetrical street art prism.</p>
            <Link to="#" className="btn btn-lg btn-outline-primary">Go Somewhere</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Explore;
