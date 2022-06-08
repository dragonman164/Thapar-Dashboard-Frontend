import {Modal,Button,Form,Container,Spinner} from 'react-bootstrap';
import {useState} from 'react';
import axios from 'axios';

const UploadSheetModal = (props)=>{

    const handleClose = () => props.module(false);
    const [file, setFile] = useState(null)
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(false);
     return (
        <>
        <Modal show={props.show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>Upload New Sheet</Modal.Title>
        </Modal.Header>
        <Modal.Body>Note : Please make sure excel sheet has a sheet with the name 'dsfsdfdsf'</Modal.Body>
        <Container>

        <Form.Group controlId="formFile" className="mb-3">
    
    <Form.Label>Select your excel sheet</Form.Label>
    <Form.Control onChange={(e)=>setFile(e.target.files[0])} type="file" />
  </Form.Group>
  </Container>

        <Modal.Footer> 
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={()=>{
            if(file !== null){
                setLoad(true)
              var data = new FormData();
              data.append('dataset', file);
              
              var config = {
                method: 'post',
                url: 'https://thapar-dashboard.herokuapp.com/uploadsheet',

                data : data
              };
              
              axios(config)
              .then(function (response) {
                setLoad(false)
                setError(false);
                handleClose()
                window.location.reload()

            })
              .catch(function (error) {
                setLoad(false)
                setError(true)

            });
        }
          }} variant="primary" >
            Save Changes
          </Button>
          {file === null? <h3 className="text-danger">*Excel sheet not selected</h3> : null}
          {error? <h3 className="text-danger">There was some problem with the file</h3> : null}
          {file !== null&& load === true?(
         <Spinner animation="border" role="status">
         <span className="visually-hidden mx-auto my-auto">Loading...</span>
       </Spinner>
       ) : null}
        </Modal.Footer>
    
     </Modal>
    </>
    )
}

export default UploadSheetModal;