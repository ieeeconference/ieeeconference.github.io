
import {BrowserRouter,Routes,Route} from "react-router-dom";
import About from "./pages/About";
import Callforpapers from "./pages/CallForPapers";
import Home from "./pages/Home";
import Shedule from "./pages/programmeShedule/Shedule";
import IncredibleIndia from "./pages/travel/IncredibleIndia";
import AboutKerala from "./pages/travel/AboutKerala";
import GodsOwnCountry from "./pages/travel/GodsOwnCountry";
import Venue from "./pages/travel/Venue";
import Accomadation from "./pages/travel/Accomadation";
import MainAttraction from "./pages/travel/MainAttraction";
import Reg from "./pages/Reg";
import Contact from "./pages/Contact";
import CFSP from "./pages/Authors/CFSP";
import CFWP from "./pages/Authors/CFWP";
import CFWP1 from "./pages/Authors/CFWP1";
import OC from "./pages/commite/OC";
import TPC from "./pages/commite/TPC";
import Commite from "./pages/commite/Commite";

const App = () => {

  return (
    <div>
      <BrowserRouter>
    <Routes>
     <Route index path="/" element={<Home/>} />
     <Route path="/about" element={<About/>} />
     <Route path="/callforpapers" element={<Callforpapers/>}></Route>
     <Route path="/programmeShedule" element={<Shedule/>} />
     <Route path="/incredibleindia" element={<IncredibleIndia/>}/>
     <Route path="/aboutkerala" element={<AboutKerala/>}/>
     <Route path="/godsowncountry" element={<GodsOwnCountry/>}/>
     <Route path="/venue" element={<Venue/>}/>
     <Route path="/accomadation" element={<Accomadation/>}/>
     <Route path="/mainattraction" element={<MainAttraction/>}/>
     <Route path="/registration" element={<Reg/>}/>
     <Route path="/contactus" element={<Contact/>}/>
     <Route path="/cfsp" element={<CFSP/>}/>
     <Route path="/cfwp" element={<CFWP/>}/>
     <Route path="/cfwp1" element={<CFWP1/>}/>
     <Route path="/oc" element={<Commite/>}/>
     <Route path="/tpc" element={<TPC/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );

}

export default App;
