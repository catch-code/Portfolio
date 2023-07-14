import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import "./projects.scss"
import { Col, Container, Ratio, Row } from 'react-bootstrap'

function Projects() {
    return (
        <div id="projects" className="container projects">
            <div className='my-5 w-100'>
                <Container>
                    <Row>
                        <Col>
                            <Card className="m-3">
                                <Ratio aspectRatio="16x9">
                                    <embed src="https://www.youtube.com/embed/1jqHLuAs-wc" />
                                </Ratio>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="m-3">
                                <Ratio aspectRatio="16x9">
                                    <embed src="https://www.youtube.com/embed/1jqHLuAs-wc" />
                                </Ratio>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="m-3">
                                <Ratio aspectRatio="16x9">
                                    <embed src="https://www.youtube.com/embed/1jqHLuAs-wc" />
                                </Ratio>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className="m-3">
                                <Ratio aspectRatio="16x9">
                                    <embed src="https://www.youtube.com/embed/1jqHLuAs-wc" />
                                </Ratio>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="m-3">
                                <Ratio aspectRatio="16x9">
                                    <embed src="https://www.youtube.com/embed/1jqHLuAs-wc" />
                                </Ratio>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className="m-3">
                                <Ratio aspectRatio="16x9">
                                    <embed src="https://www.youtube.com/embed/1jqHLuAs-wc" />
                                </Ratio>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )

}
export default Projects
