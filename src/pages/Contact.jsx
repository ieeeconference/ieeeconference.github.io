import React from 'react';
import Featured from '../components/featured/Featured';
import Navbar from '../components/navbar/Navbar';
import Topbar from '../components/topbar/Topbar';
import './Contact.css';
const Contact = () => {
    return (
        <>
            <Topbar/>
            <Navbar/>
            <Featured/>
            <div className='contactPage'>
                <h1>Contact Us</h1>
                <div className='contactPeoples'>
                    <div className='contactPeople'>
                        <p>
                            Rosna P Haroon
                        </p>
                        <p>
                            Organizer
                        </p>
                        <p>
                            +91 98456 21564
                        </p>
                    </div>
                    <div className='contactPeople'>
                        <p>
                            Ansar Jamal
                        </p>
                        <p>
                            Co-Organizer
                        </p>
                        <p>
                        +91 98456 21564
                        </p>
                    </div>
                </div>
                <div className='contactPeoples'>
                    <div className='contactPeople'>
                        <p>Ilahia College of Engineering & Technology</p>
                        <p>Mulavoor, Muvattupuzha, 686673</p>
                        <p>Email :  ilahia@icet.ac.in </p>
                        <p>Phone :  4852549145 </p>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Contact;