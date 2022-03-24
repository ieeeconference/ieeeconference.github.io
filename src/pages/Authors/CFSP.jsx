import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Topbar from '../../components/topbar/Topbar';
import Featured from '../../components/featured/Featured';
import Maind from '../../components/Maind';
import './CFSP.css'

const CFSP = () => {
    return (
        <div>
            <Topbar />
            <Navbar />
            <Featured />


            <section className='manepge'>
                <div className="left1">
                    <div className="head111">
                        <h1>Call for papers</h1>
                        <br/>
                        <p className='para1'>
                        ICIET 2023 invites full-length original research contributions from engineering 
                            professionals from industries, R&D organisations, academic institutions
                            and research scholars from all around the world. 
                            Full-length original research contributions and review articles not 
                            exceeding eight pages as per the IEEE double-column format shall be submitted.
                            The manuscript should contribute original research ideas, developmental ideas, 
                            analysis, findings, results, etc. The manuscript should not have been published
                            in any journals/magazines or conference proceedings and not under review in
                            any of them. Further, the manuscript should contain the name of the 
                            corresponding author with the e-mail id and affiliation of all authors. 
                            A soft copy of the full-length manuscripts (in .doc and .pdf) shall be 
                            submitted to iciet@icet.ac.in . All the submitted manuscripts will 
                            be sent for peer review and the corresponding author will be intimated about the 
                            outcome of the review process. If reviewers recommended further 
                            improvements in the manuscript, the manuscript will be sent back to the 
                            corresponding author and the revised version of the manuscript shall be 
                            submitted within 10 days on the date of notification.  
                        </p>

                    </div>

                </div>
                <div className="rigth11">
                   <Maind />
                </div>
            </section>


        </div>
    );
}

export default CFSP;