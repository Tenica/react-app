import React from 'react'
import {Link} from 'react-router-dom';

const AboutBody = () => {
return <section>
<section>
<div className="half d-lg-flex d-block">
  <div className="image" style= {{backgroundImage: "url('images/slider-1.jpg')"}} ></div>
  <div className="text text-center element-animate">
    <h3 className="mb-4">Our Mission</h3>
    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis tempora inventore, aliquam ratione. Eum vero sapiente tempora eveniet perspiciatis libero, omnis quae facilis! Voluptatibus minima autem, esse eius natus labore.</p>
    <p><Link to ="#" className="btn btn-primary btn-sm px-3 py-2">Learn More</Link></p>
  </div>
</div>

<div className="half d-lg-flex d-block">
  <div className="image order-2" style= {{backgroundImage: "url('images/slider-2.jpg')"}}></div>
  <div className="text text-center element-animate">
    <h3 className="mb-4">Company History</h3>
    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis tempora inventore, aliquam ratione. Eum vero sapiente tempora eveniet perspiciatis libero, omnis quae facilis! Voluptatibus minima autem, esse eius natus labore.</p>
    
    <p><Link to ="#" className="btn btn-primary btn-sm px-3 py-2">Learn More</Link></p>
  </div>
</div>

</section>

<section className="section element-animate">
<div className="container">
  <div className="row">
    <div className="col-md-6 col-lg-4">
      <div className="media block-6 d-block text-center">
        <div className="icon mb-3"><span className="ion-ios-bell-outline"></span></div>
        <div className="media-body">
          <h3 className="heading">Modern Design</h3>
          <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
        </div>
      </div>  

    </div>
    <div className="col-md-6 col-lg-4 ">
      <div className="media block-6 d-block text-center">
        <div className="icon mb-3"><span className="ion-ios-heart-outline"></span></div>
        <div className="media-body">
          <h3 className="heading">Build With Love</h3>
          <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
        </div>
      </div> 

    </div>
    <div className="col-md-6 col-lg-4">
      <div className="media block-6 d-block text-center">
        <div className="icon mb-3"><span className="ion-ios-bolt-outline"></span></div>
        <div className="media-body">
          <h3 className="heading">Fast Loading</h3>
          <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
        </div>
      </div> 

    </div>
  </div>
</div>
</section>



<section className="section bg-light">
<div className="container">
  <div className="row justify-content-center mb-5 element-animate">
    <div className="col-md-8 text-center">
      <h2 className="heading mb-4">Meet The Team</h2>
      <p className="mb-5 lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.</p>
    </div>
  </div>
  <div className="row element-animate block-11">
    <div className="nonloop-block-11 owl-carousel">
      <div>
        <div className="media d-block media-custom text-center">
          <Link to ="adoption-single.html"><img src= {"images/person_1.jpg"} alt={"trailblazers"} className= {"img-fluid"} /></Link>
          <div className="media-body">
            <h3 className="mt-0 text-black">Mellisa Howard</h3>
          </div>
        </div>
      </div>
      <div>
        <div className="media d-block media-custom text-center">
          <Link to ="adoption-single.html"><img src= {"images/person_2.jpg"} alt={"trailblazers"} className={"img-fluid"} /></Link>
          <div className="media-body">
            <h3 className="mt-0 text-black">Mike Richardson</h3>
          </div>
        </div>
      </div>
      <div>
        <div className="media d-block media-custom text-center">
          <Link to ="adoption-single.html"><img src={"images/person_3.jpg"} alt={"trailblazers"} className={"img-fluid"} /></Link>
          <div className="media-body">
            <h3 className="mt-0 text-black">Charles White</h3>
          </div>
        </div>
      </div>
      <div>
        <div className="media d-block media-custom text-center">
          <Link to ="adoption-single.html"><img src= {"images/person_4.jpg"} alt={"trailblazers"} className= {"img-fluid"} /></Link>
          <div className="media-body">
            <h3 className="mt-0 text-black">Laura Smith</h3>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>
</section>
</section>


}


export default AboutBody