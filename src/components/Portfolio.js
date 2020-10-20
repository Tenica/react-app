import React from 'react';




const Portfolio = (props) => {
   console.log(props);
    return ( <div>
        <h2>Things i have done</h2>
   Edit the expense with id of {props.match.params.id}
    </div>
    ) 
};

export default Portfolio;