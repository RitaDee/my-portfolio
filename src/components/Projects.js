import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorShape2 from "../assets/img/color-sharp2.WebP";
import projImg1 from "../assets/img/project-img1.WebP";
import projImg2 from "../assets/img/project2.WebP";
import projImg4 from "../assets/img/project4.WebP";
import projImg5 from "../assets/img/project5.WebP";
import projImg6 from "../assets/img/project6.WebP";
import projImg9 from "../assets/img/project9.WebP";
import projImg10 from "../assets/img/project10.WebP";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {
  const firstProjects = [

    {
      title: "Marplex RTM",
      description: "A real time messaging & video calling web app. Built with HTML, CSS and JavaScript.",
      imgUrl: projImg1,
      link: "https://marplexr.netlify.app/",
      GitHub: "https://github.com/RitaDee/marplex-video-rtm"
    },
    {
      title: "Space Traveller's Hub",
      description: "This webapp works with real live data from the SpaceX API. The application provides commercial and scientific space travel services. It also allows users to book rockets and join selected space missions. Built with React, and Redux",
      imgUrl: projImg4,
      link: "https://spacetravel-speculoos-5b113c.netlify.app/",
      GitHub: "https://github.com/RitaDee/space-travelers-hub"
    },
    {
      title: "Math Magic",
      description: "This app performs basic mathematical operations such as addition, subtraction, multiplication, and division.",
      imgUrl: projImg10,
      link: "https://mathdee.netlify.app/",
      GitHub: "https://github.com/RitaDee/math-magic"
    }
  ];

  const secondProjects = [
    {
      title: "RS TV App",
      description: "RS TV is an Api-based media and entertainment application. Built with JavaScript",
      imgUrl: projImg6,
      link: "https://watchrsmovies.netlify.app/",
      GitHub: "https://github.com/RitaDee/RS-Movie-App", 
    },
     
    {
      title: "Leaderboard",
      description: "This app is a dynamic leaderboard that is designed to showcase the top scores of players using an API endpoint. The app is built using a combination of webpack, Javascript, CSS, and HTML.",
      imgUrl: projImg2,
      link: "https://leaderboardchart.netlify.app/",
      GitHub: "https://github.com/RitaDee/Leader-board"
    },
    {
      title: "Event Site",
      description: "Event",
      imgUrl: projImg5,
      link: "https://artevent.netlify.app/",
      GitHub: "https://github.com/RitaDee/Art-and-culture"
    },
  ];

  const thirdProjects = [
    {
      title: "Landing Page",
      description: "Our landing page offers a seamless user experience, showcasing our cutting-edge products and services.",
      imgUrl: projImg9,
      link: "https://landingpag45.netlify.app/",
      GitHub: "https://github.com/RitaDee/landing-page"
    },
  ]

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
            
                <Tab.Pane eventKey="third">
                  <Row>
                    {thirdProjects.map((project, index) => {
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

