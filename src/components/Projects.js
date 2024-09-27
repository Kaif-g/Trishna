import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/1.png";
import projImg2 from "../assets/img/2.png";
import projImg3 from "../assets/img/3.png";
import projImg4 from "../assets/img/4.png";
import projImg5 from "../assets/img/5.png";
import projImg6 from "../assets/img/6.png";
import projImg7 from "../assets/img/7.png";
import projImg8 from "../assets/img/8.png";
import projImg9 from "../assets/img/9.png";
import projImg10 from "../assets/img/10.png";
import projImg11 from "../assets/img/11.png";
import projImg12 from "../assets/img/12.png";
import projImg13 from "../assets/img/13.png";
import projImg14 from "../assets/img/14.png";
import projImg15 from "../assets/img/15.png";
import projImg16 from "../assets/img/16.png";
import projImg17 from "../assets/img/17.png";
import projImg18 from "../assets/img/18.png";
import projImg19 from "../assets/img/19.png";

/* TECHNICAL */ 

import projectPdf03 from "../assets/pdf/circuitron-rules.pdf";

import projectPdf06 from "../assets/pdf/QUIZAHOLIC-RULES.pdf";


/* NON TECHNICAL*/ 

import projectPdf1 from "../assets/pdf/Rude-A-Cude-Rules.pdf";
import projectPdf2 from "../assets/pdf/FRIENDLY RESUME.pdf";
import projectPdf3 from "../assets/pdf/CROSSWORD AND SUDUKO - RULES.pdf";


/* ROBOTIC */ 

import projectPdf21 from "../assets/pdf/LINE TRACER-rules.pdf";
import projectPdf23 from "../assets/pdf/ROBORACE-RULES.pdf";
import projectPdf24 from "../assets/pdf/BOT-A-MAZE-RULES.pdf";


import { useState } from "react";

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

/** TEHNICAL **/

  const projectsTab1 = [
    {
      title: "PROJECT O ERA",
      description: "CLICK ON THE PIC FOR MORE DETAILS",
      imgUrl: projImg1,
      pdfUrl: projectPdf1,
      registrationUrl: "https://google.com",
    },
    {
      title: "CREATIVE O ERA",
      description: "CLICK ON THE PIC FOR MORE DETAILS",
      imgUrl: projImg2,
      pdfUrl: projectPdf2,
      registrationUrl: "https://google.com",
    },
    {
      title: "CIRCUITRON",
      description: "CLICK ON THE PIC FOR MORE DETAILS",
      imgUrl: projImg3,
      pdfUrl: projectPdf03,
      registrationUrl: "https://google.com",
    },
    {
      title: "TRUSS BRIDZE",
      description: "CLICK ON THE PIC FOR MORE DETAILS",
      imgUrl: projImg4,
      pdfUrl: projectPdf2,
      registrationUrl: "https://google.com",
    },
     {
      title: "SANKALP",
      description: "CLICK ON THE PIC FOR MORE DETAILS",
      imgUrl: projImg5,
      pdfUrl: projectPdf2,
      registrationUrl: "https://google.com",
    },
    {
      title: "QUIZAHOLIC",
      description: "CLICK ON THE PIC FOR MORE DETAILS",
      imgUrl: projImg6,
      pdfUrl: projectPdf06,
      registrationUrl: "https://google.com",
    },
    {
      title: "LOGIC LOADER",
      description: "CLICK ON THE PIC FOR MORE DETAILS",
      imgUrl: projImg7,
      pdfUrl: projectPdf2,
      registrationUrl: "https://google.com",
    },
    {
      title: "CODE BREAKER",
      description: "CLICK ON THE PIC FOR MORE DETAILS",
      imgUrl: projImg8,
      pdfUrl: projectPdf2,
      registrationUrl: "https://google.com",
    },
    {
      title: "FRONTEND DESIGN",
      description: "CLICK ON THE PIC FOR MORE DETAILS",
      imgUrl: projImg9,
      pdfUrl: projectPdf2,
      registrationUrl: "https://google.com",
    },
    {
      title: "MAD FOR CAD",
      description: "CLICK ON THE PIC FOR MORE DETAILS",
      imgUrl: projImg10,
      pdfUrl: projectPdf2,
      registrationUrl: "https://google.com",
    },
    {
      title: "POSTER DESIGN",
      description: "CLICK ON THE PIC FOR MORE DETAILS",
      imgUrl: projImg11,
      pdfUrl: projectPdf2,
      registrationUrl: "https://google.com",
    },
  ];

/** NON TECHNICAL **/

  const projectsTab2 = [
    {
      title: "RUBE A CUBE",
      description: "CLICK ON THE PIC FOR MORE DETAILS",
      imgUrl: projImg12,
      pdfUrl: projectPdf1,
      registrationUrl: "https://google.com",
    },
    {
      title: "TREASURE HUNT",
      description: "CLICK ON THE PIC FOR MORE DETAILS",
      imgUrl: projImg13,
      pdfUrl: projectPdf2,
      registrationUrl: "https://google.com",
    },
    {
      title: "COOK WITHOUT FIRE",
      description: "CLICK ON THE PIC FOR MORE DETAILS",
      imgUrl: projImg14,
      pdfUrl: projectPdf3,
      registrationUrl: "https://google.com",
    },
    {
      title: "CROSS WORD OR SUDUKO",
      description: "CLICK ON THE PIC FOR MORE DETAILS",
      imgUrl: projImg15,
      pdfUrl: projectPdf3,
      registrationUrl: "https://google.com",
    },
   
  ];

/**ROBOTICS **/

  const projectsTab3 = [
    {
      title: "LINE TRACER",
      description: "CLICK ON THE PIC FOR MORE DETAILS",
      imgUrl: projImg16,
      pdfUrl: projectPdf21,
      registrationUrl: "https://google.com",
    },
    {
      title: "OVER DRIVE",
      description: "CLICK ON THE PIC FOR MORE DETAILS",
      imgUrl: projImg17,
      pdfUrl: projectPdf3,
      registrationUrl: "https://google.com",
    },
    {
      title: "ROBO VECHILE RACE",
      description: "CLICK ON THE PIC FOR MORE DETAILS",
      imgUrl: projImg18,
      pdfUrl: projectPdf23,
      registrationUrl: "https://google.com",
    },
    {
      title: "BOT A MAZE",
      description: "CLICK ON THE PIC FOR MORE DETAILS",
      imgUrl: projImg19,
      pdfUrl: projectPdf24,
      registrationUrl: "https://google.com",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2 className="text-center">EVENTS</h2>
            <p className="text-center">
           <h5> With a diverse range of events, TRISHNA'24 offers a one-of-a-kind
             opportunity for students to learn new skills, showcase their talents, 
             and connect with like-minded individuals. It brings you 20+ electrifying and intoxicating 
             events designed to inspire all participants to push themselves beyond their limits. 
              We have events covering all domains concerning different areas of interest and expertise </h5>
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">TECHNICAL</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">NON TECHNICAL</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">ROBOTIC</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projectsTab1.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projectsTab2.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projectsTab3.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                  <p>
                   
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
