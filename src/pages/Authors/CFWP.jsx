import React from 'react';
import './CFWP.css'
import Navbar from '../../components/navbar/Navbar';
import Topbar from '../../components/topbar/Topbar';
import Featured from '../../components/featured/Featured';
const tracks = [
    "Artificial Intelligence & Data Science",
    "IOT and its Applications",
    "Sustainable & Enviornmental Engineering",
    "Web3 & Blockchain",
    "Communication & Signal Processing",
    "Advanced materials and Methods in Structural engineering",
    "Power Electronics and Applications"
]
const CFWP = () => {
    return (
        <div>
            <Topbar/>
            <Navbar/>
            <Featured/>
            <h3 className='trackHead'>Conference Tracks</h3>
            {
                tracks.map((value,index) => {
                    return <Track key={index} text={value}/>
                })
            }
        </div>
    );
}

const Track = (props) => {
    return (
        <div className='track'>
                {props.text}
        </div>
    )
}

export default CFWP ;
