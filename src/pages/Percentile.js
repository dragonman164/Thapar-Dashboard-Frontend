import {Form,Container,Row,Col,Button,Spinner,Table} from 'react-bootstrap';
import {useState} from 'react';
import axios from 'axios';

const Percentile = ()=>{
    const [search, setSearch] = useState(false);
    const [data, setData] = useState(null)
    const [count,setCount] = useState(null)
    const [year, setYear] = useState(null)
    const [programCode, setProgramCode] = useState(null)
    const [error, setError] = useState(false);
    

    return (
        <>

        <Container className="my-5">
        <h1>Sort Students on Basis of JEE Percentile %</h1>

        <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Count</Form.Label>
      <Form.Control onChange={(e)=>setCount(e.target.value)} type="number" placeholder="Eg : 20 " />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Year</Form.Label>
      <Form.Control onChange={(e)=>setYear(e.target.value)} type="number" placeholder="Eg : 2019" />
    </Form.Group>
  
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Program Code</Form.Label>
      <Form.Control onChange={(e)=>setProgramCode(e.target.value)} type="text" placeholder="Eg : BE" />
    </Form.Group>
        
  </Row>

        <Button onClick={()=>{
    
          setSearch(true)
             if(count !== null && year !== null && programCode !== null){
              
              var config = {
                method: 'get',
                url: `https://thapar-dashboard.herokuapp.com/sortpercentile?count=${count}&year=${year}&programcode=${programCode}`,
                headers: { 
                }
              };

              axios(config)
              .then(function (response) {

                setSearch(false);
                  setData(response.data)
              })
              .catch(function (error) {
                setSearch(false);
                setError(true)
              });

             }  
        }} className="btn-sm btn-dark">Search</Button>

  </Form>
        {search === true && count === null?<h3 className="text-danger">Count Missing!</h3> :null}
        {search === true && year === null?<h3 className="text-danger">Year Missing!!</h3> :null}
        {search === true && programCode === null?<h3 className="text-danger">programCode Missing!!!</h3> :null}
        {error?<h3 className="text-danger">One of the fields is invalid</h3>:null}


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
            <th> S No.</th>
            <th>Name </th>
            <th>Gender </th>
            <th>Enrollment No.</th>
            <th>Program Code</th>
            <th>Jee Mains Percentile</th>
            <th>PCM</th>
          </tr>
        </thead>
        <tbody>
        
            {data.map((e, index)=>{
              return (
                <tr>
              <td>{index + 1}</td>
            <td>{e["Student Name"]}</td>
            <td>{e["Gender"]}</td>
            <td>{e["Enrollment No."]}</td>
            <td>{e["Progtam Code"]}</td>
            <td>{e["Jee Main Marks/Percentile"]}</td>
            <td>{e["PCM "]}</td>
          </tr>
              )
            })}
           
          
        </tbody>
      </Table>
       ):null}


</Container>
  </Container>
        
        </>

        )
}

export default Percentile;

