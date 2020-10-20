import React from 'react';
import {Link} from 'react-router-dom';


const section3 = () => {
return <section className="section blog">
<div className="container">

  <div className="row justify-content-center mb-5 element-animate">
    <div className="col-md-8 text-center">
      <h2 className=" heading mb-4">Blog Posts</h2>
      <p className="mb-5 lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.</p>
    </div>
  </div>

  <div className="row">
    <div className="col-md-6">

      <div className="media mb-4 d-md-flex d-block element-animate">
        <Link to ="#" className="mr-5"><img src= {"images/img_1.jpg"} alt={"trailblazers"} className={"img-fluid"} /></Link>
        <div className="media-body">
          <span className="post-meta">Feb 26th, 2018</span>
          <h3 className="mt-2 text-black"><Link to ="#">Free Website Template at Free-Template.co</Link></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam minus ipsa earum nemo consectetur cupiditate necessitatibus suscipit assumenda perspiciatis provident.</p>
          <p><Link to ="#" className="btn btn-primary btn-sm">Read more</Link></p>
        </div>
      </div>



    </div>
    <div className="col-md-6">
      <div className="media mb-4 d-md-flex d-block element-animate">
        <Link to ="#" className="mr-5"><img src= {"images/img_2.jpg"} alt={"trailblazers"} className={"img-fluid"} /></Link>
        <div className="media-body">
          <span className="post-meta">Feb 26th, 2018</span>
          <h3 className="mt-2 text-black"><Link to ="#">Free Website Template at Free-Template.co</Link></h3>
          <p><Link to ="#" className="btn btn-primary btn-sm">Read more</Link></p>
        </div>
      </div>

      <div className="media mb-4 d-md-flex d-block element-animate">
        <Link to ="#" className="mr-5"><img src= {"images/img_3.jpg"} alt={"trailblazers"} className={"img-fluid"} /></Link>
        <div className="media-body">
          <span className="post-meta">Feb 26th, 2018</span>
          <h3 className="mt-2 text-black"><Link to ="#">Free Website Template at Free-Template.co</Link></h3>
          <p><Link to ="#" className="btn btn-primary btn-sm">Read more</Link></p>
        </div>
      </div>

    </div>
  </div>
</div>
</section>









}


export default section3