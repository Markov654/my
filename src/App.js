import React from "react"
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from "./logo.svg"

function App() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          {<div><h1> This is bootstrap</h1>
           <img src={logo} ></img>
          </div>}
          
        </Col>
        <Col md={6}>
          {
              <div><h2>This is start</h2>
                   <div> this is my furst div </div>
                   <img src={logo} ></img>
                   <p className="App">mila ima hubavo dupe</p>
              </div>}
          
  
        </Col>
       
      </Row>
    </Container>

    
  );
}

export default App;
