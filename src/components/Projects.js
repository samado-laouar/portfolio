import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import OprojImg1 from "../assets/img/rsz_1preview.png";
import OprojImg2 from "../assets/img/rsz_2preview.png";
import OprojImg3 from "../assets/img/rsz_3preview.png";
import TprojImg1 from "../assets/img/rsz_1Tpreview.png";
import TprojImg2 from "../assets/img/rsz_2Tpreview.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Company Presentation",
      description: "Design & Development",
      imgUrl: OprojImg1,
      link: "https://alr-template01.netlify.app",
    },
    {
      title: "Financial Web",
      description: "Design & Development",
      imgUrl: OprojImg2,
      link: "https://alr-template02.netlify.app",
    },
    {
      title: "TODO",
      description: "Design & Development",
      imgUrl: OprojImg3,
      link: "https://alr-template03.netlify.app",
    },
  ];
  const projectst = [
    {
      title: "Compile Project",
      description: "Design & Development",
      imgUrl: TprojImg1,
      link: "https://github.com/samado-laouar/Projet_Compile",
    },
    {
      title: "Web Scraping",
      description: "Design & Development",
      imgUrl: TprojImg2,
      link: "https://github.com/samado-laouar/Web-Scraping-Project",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                        {
                          projects.map((project, index) => {
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
                        {
                          projectst.map((project, index) => {
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
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
