import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
   return (<footer className="site-footer" role="contentinfo">
    <div className="container">
        <div className="row mb-5">
          <div className="col-md-4 mb-5">
            <h3>About The Hexa Template</h3>
            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptatibus et dolor blanditiis consequuntur ex voluptates perspiciatis omnis unde minima expedita.</p>
            <ul className="list-unstyled footer-link d-flex footer-social">
              <li><Link to ="#" className="p-2"><span className="fa fa-twitter"></span></Link></li>
              <li><Link to ="#" className="p-2"><span className="fa fa-facebook"></span></Link></li>
              <li><Link to ="#" className="p-2"><span className="fa fa-linkedin"></span></Link></li>
              <li><Link to ="#" className="p-2"><span className="fa fa-instagram"></span></Link></li>
            </ul>

          </div>
   
   

   <div className="col-md-5 mb-5 pl-md-5">
   <h3>Contact Info</h3>
   <ul className="list-unstyled footer-link">
     <li className="d-block">
       <span className="d-block">Address:</span>
       <span className="text-white">4 Kenamo Street, WUSE 2, Abuja Nigeria</span></li>
     <li className="d-block"><span className="d-block">Telephone:</span><span className="text-white">+1 242 4942 290</span></li>
     <li className="d-block"><span className="d-block">Email:</span><span className="text-white">info@yourdomain.com</span></li>
   </ul>
 </div>
 <div className="col-md-3 mb-5">
   <h3>Quick Links</h3>
   <ul className="list-unstyled footer-link">
     <li><Link to ="#">About</Link></li>
     <li><Link to ="#">Terms of Use</Link></li>
     <li><Link to ="#">Disclaimers</Link></li>
     <li><Link to ="#">Contact</Link></li>
   </ul>
 </div>
 <div className="col-md-3">
          
 </div>
 </div>
 <div className="row">
   <div className="col-12 text-md-center text-left">
     <p> Tenica Technologies 2020 All Rights Reserved. Designed Developed by <a href="chika.onyema01@gmail.com" target="_blank"  rel="noopener noreferrer" >Tenica.com</a></p>
   </div>
 </div>
 </div>
 </footer>)

 

    
}

export default Footer;