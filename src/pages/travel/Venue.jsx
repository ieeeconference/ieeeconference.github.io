import React from 'react';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Topbar from '../../components/topbar/Topbar';
import "./Venue.css";
const Venue = () => {
    return (
        <div>
            <Topbar/>
            <Navbar/>
            <Featured/>
            <div className="containerHome">
                   <div className="head">
                       <h3 className="headingName"> Venue </h3>
                    </div>
                    <div className='venueRow'>
                        <iframe title="Map" width="600" height="450" style={{border:0}} loading="lazy" allowFullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJTc2StKrnBzsR4Fzi_q1taGI&key=AIzaSyC96wwnqUWummuoNzXUzUG8GDP-vaWGApM"></iframe>
                        <div className='addressCol'>

                            Ilahia College of Engineering & Technology
                        <br/>
                        Mulavoor P O, Muvattupuzha,
                        Ernakulam ,Kerala
                      <br/>
  Phone : 04852549145, 8078303883, 8078305885
                        <br/>
  E-mail : ilahia@icet.ac.in
                        </div>
                    </div>
            </div>
            
        </div>
    );
}

export default Venue  ;