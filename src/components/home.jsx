import React from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const items = [
  {
    header: 'Add Student',
    link: '/studentms/createstudent',
  },
  {
    header: 'Update Student Data',
    link: '/studentms/update',
  },
  {
    header: 'Student Details',
    link: '/studentms/getdetails',
  },
  {
    header: 'All Students',
    link: '/studentms/allstudents',
  },
  {
    header: 'Delete Student Data',
    link: '/studentms/delete',
  },
];

const Home = () => (
  // <Card>
  //   <Card.Content>
  //     <Card.Group> 
  //   {items.map((item, index) => (
  //     <Link to={item.link} key={index}>
  //       <Card  style={{ display:'flex',cursor: 'pointer',margin:'2rem',justifyContent : 'center',alignItems : 'center'}}>
  //         <Card.Content>
  //           <Card.Header>{item.header}</Card.Header>
  //         </Card.Content>
  //       </Card><br/>
  //     </Link>
  //   ))}
  // </Card.Group>
  //   </Card.Content>
  // </Card>
   
   <Card  centered style = {{width : '25rem'}} fluid color='purple'>
    <Card.Content>
       <Card.Group>
          <Card.Content>
          <Card.Group> 
    {items.map((item, index) => (
      <Link to={item.link} key={index}>
        <Card color='orange' style={{ display:'flex',cursor: 'pointer',margin:'2rem',justifyContent : 'center',alignItems : 'center'}}>
          <Card.Content>
            <Card.Header>{item.header}</Card.Header>
          </Card.Content>
        </Card><br/>
      </Link>
    ))}
  </Card.Group>
          </Card.Content>
  </Card.Group>
    </Card.Content>
  </Card>
  
);

export default Home;
