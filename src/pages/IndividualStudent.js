import { Container,Form,Button,Table,Spinner} from "react-bootstrap";
import {useState} from 'react';


const IndividualStudent = ()=>{

    const [data, setData] = useState(null);
    const [search, setSearch] = useState(false);
    const [valroll, setvalroll] = useState(null);
    const [error, setError] = useState(false);
    const [roll, setRoll] = useState(null)  
    return (
        <>
       <Container style={{
        display: 'flex',
        flexWrap:'wrap',
        alignContent:'center'
       }} className="mx-5 my-5 ">
        <Form>
  <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
    <Form.Label>Enrollment No.</Form.Label>
    <Form.Control onChange={(e)=>setRoll(e.target.value)} style={{width:'350px'}} type="number" placeholder="Eg : 101917117" />
  
  </Form.Group>
  <Button onClick={()=>{
    if(roll === null) setvalroll(true);
    else setvalroll(false);
    
    if(roll !== null){
      setSearch(true)
      setError(false);
        var axios = require('axios');

  var config = {
    method: 'get',
    url: `https://thapar-dashboard.herokuapp.com/studentdetails?roll=${roll}`,
    headers: { 
    }
  };

  axios(config)
  .then(function (response) {
    setSearch(false);
    setData(response.data);
  })
  .catch(function (error) {
    setSearch(false);
    setError(true);
  });

    }

  }} style={{
        display:'inline-block'
    }} className="btn-sm btn-dark">Search</Button>

</Form>

       </Container>

       <Container className="mx-5 my-5">

       {data === null&& search === true?(
         <Spinner animation="border" role="status">
         <span className="visually-hidden mx-auto my-auto">Loading...</span>
       </Spinner>
       ) : null}
       {data !== null?(
          <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th className="h5">Field</th>
              <th className="h5">Data </th>
            
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map((e)=>{
              return (
                <tr>
              <td className="fw-bold h6">{e}</td>
              <td>{data[e]}</td>
                </tr>
              )
            })}
           
          </tbody>
        </Table>
       ):null}

       {valroll?<h3 className="text-danger">Please Make Sure that you have typed the roll no.</h3> : null}
       {error?<h3 className="text-danger">Roll No. not found in database</h3>:null}
      
</Container>
       </>
    )
}

export default IndividualStudent;