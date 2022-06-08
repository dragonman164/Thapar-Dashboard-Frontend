import {Container, Navbar,Nav,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import UploadSheetModal from './UploadSheetModal';
import { useState } from 'react';

const NavBar = ()=>{
  const NavbarStyle = {
    textDecoration : 'inherit',
    color : 'white',
    fontWeight:'bold',
  
  
  }

  const [show, setShow] = useState(false);
    return (
        <>
        <UploadSheetModal show={show} module={setShow}/>
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>
          <h4 className="fw-bold"> Thapar Dashboard</h4>
      </Navbar.Brand>
      <Nav className="h5 me-auto fw-bold">
      <Link to="/"><Nav.Link style={NavbarStyle} disabled={true}>Home</Nav.Link></Link>
       <Link to="/percentile"><Nav.Link style={NavbarStyle} disabled={true}>Sort by Percentile</Nav.Link></Link>
       <Link to="/board"><Nav.Link style={NavbarStyle} disabled={true}>Sort by Board</Nav.Link></Link>
       {/* <Link to="/boardpercentile"><Nav.Link style={NavbarStyle} disabled={true}>Sort by Percentile and Board</Nav.Link></Link> */}
       <Link to="/individual"><Nav.Link style={NavbarStyle} disabled={true}>Individual Student Details</Nav.Link></Link>
       <Nav.Link>
         <Button onClick={()=>setShow(true)} className="btn-sm btn-success">Upload New Sheet</Button>
      </Nav.Link>

    </Nav>
    </Container>
  </Navbar>
        </>
    )

}
export default NavBar;