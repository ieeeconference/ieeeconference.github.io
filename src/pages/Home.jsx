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
               <div className="containerHome">
                   <div className="head">
                       <h3 className="headingName"> ICIET 2023 </h3>
                     <p className='para'>
                         ICIET-2023 is the International Conference organized by Ilahia College of Engineering and Technology,Muvattupuzha,kerala,India.This Conference aims to bring together the researchers,academicians and Industrialist under a single platform to share their knowledge and research experience so as
                     to provide directions for future reasearch.This Conference is an International forum for the researchers in Engineering and Technology to discuss their knowlege in their areas of interest. </p>
                   </div>
                   <div className="head">
                       <h3 className="headingName"> About ICET </h3>
                     <p className='para'>
                     Ilahia Trust made a leap forward in the educational field by pioneering one of the first self-financing engineering colleges. Ilahia College of Engineering and Technology (ICET), Mulavoor P.O., Muvattupuzha is a co-educational minority institution approved by AICTE, New Delhi and affiliated to APJ Abdul Kalam Kerala Technological University (KTU). The college is established in the year 2002. Within 19 years since its inception ICET has made many creditable achievements. 16 batches of engineering students have passed out from the college with academic brilliance and all-round excellence and occupy positions in various corporates and institutions. Some of our alumni have also proved themselves as excellent entrepreneurs. As part of its social commitment, the college provides free education and Scholarship from various agencies.
                    </p>
                   </div>
                   <div className="head">
                       <h3 className="headingName"> Our Vision </h3>
                     <p className='para'>
                     To become a global technical institution of high repute by nurturing a spirit of academic excellence and pursuit of advanced technical research by imparting timeless core values to the learners to serve humankind.                    </p>
                   </div>
                   <div className="head">
                       <h3 className="headingName"> Our Mission </h3>
                     <p className='para'>
                     To transform the learners into exceptional technocrats and entrepreneurs capable of meeting ever-changing challenges in the global society, by continually imparting high-quality outcome-based technical education by:

Incorporating the best possible innovative instructional techniques.
Providing a strong academic foundation, technical skills and promoting research and development activities.
Developing leadership qualities, soft skills, and building spirit for teamwork.
Inculcating professional ethics, critical thinking mind and positive attitude of lifelong learning.

                </p>
                   </div>
               </div>
        </div>
    );
}

export default Home;
