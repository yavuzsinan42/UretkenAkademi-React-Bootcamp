import { Container, Row, Col } from "reactstrap";
import React,  { useState, useEffect } from "react";
import Axios from 'axios'
import Users from "./components/Users";
import Lottie from 'react-lottie';
import animationData from './loading.json';

const App = () => {
  const [users, setUsers] = useState([]);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  useEffect(() => {
    setTimeout(() => {
      Axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.error(err);
      });
    }, 2000);
  }, []);
  return (
    
    <div className="App ">
      
        <Container>
        <Row style={{textAlign: "center", justifyContent:"center", paddingTop: "10%"}}>
        <Col md="8">
        {!users.length ? (
        
        <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
      
      ) : (<Users userList={users} /> )
    }
    </Col>
    </Row>
    
        </Container>
      </div>
  )
}

export default App