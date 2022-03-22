import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Topbar from '../../components/topbar/Topbar';
import Featured from '../../components/featured/Featured';
import './Commite.css'

const Commite = () => {
    return (
        <div>
            <Topbar />
            <Navbar />
            < Featured />
            <div className="main">
                <h2 className="headmain">COMMITTEE</h2>
                <ul class="tilesWrap">
                    <li>
                        <h1>01</h1>
                        <h2>Chief Patron</h2>
                        <h3>Mr. K.M. Pareeth</h3>
                        Chairman
                        <h2>Patron</h2>
                        <h3>Mr. M.M. Muhammed Kunju</h3>
                        Vice Chairman
                        <h2>Conference General Chair</h2>
                        <h3>Prof. Dr. Abdul Gafur M</h3>
                        Principal,ICET
                    </li>
                    <li>
                        <h1>02</h1>
                        <h2>Conference Chair</h2>
                        <h3>Prof. Rosna P Haroon</h3>
                        Asst. Professor(CSE), Coordinator

                        <h3>Prof. Ansar Jamal</h3>
                        Asst. Professor(EEE), Co-Coordinator
                    </li>
                    <br></br>
                    <li>
                        <h1>03</h1>
                        <h2>Organising Committee</h2>
                        <br></br>
                        <h3>Program Committee</h3>
                        <h4>Prof. Shebin Sherif</h4>
                        Asst. Professor(MBA), Convener
                        <h4>Prof. Raiesh R</h4>
                        Asst. Professor(ME), Co-Convener
                        <h3>Finance and Budget</h3>
                        <h4>Prof. Abdul Ali </h4>
                        Asst. Professor(CSE), Convener
                        <h4>Prof. Ranjan Abraham</h4>
                        Asst. Professor(CE), Co-Convener
                        <h3>Paper Review Committee</h3>
                        <h4>Dr. Sachin Gee Paul</h4>
                        Asst. Professor(EEE), Convener
                        <h4>Dr. Sayed Ibrahim</h4>
                        Asst. Professor(CE), Co-Convener
                        <h3>Website and Design</h3>
                        <h4>Prof. Nasreen Ali</h4>
                        Asst. Professor(CSE), Convener
                        <h3>Publicity</h3>
                        <h4>Prof. Binish T</h4>
                        Asst. Professor(MBA), Convener
                        <h3>Registration Committee</h3>
                        <h4>Prof. Chaithanya G Nair</h4>
                        Asst. Professor(ECE), Convener
                        <h4>Prof. Babitha Peter</h4>
                        Asst. Professor(CE), Co-Convener
                        <h3>Documentation</h3>
                        <h4>Prof. Safiya K.M</h4>
                        Asst. Professor(CSE), Convener
                        <h4>Prof. Lakshmi Krishnan</h4>
                        Asst. Professor(EEE), Co-Convener
                        <h3>Transportation</h3>
                        <h4>Prot. Rafeeq Sidhic</h4>
                        Asst. Professor(ME), Convener
                        <h3>Food and Accommodation</h3>
                        <h4>Prof. Shafan Salam</h4>
                        Asst. Professor(ECE), Convener
                        <h4>Prof. Sheena Jabbar</h4>
                        Asst. Professor(MCA), Co-Convener

                    </li>
                    <li>
                        <h1>04</h1>
                        <h2>Advisory Committee</h2>
                       
                    </li>
                    <li>
                        <h1>05</h1>
                        <h2>Technical Committee</h2>
                       
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default Commite;