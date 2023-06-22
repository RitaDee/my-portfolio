import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorShape2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.png";
import projImg4 from "../assets/img/project4.png";
import projImg5 from "../assets/img/project5.png";
import projImg6 from "../assets/img/project6.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


const Projects = () => {
  const firstProjects = [
    {
      title: "Marplex RTM",
      description: "Real Time Communication Project",
      imgUrl: projImg1,
    },
    {
      title: "Event Site",
      description: "Event",
      imgUrl: projImg5,
    },
    
    {
      title: "Space Traveller's Hub",
      description: "Commercial and Scientific Space Travel Services",
      imgUrl: projImg3,
    },
  ];

  const secondProjects = [
     {
      title: "Cryptography",
      description: "Crypto Services",
      imgUrl: projImg4,
    },
    {
      title: "Landing Page",
      description: "Design & Development",
      imgUrl: projImg2,
    },
     
    {
      title: "RS TV App",
      description: "Media and Entertainment",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
            <h2>Projects</h2>
            <p>
              Bringing ideas to life, one project at a time: A showcase of my
              latest work.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                <Tab.Pane eventKey="first">
                      <Row>
                        {firstProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <Row>
                        {secondProjects.map((project, index) => {
                            return (
                                <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                        })
                        }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Math magic</Tab.Pane>
                <Tab.Pane eventKey="third">Problem Solving is key in Software development</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
            </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorShape2} alt="Img"></img>
    </section>
  );
};

export default Projects;
