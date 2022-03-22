import React from 'react';
import Featured from '../components/featured/Featured';
import Navbar from '../components/navbar/Navbar';
import Topbar from '../components/topbar/Topbar';
import './home.css';
const Home = () => {
    return (
        <div>
            <Topbar/>
            <Navbar/>
            <Featured/>
           <div className="home">
               <div className="containerHome">
               <h1 className="pageName">Home</h1>
                   <div className="head">
                       <h3 className="headingName"> ICIET 2023 </h3>
                     <p className='para'>
                         ICIET-2023 is the International Conference organized by Ilahia College of Engineering and Technology,Muvattupuzha,kerala,India.This Conference aims to bring together the researchers,academicians and Industrialist under a single platform to share their knowledge and research experience so as
                     to provide directions for future reasearch.This Conference is an International forum for the researchers in Engineering and Technology to discuss in Engineering their knowlege in their areas of interest. </p>
                   </div>
               </div>
           </div>
        </div>
    );
}

export default Home;
