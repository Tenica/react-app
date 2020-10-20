import React from 'react';
import {Link} from 'react-router-dom';

const projectsBody = () => {
    return (<section className="section border-t pb-0">
    <div className="container">
      <div className="row justify-content-center mb-5 element-animate">
        <div className="col-md-8 text-center">
          <h2 className=" heading mb-4">Check Our Awesome Projects</h2>
          <p className="mb-5 lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.</p>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row no-gutters">
        <div className="col-md-4 element-animate">
          <Link to ="project-single.html" className="link-thumbnail">
            <h3>Project Name 1</h3>
            <span className="ion-plus icon"></span>
            <img src= {"images/img_1.jpg"} alt= {"Free template by Free-Template.co"} className={"img-fluid"} />
          </Link>
        </div>
        <div className="col-md-4 element-animate">
          <a href="project-single.html" className="link-thumbnail">
            <h3>Project Name 2</h3>
            <span className="ion-plus icon"></span>
            <img src={"images/img_2.jpg"} alt= {"Free template by Free-Template.co"} className={"img-fluid"} />
          </a>
        </div>
        <div className="col-md-4 element-animate">
          <a href="project-single.html" className="link-thumbnail">
            <h3>Project Name 3</h3>
            <span className="ion-plus icon"></span>
            <img src= {"images/img_3.jpg"} alt={"Free template by Free-Template.co"} className={"img-fluid"} />
          </a>
        </div>
        <div className="col-md-4 element-animate">
          <a href="project-single.html" className="link-thumbnail">
            <h3>Project Name 4</h3>
            <span className="ion-plus icon"></span>
            <img src= {"images/img_4.jpg"} alt={"Free template by Free-Template.co"} className={"img-fluid"}/>
          </a>
        </div>
        <div className="col-md-4 element-animate">
          <a href="project-single.html" className="link-thumbnail">
            <h3>Project Name 5</h3>
            <span className="ion-plus icon"></span>
            <img src={"images/img_5.jpg"} alt={"Free template by Free-Template.co"} className={"img-fluid"}/>
          </a>
        </div>
        <div className="col-md-4 element-animate">
          <a href="project-single.html" className="link-thumbnail">
            <h3>Project Name 6</h3>
            <span className="ion-plus icon"></span>
            <img src={"images/img_6.jpg"} alt={"Free template by Free-Template.co"} className={"img-fluid"}/>
          </a>
        </div>
      </div>
      
    </div>
  </section>)


}

export default projectsBody