import PieChart from '../components/PieChart';
import BarChart from "../components/BarChart";
import {Container, Row, Col,Spinner} from 'react-bootstrap';
import axios from 'axios';
import {useEffect,useState} from 'react';


const Home = ()=>{

  const [regionData, setregionData] = useState(null);
  const [genderData, setgenderData] = useState(null);
  const [stateData, setStateData] = useState(null);
  const [branchData, setBranchData] = useState(null)


  useEffect(()=>{
    var config = {
      method: 'get',
      url: 'https://thapar-dashboard.herokuapp.com/regionalfilter',
      headers: { 
      }
    };
    
    axios(config)
    .then(function (response) {
        setregionData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });



    var config1 = {
      method: 'get',
      url: 'https://thapar-dashboard.herokuapp.com/gender',
      headers: { 
      }
    };
    
    axios(config1)
    .then(function (response) {
        setgenderData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

    var config3 = {
      method: 'get',
      url: 'https://thapar-dashboard.herokuapp.com/state',
      headers: { 
      }
    };
    
    axios(config3)
    .then(function (response) {
      setStateData(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });

    var config4 = {
      method: 'get',
      url: 'https://thapar-dashboard.herokuapp.com/branch',
      headers: { 
      }
    };
    
    axios(config4)
    .then(function (response) {
      setBranchData(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });


  },[])

    return (
        <>
        <Container className="mx-4 my-4">
  <Row className="justify-content-md-center ">
   <Col xl={5} className="mx-2 border border-dark border-4">{regionData=== null?(
     <>
     <Spinner animation="border" role="status">
  <span className="visually-hidden mx-auto my-auto">Loading...</span>
</Spinner>
     </>
   ):(
     <>
     <PieChart data={regionData}/> <h4 className="fw-bold mx-5 my-5">Title : Region Wise Distribution</h4>
     </>
   )}</Col>
      <Col xl={5} className="mx-2 border border-dark border-4">{genderData=== null?(
     <>
     <Spinner animation="border" role="status">
  <span className="visually-hidden mx-auto my-auto">Loading...</span>
</Spinner>
     </>
   ):(
     <>
     <PieChart data={genderData}/> <h4 className="fw-bold mx-5 my-5">Title : Gender Wise Distribution</h4>
     </>
   )}</Col>
  </Row>
  <br/><br/><br/>
  <Row className="my-5">
  <Col xl={12} className="mx-2 border border-dark border-4">{stateData=== null?(
     <>
     <Spinner animation="border" role="status">
  <span className="visually-hidden mx-auto my-auto">Loading...</span>
</Spinner>
     </>
   ):(
     <>
     <BarChart data={stateData}/> <h4 className="fw-bold mx-5 my-5">Title : State Wise Distribution</h4>
     </>
   )}</Col>
  <Col xl={12} className="mx-2 my-4 border border-dark border-4">{branchData=== null?(
     <>
     <Spinner animation="border" role="status">
  <span className="visually-hidden mx-auto my-auto">Loading...</span>
</Spinner>
     </>
   ):(
     <>
     <BarChart data={branchData}/> <h4 className="fw-bold mx-5 my-5">Title : Branch Wise Distribution</h4>
     </>
   )}</Col>

  </Row>
</Container>
        </>
    )
}

export default Home;