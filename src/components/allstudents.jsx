// import React, { useState, useEffect } from 'react';
// import { Card,Table } from 'semantic-ui-react';

// const AllStudents = () => {
//   const [students, setStudents] = useState([]);
//   const [responseMessage, setResponseMessage] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('/student', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         if (response.ok) {
//           const responseData = await response.json();
//           setStudents(responseData);
//           setResponseMessage('success');
//         } else {
//           const errorMessage = `Failed to retrieve data. Server Error: ${response.statusText}`;
//           setResponseMessage(errorMessage);
//         }
//       } catch (error) {
//         console.error('Error retrieving data:', error);
//         setResponseMessage('Error retrieving data. Please try again.');
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <Card color='purple'>
    
//     <Card.Content>
//     <div>
//       <Button onClick={() => setResponseMessage('success')}>Click Here For All students</Button>
//       {/* {responseMessage && <Card.Group style={{display:'flex',justifyContent:'center',marginTop:'5rem'}}> */}
//         {students.map((student, index) => (
//           {/* <Card key={index}> */}
//             {/* <Card.Content> */}
//               {/* <Card.Header>{student.studentName}</Card.Header> */}
//               {/* <Card.Meta>{student.studentId}</Card.Meta> */}
//               {/* <Card.Description>{student.studentAddress}</Card.Description> */}
//             {/* </Card.Content> */}
//             {/* <Card.Content extra>{`Phone: ${student.studentPhoneNumber}`}</Card.Content> */}
//             {/* <Card.Content extra>{`Dob: ${student.studentDob}`}</Card.Content> */}
//           {/* </Card> */}
//         {/* ))} */}
//       {/* </Card.Group> */}
//       <Table compact striped celled selectable key ={index}>
//           <Table.Header>
//             <Table.Row textAlign="center">
//               <Table.HeaderCell width={1}>S.No.</Table.HeaderCell>
//               <Table.HeaderCell width={2}>Name</Table.HeaderCell>
//               <Table.HeaderCell width={3}>Address</Table.HeaderCell>
//               <Table.HeaderCell width={2}>Phone Number</Table.HeaderCell>
//               <Table.HeaderCell width={1}>Date of Birth</Table.HeaderCell>
                        

//             </Table.Row>
//           </Table.Header>
//           <Table.Body>
//             <Table.Cell>{student.studentId}</Table.Cell>
//             <Table.Cell>{student.studentName}</Table.Cell>
//             <Table.Cell>{student.studentAddress}</Table.Cell>
//             <Table.Cell>{`PhoneNumber: ${student.studentPhoneNumber}`}</Table.Cell>
//             <Table.Cell>{`Date of Birth: ${student.studentDob}`}</Table.Cell>
//           </Table.Body>
//         </Table>
// ))}

//     </div>
//     </Card.Content>
//   </Card>
//   );
// };

// export default AllStudents;


import React, { useState, useEffect } from 'react';
import { Card, Table, Button,Grid } from 'semantic-ui-react';

const AllStudents = () => {
  const [students, setStudents] = useState([]);
  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/student', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          setStudents(responseData);
          setResponseMessage('success');
        } else {
          const errorMessage = `Failed to retrieve data. Server Error: ${response.statusText}`;
          setResponseMessage(errorMessage);
        }
      } catch (error) {
        console.error('Error retrieving data:', error);
        setResponseMessage('Error retrieving data. Please try again.');
      }
    };

    fetchData();
  }, []);

  return (
    <Card color='purple' fluid centered>
      <Card.Content>
      <Grid centered>
          <Grid.Row>
            <Button onClick={() => setResponseMessage('success')}>Click Here For All students</Button>
          </Grid.Row>
        </Grid>
        <div>
          {responseMessage === 'success' && (
            <Table compact striped celled selectable style = {{marginTop: '2rem'}}>
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
                {students.map((student, index) => (
                  <Table.Row key={index} textAlign="center">
                    <Table.Cell>{student.studentId}</Table.Cell>
                    <Table.Cell>{student.studentName}</Table.Cell>
                    <Table.Cell>{student.studentAddress}</Table.Cell>
                    <Table.Cell>{` ${student.studentPhoneNumber}`}</Table.Cell>
                    <Table.Cell>{` ${student.studentDob}`}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          )}
        </div>
      </Card.Content>
    </Card>
  );
};

export default AllStudents;

