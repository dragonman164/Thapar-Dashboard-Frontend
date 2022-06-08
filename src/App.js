import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Percentile from './pages/Percentile';
import IndividualStudent from './pages/IndividualStudent';
import Board from './pages/Board';
import BoardPercentile from "./pages/BoardandPercentile";

const App  = ()=>{
  return (
   <>
   <NavBar/>
   <Routes>
   <Route exact path="/" element={<Home/>}/>
   <Route exact path="/percentile" element={<Percentile/>}/>
   <Route exact path="/individual" element={<IndividualStudent/>}/>
   <Route exact path="/board" element={<Board/>}/>
   <Route exact path="/boardpercentile" element={<BoardPercentile/>}/>
   
   </Routes>
   </>
  );
}

export default App;
