import React from 'react';

export default () => (
  <div className="bg-dark">
    <div className="container text-white text-center py-5">
      <p className="lead">JOIN OUR NEWSLETTER FOR DEALS AND UPDATES</p>

      <div className="row justify-content-center">
        <div className="col-10 col-sm-8 col-md-6 col-lg-4">
          <div className="input-group">
            <input type="text" class="form-control" placeholder="Your Email" />
            <div className="input-group-append">
              <button className="btn btn-primary">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
