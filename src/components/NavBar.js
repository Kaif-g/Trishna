import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/Trishnalogo.png';
import collegeLogo from '../assets/img/aitsclglogo1.png';
import departmentLogo from '../assets/img/Deptlogo.png';
import ieteLogo from '../assets/img/iete logo.jpeg'; // Import IETE logo
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Main Logo" className="main-logo" /> {/* Main Logo */}
            <img src={departmentLogo} alt="Department Logo" className="additional-logo department-logo" />
            <img src={collegeLogo} alt="College Logo" className="college-logo" /> {/* College Logo */}
            <img src={ieteLogo} alt="IETE Logo" className="additional-logo iete-logo" />
           
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>HOME</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>LIST</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>EVENTS</Nav.Link>
              <Nav.Link href="https://www.your-team-website.com" target="_blank" className='navbar-link'>OUR TEAM</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="Social Icon 1" /></a>
                <a href="#"><img src={navIcon2} alt="Social Icon 2" /></a>
                <a href="#"><img src={navIcon3} alt="Social Icon 3" /></a>
              </div>
              <a href="https://docs.google.com/forms/your-google-form-link" target="_blank" rel="noopener noreferrer">
                <button className="vvd"><span>REGISTRATION</span></button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
