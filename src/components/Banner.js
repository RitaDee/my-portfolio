import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['web developer', 'web designer', 'React js'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length);

        setText(updateText);

        if (isDeleting && text === fullText) {
            setDelta(prevDelta => prevDelta / 2);
        };
        if (isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500)
        }
    }
  return (
    <section>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`I’m a Software Developer`}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              {" "}
              I can help you build a product, feature or website Look through
              some of my work and experience! If you like what you see and have
              a project you need coded, don’t hestiate to contact me.
            </p>
            <button onClick={() => console.log("connect")}>
              Let's connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
