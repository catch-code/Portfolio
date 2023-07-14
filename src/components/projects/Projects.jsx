import { useContext, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import "./projects.scss"
import { AppContext } from '../../context/context/app_context'

function Projects() {

    const { appState, appDispatch } = useContext(AppContext)
    const [key, setKey] = useState("")

    const handleSelect = key => {
        setKey(key)
        console.log(key)
    }

    return (
        <div id="projects" className="container projects">
            <div className='my-5 w-100'>
                <Container>
                    <Nav variant="pills" defaultActiveKey='uiux' onSelect={key => handleSelect(key)}>
                        <Nav.Item>
                            <Nav.Link eventKey='uiux'>UI/UX Design</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="mobile">Mobile Development</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="frontend">Frontend Development</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="backend">Backend Development</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="testing">Quality Testing</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="ai">Artificial Intelligence</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    {/* AIzaSyBBDf9LcojGs7jyXkFEVUKfa22M_2JN0WU */}

                    <Row className='my-5'>{key
                        ? appState.projects[key].map((project, index) =>
                            <Col md={4} key={index}>
                                <Card>
                                    <Card.Img variant="top" src={project.image} />
                                    <Card.Body>
                                        <Card.Title>{project.title}</Card.Title>
                                        <Card.Text>
                                            {project.description}
                                        </Card.Text>
                                        <Button variant="primary" href={project.link} target="_blank" rel="noopener noreferrer">
                                            View Project
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                        : appState.projects["uiux"].map((project, index) =>
                            <Col md={4} key={index}>
                                <Card>
                                    <Card.Img variant="top" src={project.image} />
                                    <Card.Body>
                                        <Card.Title>{project.title}</Card.Title>
                                        <Card.Text>
                                            {project.description}
                                        </Card.Text>
                                        <Button variant="primary" href={project.link} target="_blank" rel="noopener noreferrer">
                                            View Project
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }</Row>
                </Container>
            </div>
        </div >
    )
}
export default Projects
