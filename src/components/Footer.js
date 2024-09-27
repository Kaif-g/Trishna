import { Container, Row, Col, Button } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from '../assets/img/Trishnalogo.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import brochurePdf from "../assets/pdf/QUIZAHOLIC-RULES.pdf";
import posterPdf from "../assets/pdf/QUIZAHOLIC-RULES.pdf";
import certificatePdf from "../assets/pdf/QUIZAHOLIC-RULES.pdf";
import { useState } from "react";

export const Footer = () => {
  const [secondButtonColor, setSecondButtonColor] = useState("primary");

  const handleDownloadBrochure = () => {
    window.open(brochurePdf, "_self");
  };

  const handleViewPoster = () => {
    window.open(posterPdf, "_self");
    setSecondButtonColor("danger"); // Change color to red on click
  };

  const handleViewModelCertificate = () => {
    window.open(certificatePdf, "_self");
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <div className="d-flex flex-column align-items-start">
              <img src={logo} alt="Logo" style={{ width: '240px', height: 'auto', marginBottom: '7px', marginLeft: '-60px' }} />
              <span className="logo-text">TRISHNA 2K24</span>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center">
            <div className="d-flex justify-content-center mt-3">
              <Button variant="warning" className="m-2" onClick={handleDownloadBrochure}>
                Download Brochure
              </Button>
              <Button variant={secondButtonColor} className="m-2" onClick={handleViewPoster}>
                View Poster
              </Button>
              <Button variant="success" className="m-2" onClick={handleViewModelCertificate}>
                View Certificate Model
              </Button>
            </div>
            <div className="social-icon mt-3">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p className="text-center mt-3">Copyright 2022. All Rights Reserved</p>
            <p className="text-center">Created by: Guru Gangadhar Reddy</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
