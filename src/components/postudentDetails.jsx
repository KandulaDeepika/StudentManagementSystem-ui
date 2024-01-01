import React, { useState } from 'react';
import { Button, Form, Modal,Card } from 'semantic-ui-react';

const PostStudentDetails = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    studentAddress: '',
    studentPhoneNumber: '',
    studentDob:'',
  });

  const [responseMessage, setResponseMessage] = useState(null);

  const handleChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });
  };
  const validateForm = () => {

    if (formData.studentPhoneNumber.length !== 10) {
      alert('Invalid Form, phone number must be 10 digits');
      return false;
    }
    return true;
  }

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    try {
      const response = await fetch('/student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.text();
        setResponseMessage(`${JSON.stringify(responseData)}`);
      } else {
        const errorMessage = `Failed to submit data. Server Error: ${response.statusText}`;
  
        setResponseMessage(errorMessage);
      }
    }catch (error) {
      console.error('Error submitting data:', error);
      setResponseMessage('Error submitting data. Please try again.');
    }
  };

  return (
    <Card centered style = {{width : '70rem',marginTop: '4rem'}} fluid fluid color='purple'> 
    <Card.Content>
    <Card.Header textAlign='center' style ={{marginTop:'2rem'}}>Add Student Details</Card.Header>
    
    
    <div>
    <Form onSubmit={handleSubmit} style={{maxWidth:'70%',margin:'auto auto',marginTop:'3rem',fontSize:'20px'}}>
      <Form.Group inline>

        <Form.Input
          label='Name'
          name='studentName'
          placeholder='Name'
          value={formData.name}
          onChange={handleChange}
          required={true}
          
        />
      </Form.Group>
      <Form.Group inline>
        <Form.Input
          label='Address'
          name='studentAddress'
          placeholder='Address'
          value={formData.address}
          onChange={handleChange}
          required={true}
        />
        </Form.Group>
        <Form.Group inline>
        <Form.Input
          label='Phone Number'
          name='studentPhoneNumber'
          placeholder='Phone Number'
          value={formData.phoneNumber}
          onChange={handleChange}
          required={true}
        /> 
        </Form.Group>
        <Form.Group inline>
        <Form.Input
          label='Date of Birth'
          name='studentDob'
          placeholder='dd-mm-yyyy'
          value={formData.Dob}
          onChange={handleChange}
          required={true}
        /><br/>
        </Form.Group>
        <Form.Group>        <Button type='submit' style={{fontSize:'20px',margin:'1em 3em'}} onClick={validateForm} positive>Submit</Button>
      </Form.Group>
      {/* <Modal
      trigger={<Button type='submit' style={{fontSize:'20px'}} onClick={validateForm}>Submit</Button>}
      content={responseMessage}
      actions={[{ key: 'done', content: 'Done', positive: true }]}
    /> */}
      
    </Form>
    {responseMessage && (
        <div style={{ margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <strong>Submission Result:</strong>
          <p>{responseMessage}</p>
        </div>
      )}
    </div>
    </Card.Content>
    
    </Card>
  );
};

export default PostStudentDetails;




