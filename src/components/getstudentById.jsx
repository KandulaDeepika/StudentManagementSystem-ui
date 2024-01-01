import React, { useState } from "react";
import { Button, Form, Card,Table,Header,Divider } from "semantic-ui-react";

const GetStudentById = () => {
  const [id, setId] = useState("");
  const [result, setResult] = useState(null);
  // const validateForm = () => {
  //   const idPattern = /^20\d+$/;

  //   if (!idPattern.test(id)) {
  //     alert('Invalid Form, Id must be start with 20 ');
  //     return false;
  //   }
  //   return true;
  // };
  const handleSubmit = async () => {
    // if (!validateForm()) {
    //   return;
    // }
    try {
      const response = await fetch(`/student/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResult(null);
    }
  };

  return (
    <Card fluid color="purple" centered style = {{width : '70rem',marginTop: '4rem'}}    >
      <Header as = 'h2' textAlign="center" style ={{marginTop:'2rem'}}>View Student Data</Header>
      <Divider/>
    <div>

      <Form style={{
         display:"flex",
         justifycontent: "center",
         margin :"none",
         
          padding: "3rem",
          fontSize: "20px",
        }}
      >
        <Form.Group inline>
          <Form.Input inline
            label="Enter Student Id:"
            placeholder="Id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required={true}
          />
        </Form.Group>
        <Form.Group inline >
        <Button type="submit" onClick={handleSubmit} color="blue" style={{fontSize:'20px',margin:'1em 3em'}} >
          Submit
        </Button>
        </Form.Group>
      </Form>

      {result && (
      <div>
          {/* <Card.Content header={`Name: ${result.studentName}`}/>
          <Card.Content description={`Id: ${result.studentId}`} />
          <Card.Content description={`Address: ${result.studentAddress}`} />
          <Card.Content extra>
            <p>{`PhoneNumber: ${result.studentPhoneNumber}`}</p>
          </Card.Content>
          <Card.Content extra>
            <p>{`Date of Birth: ${result.studentDob}`}</p>
          </Card.Content> */}
        
        <Table compact striped celled selectable>
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell width={1}>S.No.</Table.HeaderCell>
              <Table.HeaderCell width={2}>Name</Table.HeaderCell>
              <Table.HeaderCell width={3}>Address</Table.HeaderCell>
              <Table.HeaderCell width={2}>Phone Number</Table.HeaderCell>
              <Table.HeaderCell width={1}>Date of Birth</Table.HeaderCell>
                        

            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Cell>{`${result.studentId}`}</Table.Cell>
            <Table.Cell>{` ${result.studentName}`}</Table.Cell>
            <Table.Cell>{` ${result.studentAddress}`}</Table.Cell>
            <Table.Cell>{`${result.studentPhoneNumber}`}</Table.Cell>
            <Table.Cell>{` ${result.studentDob}`}</Table.Cell>
          </Table.Body>
        </Table>
      </div>
        // <div>
        //   <pre>{JSON.stringify(result, null, 2)}</pre>
        // </div>
      )}
    </div>
    </Card> 
  );
};

export default GetStudentById;




