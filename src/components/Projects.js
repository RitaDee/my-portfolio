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



const Projects = () => {
  const projects = [
    {
      title: "Marplex RTM",
      description: "Real Time Communication Project",
      imgUrl: projImg1,
    },
    {
      title: "Landing Page",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Space Traveller's Hub",
      description: "Commercial and Scientific Space Travel Services",
      imgUrl: projImg3,
    },
     {
      title: "Cryptography",
      description: "Crypto Services",
      imgUrl: projImg4,
    },

    {
      title: "Event Site",
      description: "Event",
      imgUrl: projImg5,
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
          <Col>
            <h2>Projects</h2>
            <p>
              Bringing ideas to life, one project at a time: A showcase of my
              latest work.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
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
              <Tab.Content>
                <Tab.Pane eventKey="first">
                    <Row>
                        {projects.map((project, index) => {
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
                <Tab.Pane eventKey="third">Leaderboard</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorShape2} alt="Img"></img>
    </section>
  );
};

export default Projects;
