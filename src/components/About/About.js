import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";

import Tilt from "react-parallax-tilt";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
             as said earlier, this is still a work in progress
             try tapping on the screen and making constellations
            </h1>
            <Aboutcard />
          </Col>
         
        </Row>
        <h1 className="project-heading">
          
        </h1>

        <Techstack />

      </Container>
    </Container>
  );
}

export default About;
