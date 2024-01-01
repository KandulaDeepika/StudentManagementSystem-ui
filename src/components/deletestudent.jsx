import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Header, Icon, Modal,Card , Divider} from 'semantic-ui-react'

const DeleteStudentById = () => {
  const [open, setOpen] = React.useState(false);
  const [id, setId] = useState('');
  const [result, setResult] = useState(null);
  const [errorMessage,setErrorMessage]=useState(null);
  // const validateForm = () => {
  //   const idPattern = /^20\d+$/;

  //   if (!idPattern.test(id)) {
  //     alert('Invalid Form, Id must be in the format "C" followed by number');
  //     return false;
  //   }
  //   return true;
  // } 

  const handleSubmit = async () => {
    // if (!validateForm()) {
    //   return;
    // }
    setOpen(false);
    try {
      const response = await fetch(`/student/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.text();
      setResult(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResult(null);
      setErrorMessage(error);
    }
  };

  return (
    <div>
      {/* <Card style={{}}> */}
      {/* <Header style={{alignItems:'center'}}>Delete Student Data</Header> */}
      <Card fluid color="purple" centered style = {{width : '70rem',marginTop: '4rem'}}    >
      <Header as = 'h2' textAlign="center" style ={{marginTop:'2rem'}}>Delete Student Data</Header>
      <Divider/>
      <div>
      <Form unstackable style={{ display:"flex",
         justifycontent: "center",
         margin :"none",
         
          padding: "3rem",
          fontSize: "20px",}}>
        <Form.Group inline centered>
          <Form.Input
            label='Enter Student Id'
            placeholder='Id'
            value={id}
            onChange={(e) => setId(e.target.value)
            }
            required={true}
          />
        </Form.Group>
        <Form.Group inline>
        <Button type="submit" onClick={handleSubmit} color="red" style={{fontSize:'20px',margin:'1em 3em'}} >
          Submit
        </Button>
        </Form.Group>
      
      {/* <Modal
      
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<Button type='submit'>
      Submit
    </Button>
  
    }
    style={{border:'2px solid white',padding:'3rem',borderRadius:'20px'}}
    inverted>
      <Header icon>
        <Icon name='trash' color='blue' />
        Delete Data
      </Header>
      <Modal.Content >
        <p style={{textAlign:'center'}}>
          Do you want to delete the student details permanently?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color='grey'  onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        
        <Button color='blue' onClick={handleSubmit}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal> */}
    </Form>
    </div>
    </Card>

      {result && (
        <div style={{textAlign:'center',fontSize:'20px',color:'blue',textTransform:'capitalize'}}>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
      
      
    {/* </Card> */}
    </div>
  );
};

export default DeleteStudentById;




    