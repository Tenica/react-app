import React from 'react';
import {Link} from 'react-router-dom';

const BlogBody = () => {
return <section>
<div className="half d-md-flex d-block">
  <div className="image" style={{backgroundImage: "url('images/slider-1.jpg')"}}></div>
  <div className="text text-center element-animate">
    <span className="post-meta">June 8, 2018</span>
    <h3 className="mb-4">More Templates at Free-Template.co</h3>
    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis tempora inventore, aliquam ratione. Eum vero sapiente tempora eveniet perspiciatis libero, omnis quae facilis! Voluptatibus minima autem, esse eius natus labore.</p>
    <p><Link to ="#" className="btn btn-primary btn-sm px-3 py-2">Continue Reading</Link></p>
  </div>
</div>

<div className="half d-md-flex d-block">
  <div className="image order-2" style={{backgroundImage: "url('images/slider-2.jpg')"}}></div>
  <div className="text text-center element-animate">
    <span className="post-meta">June 8, 2018</span>
    <h3 className="mb-4">More Templates at Free-Template.co</h3>
    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis tempora inventore, aliquam ratione. Eum vero sapiente tempora eveniet perspiciatis libero, omnis quae facilis! Voluptatibus minima autem, esse eius natus labore.</p>
    
    <p><Link to ="#" className="btn btn-primary btn-sm px-3 py-2">Continue Reading</Link></p>
  </div>
</div>

<div className="half d-md-flex d-block">
  <div className="image" style={{backgroundImage: "url('images/slider-1.jpg')"}}></div>
  <div className="text text-center element-animate">
    <span className="post-meta">June 8, 2018</span>
    <h3 className="mb-4">More Templates at Free-Template.co</h3>
    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis tempora inventore, aliquam ratione. Eum vero sapiente tempora eveniet perspiciatis libero, omnis quae facilis! Voluptatibus minima autem, esse eius natus labore.</p>
    <p><Link to ="#" className="btn btn-primary btn-sm px-3 py-2">Continue Reading</Link></p>
  </div>
</div>

<div className="half d-md-flex d-block">
  <div className="image order-2" style={{backgroundImage: "url('images/slider-2.jpg')"}}></div>
  <div className="text text-center element-animate">
    <span className="post-meta">June 8, 2018</span>
    <h3 className="mb-4">More Templates at Free-Template.co</h3>
    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis tempora inventore, aliquam ratione. Eum vero sapiente tempora eveniet perspiciatis libero, omnis quae facilis! Voluptatibus minima autem, esse eius natus labore.</p>
    
    <p><Link to ="#" className="btn btn-primary btn-sm px-3 py-2">Continue Reading</Link></p>
  </div>
</div>
<Link to ="#" className="load-more">Load More</Link>
</section>


}

export default BlogBody