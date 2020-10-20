import React from 'react';
import {Link} from 'react-router-dom';

const AboutSlider = () => {
  return <section className="home-slider inner-page owl-carousel">
  <div className="slider-item" style= {{backgroundImage: "url('images/slider-1.jpg')"}}>
    
    <div className="container">
      <div className="row slider-text align-items-center justify-content-center">
        <div className="col-md-8 text-center col-sm-12 element-animate">
          <h1>About Us</h1>
          <p className="mb-5 sub-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.</p>
          <p><Link to ="#" className="btn btn-white btn-outline-white px-4 py-3">Explore</Link></p>
        </div>
      </div>
    </div>

  </div>
</section>


}


export default AboutSlider