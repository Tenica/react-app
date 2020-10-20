import React from 'react';
import {Link} from 'react-router-dom';



const PortfolioPage = (props) => {
   console.log(props);
    return ( <div>
        <h2>Things i have done</h2>
   <Link to="portfolio/1"><p>Item 1</p></Link>
   <Link to="portfolio/2"><p>Item 2</p></Link>
    </div>
    ) 
};

export default PortfolioPage;