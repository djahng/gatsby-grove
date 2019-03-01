import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Quotes = () => (
  <div id="quotes" className="container text-center mt-4">
    <h3>WHAT OUR HAPPY CAMPERS ARE SAYING</h3>

    <div className="row">
      <div className="col-md-4 my-2">
        <FaQuoteLeft size="28" className="icon text-primary mb-3" />

        <blockquote className="blockquote">
          <p>Neutra cronut kogi messenger bag tattooed, post-ironic pour-over raw denim mustache fanny pack banjo.</p>
          <footer className="blockquote-footer">Mark Twain</footer>
        </blockquote>
      </div>

      <div className="col-md-4 my-2">
        <FaQuoteLeft size="28" className="icon text-primary mb-3" />

        <blockquote className="blockquote">
          <p>Tbh activated charcoal fashion axe 8-bit kinfolk. Snackwave gastropub man braid, prism hashtag tbh affogato microdosing 8-bit listicle pop-up.</p>
          <footer className="blockquote-footer">Venus Williams</footer>
        </blockquote>
      </div>

      <div className="col-md-4 my-2">
        <FaQuoteLeft size="28" className="icon text-primary mb-3" />

        <blockquote className="blockquote">
          <p>Pop-up taiyaki la croix quinoa plaid tbh craft beer vexillologist shabby chic retro swag.</p>
          <footer className="blockquote-footer">Blue Steele</footer>
        </blockquote>
      </div>
    </div>
  </div>
);

export default Quotes;
