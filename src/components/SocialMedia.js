import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

import social1 from '../images/gallery/social1.png';
import social2 from '../images/gallery/social2.png';
import social3 from '../images/gallery/social3.png';
import social4 from '../images/gallery/social4.png';
import social5 from '../images/gallery/social5.png';
import social6 from '../images/gallery/social6.png';
import social7 from '../images/gallery/social7.png';
import social8 from '../images/gallery/social8.png';

const SocialMedia = () => (
  <>
    <div className="container text-center mt-5">
      <h3>WHAT OTHERS ARE SAYING</h3>
      <h5 className="text-primary">#AURORAGROVE</h5>

      <div className="row mt-4">
        <div className="col-6 col-lg-3 mb-4">
          <img src={social1} alt="" className="img-fluid" />
        </div>
        <div className="col-6 col-lg-3 mb-4">
          <img src={social2} alt="" className="img-fluid" />
        </div>
        <div className="col-6 col-lg-3 mb-4">
          <img src={social3} alt="" className="img-fluid" />
        </div>
        <div className="col-6 col-lg-3 mb-4">
          <img src={social4} alt="" className="img-fluid" />
        </div>
        <div className="col-6 col-lg-3 mb-4">
          <img src={social5} alt="" className="img-fluid" />
        </div>
        <div className="col-6 col-lg-3 mb-4">
          <img src={social6} alt="" className="img-fluid" />
        </div>
        <div className="col-6 col-lg-3 mb-4">
          <img src={social7} alt="" className="img-fluid" />
        </div>
        <div className="col-6 col-lg-3 mb-4">
          <img src={social8} alt="" className="img-fluid" />
        </div>
      </div>
    </div>

    <div className="container text-center mt-4">
      <FaQuoteLeft size="28" className="text-primary" />
      <blockquote className="blockquote">
        <p>Vaporware art party irure forage distillery. Commodo godard tacos locavore kombucha ut iPhone air plant. Pariatur pour-over tempor, retro meggings id beard normcore meditation af green juice polaroid brunch VHS. Eu lomo cold-pressed, ut sint church-key la croix dolore laboris fingerstache locavore truffaut distillery.</p>
        <footer className="blockquote-footer">Kitty Cat</footer>
      </blockquote>
    </div>
  </>
);

export default SocialMedia;
