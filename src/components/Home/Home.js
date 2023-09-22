import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";
import Home2 from "./Home2";
// import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={0} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                <strong>hey i'm nishant</strong>{" "}
                
              </h1>

              <h2 className="heading-name">
                i'm usually found building (& breaking) stuff. i tend to consume long form content and write sometimes. you can also find me shitposting on twitter
                
              </h2>

              <div style={{ padding: 50, textAlign: "centre" }}>
                
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
