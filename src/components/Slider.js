import React from 'react';
import {Link} from 'react-router-dom'


const Slider = () => {
return     <section className="home-slider owl-carousel">
<div className="slider-item" style= {{backgroundImage: "url('images/slider-1.jpg')"}} >
  
  <div className="container">
    <div className="row slider-text align-items-center justify-content-center">
      <div className="col-md-10 text-center col-sm-12 element-animate">
        <h1>Free Template by Free-Template.co</h1>
        <p className="mb-5 sub-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.</p>
        <p><Link to ="#" className="btn btn-white btn-outline-white px-3 py-3">Get Started</Link> <Link to ="#" className="btn btn-link btn-white">Download</Link></p>
      </div>
    </div>
  </div>

</div>

<div className="slider-item" style= {{backgroundImage: "url('images/slider-2.jpg')"}}>
  <div className="container">
    <div className="row slider-text align-items-center justify-content-center">
      <div className="col-md-10 text-center col-sm-12 element-animate">
        <h1>Modern Design</h1>
        <p className="mb-5 sub-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.</p>
        <p><Link to ="#" className="btn btn-white btn-outline-white px-3 py-3">Get Started</Link> <Link to ="#" className="btn btn-link btn-white">Download</Link></p>
      </div>
    </div>
  </div>
  
</div>

</section>


}

export default Slider