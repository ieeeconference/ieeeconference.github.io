import React from 'react';
import './featured.css';
import image from '../../images/International Conference on Innovations in Engineering and Technology.png';
const Featured = () => {
    return (
        <div className='featured'>
            <img src={image} alt="" className='featuredImage'/>
           <div className="heading">
               {/* <h1 className="title">International Conference on Innovations in Engineering and Technology<br/>(ICIET - 23)</h1>
               <span className='titlespan' >23-24 March 2023</span> */}

           </div>
        </div>
    );
}

export default Featured;
