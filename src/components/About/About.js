import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "left", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "1.2em", paddingBottom: "20px", textAlign:"left"}}>
              i'm a 22 year old based out of bangalore,playing around with code and design (this is designed on figma, built in react)
               
              <br />
             
             <br />
             this website is a work in progress, this is my space on the internet and would be filled eventually :D
            </h1>
            
          </Col>
       
        </Row>
       

        <Techstack />

      </Container>
    </Container>
  );
}

export default About;