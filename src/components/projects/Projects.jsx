import { useContext } from "react"
import { Col, Container, Ratio, Row } from "react-bootstrap"
import Nav from "react-bootstrap/Nav"
import Card from "react-bootstrap/Card"

import "./projects.scss"
import { AppContext } from "../../context/context/app_context"

const Projects = () => {
  const { appState, appDispatch } = useContext(AppContext)

  const handleSelect = (key) =>
    appDispatch({
      type: "SET_CATEGORY",
      payload: key,
    })

  return (
    <div id="projects" className="container project my-5">
      <div className="my-5 w-100">
        <Container>
          <Nav
            variant="pills"
            activeKey={appState.category}
            onSelect={(key) => handleSelect(key)}
          >
            <Nav.Item>
              <Nav.Link eventKey="uiux">UI/UX Design</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="mobile">Mobile Development</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="web">Web Development</Nav.Link>
            </Nav.Item>
          </Nav>

          <Row className="my-5">
            {appState.projects[appState.category].map((project, index) => (
              <Col md={4} key={index} className="my-5">
                <Card className="raduis-5">
                  {project.image ? (
                    <Card.Img
                      className="raduis-5-2"
                      variant="top"
                      src={project.image}
                    />
                  ) : (
                    <Ratio aspectRatio="16x9" className="raduis-5">
                      <embed
                        className="raduis-5-2"
                        title="YouTube video player"
                        type="image/svg+xml"
                        src={project.embed}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      />
                    </Ratio>
                  )}
                  <Card.Body>
                    <div className="my-3">
                      <Card.Title>{project.title}</Card.Title>
                      <h6 className="desc">
                        {`${project.description.substring(0, 180)}...`}
                      </h6>
                    </div>
                    <a href={project.url} className="cta" target="_blank" rel="noreferrer">
                      <span>View Project</span>
                      <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                      </svg>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Projects
