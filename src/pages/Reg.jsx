import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Topbar from '../components/topbar/Topbar';
import Featured from '../components/featured/Featured';
import Maind from '../components/Maind';
import './Reg.css'
const Reg = () => {
    return (
        <div>
            <Topbar />
            <Navbar />
            <Featured />
            <div className="ach"><h1>REGISTRATION</h1></div>


            <section className='manepge'>
                <div className="left1">
                    <div className="head111">

                        <table>
                            <tr>
                                <th colspan="5">REGISTRATION FEE</th>



                            </tr>
                            <tr>
                                <th rowspan='2'>Category</th>
                                <th colspan="2">Delegates From India</th>
                                <th colspan="2">Foreign Delegates</th>

                            </tr>
                            <tr>
                                <th>IEEE Members</th>
                                <th>Non-IEEE Members</th>
                                <th>IEEE Members</th>
                                <th>Non-IEEE Members</th>

                            </tr>
                            <tr>
                                <td>UG/PG Students</td>
                                <td>INR 5000/-</td>
                                <td>INR 6000/-</td>
                                <td>USD 200/-</td>
                                <td>USD 250/-</td>




                            </tr>
                            <tr>
                                <td>Faculty/Research Scholar</td>
                                <td>INR 6000/-</td>
                                <td>INR 7000/-</td>
                                <td>USD 250/-</td>
                                <td>USD 300/-</td>
                            </tr>
                            <tr>
                                <td>Industry/Corporate</td>
                                <td>INR 7500/-</td>
                                <td>INR 8500/-</td>
                                <td>USD 300/-</td>
                                <td>USD 350/-</td>
                            </tr>
                            <tr>
                                <td>Co-Author/Attendee</td>
                                <td>INR 2000/-</td>
                                <td>INR 3000/-</td>
                                <td>USD 100/-</td>
                                <td>USD 100/-</td>
                            </tr>

                        </table>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi corrupti nobis nesciunt, maiores culpa laudantium dolor repudiandae praesentium vitae perferendis velit iure. Repudiandae voluptatibus quos quidem! Reprehenderit corporis quia modi?</p>

                    </div>

                </div>
                <div className="rigth11">
                    <Maind />
                </div>
            </section>

        </div>
    );
}

export default Reg;