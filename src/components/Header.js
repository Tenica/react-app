import React from 'react';
import {Link} from 'react-router-dom';





const Header = () => {
     return <header role="banner">
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
       <div className="container">
         <a className="navbar-brand " href ="/">TRAILBLAZERS</a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>

         <div className="collapse navbar-collapse" id="navbarsExample05">
           <ul className="navbar-nav pl-md-5">
             <li className="nav-item">
               <a className="nav-link active" href ="/">Home</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href ="About">About</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href ="Projects">Projects</a>
             </li>
             <li className="nav-item dropdown">
               <a className="nav-link dropdown-toggle" href ="Services" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
               <div className="dropdown-menu" aria-labelledby="dropdown04">
                 <a className="dropdown-item" href ="Services">Architectural Design</a>
                 <a className="dropdown-item" href ="Services">Interior</a>
                 <a className="dropdown-item" href ="Services">Building</a>
               </div>
             </li>
             <li className="nav-item">
               <a className="nav-link" href ="Blog">Blog</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href ="Contact">Contact</a>
             </li>
           </ul>

           <ul className="navbar-nav ml-auto">
             <li><Link to ="Contact" target="_blank" className="btn btn-primary px-3 py-2">contact us</Link></li>
           </ul>
           
         </div>
       </div>
     </nav>
   </header>
   
    
};

export default Header;