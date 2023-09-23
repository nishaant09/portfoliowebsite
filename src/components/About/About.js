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
              i'm a 22 year old based out of bangalore,playing around with code and figma
               
              <br />
             you can check my projects from the github link in the footer, and download my cv from here - <a href="https://drive.google.com/file/d/1v_hYydjb7RloKkgqS4p2KiKl3iYG4B9p/view?usp=sharing" target="_blank">cv</a>
            </h1>
            
          </Col>
       
        </Row>
       

        <Techstack />

      </Container>
    </Container>
  );
}

export default About;