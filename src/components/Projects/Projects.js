import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="NEWCASTLE-AUTO-SPARE-PARTS-PTY-LTD"
              description="The Newcastle Auto Spare Parts Online Portal offers a convenient platform for Australian automotive enthusiasts to buy and track parts with personalized recommendations and secure checkout."
              ghLink="https://github.com/samratmalla48/NEWCASTLE-AUTO-SPARE-PARTS-PTY-LTD-main"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

         

        

          


         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
