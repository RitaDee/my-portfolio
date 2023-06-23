import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { Container, Col, Row } from "react-bootstrap";

export const Skills = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                <div className="skill-box">
                    <h2>Skills</h2>
                    <p>The expert in anything was once a beginner</p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                            <img src={meter1} alt="Img" />
                            <h5>HTML5</h5>
                        </div>
                        <div className="item">
                            <img src={meter1} alt="Img" />
                            <h5>CSS3</h5>
                        </div>
                        <div className="item">
                            <img src={meter1} alt="Img" />
                            <h5>Git/Github</h5>
                        </div>
                        <div className="item">
                            <img src={meter2} alt="Img" />
                            <h5>SQL</h5>
                        </div>
                        <div className="item">
                            <img src={meter3} alt="Img" />
                            <h5>Ruby on Rails</h5>
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} alt="Img" />
    </section>
)
  };


export default Skills;