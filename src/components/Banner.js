import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from  '../assets/img/astro.png';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["TRISHNA 2K24", "ECE FEST"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const handleConnectClick = () => {
    window.location.href = 'https://example.com'; // Replace 'https://example.com' with your desired external website URL
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">DEPARTMENT OF ECE </span>
                  <h1>{`Technical Symposium`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "TRISHNA 2K24","ECE FEST" ]'><span className="wrap">{text}</span></span></h1>
                  <p> "Trishna is an intercollegiate Technical event being organized by the
                      Department of Electronics and communication". This time TRISHNA is back with more than a bang for the year 2K24 – with events to excite,
                      Zones to inspire, Live models to educate and shows to enthrall. With the motto Conceive, Create and Conquer Trishna’24 promises to be the perfect platform
                      for students from across the country to showcase their talent and challenge themselves to think beyond the boundaries! To all the Engineers (irrespective of the department),
                      <br></br> <br></br>  Welcome! To the seasoned, welcome back, to this journey of exploration, revelation and awe.
                      Come ___ NOVEMBER 2024, to our college, will be the epicenter of a scintillating Celebration of Technology, on 18 & 19 OCTOBER
                  </p>
                  <button onClick={handleConnectClick}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
