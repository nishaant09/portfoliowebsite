import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={7} className="home-about-description">
           
            <p className="home-about-body">
              product,growth,frontend,& data science are my areas of interest, having worked in 
              three startups , building 0 to 1 as well as scaling 1 to 10 is something i can really do.
             
              
              
              
              <br />
              -reading list <a href="https://readwell.xyz" target="_blank">readwell</a>
              <br />
              -my projects  <a href="https://github.com/nishaant09" target="_blank" >github</a>
           
              <br />
              -my writings <a href="https://substack.com/profile/78933586-nishant?utm_source=user-menu" target="_blank">substack</a>
              <br />
              -my CV  <a href="" target="_blank">CV</a>
            </p>
    
          </Col>
          
          
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1></h1>
            <p>
              
              this website work is a work in progress, err :p
            </p>
           
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
