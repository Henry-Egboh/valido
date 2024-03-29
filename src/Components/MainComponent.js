import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import dishpic1 from '../Assets/sam-moghadam-khamseh-VpOpy6QrDrs-unsplash.jpg';
import dishpic2 from '../Assets/andrei-caliman-m_tgfIuMoyU-unsplash.jpg';
import dishpic3 from '../Assets/mgg-vitchakorn-vBOxsZrfiCw-unsplash.jpg';
import dishpic4 from '../Assets/louis-hansel-LIJujhJviMI-unsplash.jpg';

const MainComponent = () => {
    return ( 
        <div>
            <Container>
            {/* first row Stack the columns on mobile by making them full-width */}
            <Row>
                <Col xs={12} sm={6} lg={3}>
                    <Card>
                        <Card.Header>Fav Dish</Card.Header>
                        <Card.Img variant="top" src={dishpic1} />
                        <Card.Body>
                            <Card.Title className="h6 title-color">Salad Dish</Card.Title>
                            <Card.Text className="card-text">
                            What more can we say if only you are ready for a bite, you will never say never.
                            </Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>#2280.00 <span className='ps-3 text-muted text-decoration-line-through fw-lighter fst-italic card-text'>#4350.00</span></ListGroup.Item>
                            </ListGroup>
                            <Button className='w-100 order-btn'>Order Now!</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} lg={3}>
                    <Card>
                        <Card.Header>Angel Fried</Card.Header>
                        <Card.Img variant="top" src={dishpic2} />
                        <Card.Body>
                            <Card.Title className="h6 title-color">Roasted Potatoes</Card.Title>
                            <Card.Text className="card-text">
                            What more can we say if only you are ready for a bite, you will never say never.
                            </Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>#2280.00 <span className='ps-3 text-muted text-decoration-line-through fw-lighter fst-italic card-text'>#4350.00</span></ListGroup.Item>
                            </ListGroup>
                            <Button className='w-100 order-btn'>Order Now!</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} lg={3} className="mt-4 mt-lg-0">
                    <Card>
                        <Card.Header>Sushie Vibes</Card.Header>
                        <Card.Img variant="top" src={dishpic3} />
                        <Card.Body>
                            <Card.Title className="h6 title-color">Calada fime</Card.Title>
                            <Card.Text className="card-text">
                            What more can we say if only you are ready for a bite, you will never say never.
                            </Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>#2280.00 <span className='ps-3 text-muted text-decoration-line-through fw-lighter fst-italic card-text'>#4350.00</span></ListGroup.Item>
                            </ListGroup>
                            <Button className='w-100 order-btn'>Order Now!</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} lg={3} className="mt-4 mt-lg-0">
                    <Card>
                        <Card.Header>Hot Dogs</Card.Header>
                        <Card.Img variant="top" src={dishpic4} />
                        <Card.Body>
                            <Card.Title className="h6 title-color">Beef Roll</Card.Title>
                            <Card.Text className="card-text">
                            What more can we say if only you are ready for a bite, you will never say never.
                            </Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>#2280.00 <span className='ps-3 text-muted text-decoration-line-through fw-lighter fst-italic card-text'>#4350.00</span></ListGroup.Item>
                            </ListGroup>
                            <Button className='w-100 order-btn'>Order Now!</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* second row */}
            <Row className='mt-5'>
                <Col xs={12} sm={6} lg={3}>
                    <Card>
                        <Card.Header>Fav Dish</Card.Header>
                        <Card.Img variant="top" src={dishpic1} />
                        <Card.Body>
                            <Card.Title className="h6 title-color">Salad Dish</Card.Title>
                            <Card.Text className="card-text">
                            What more can we say if only you are ready for a bite, you will never say never.
                            </Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>#6650.00 <span className='ps-3 text-muted text-decoration-line-through fw-lighter fst-italic card-text'>#8700.00</span></ListGroup.Item>
                            </ListGroup>
                            <Button className='w-100 order-btn'>Order Now!</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} lg={3}>
                    <Card>
                        <Card.Header>Angel Fried</Card.Header>
                        <Card.Img variant="top" src={dishpic2} />
                        <Card.Body>
                            <Card.Title className="h6 title-color">Roasted Potatoes</Card.Title>
                            <Card.Text className="card-text">
                            What more can we say if only you are ready for a bite, you will never say never.
                            </Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>#6650.00 <span className='ps-3 text-muted text-decoration-line-through fw-lighter fst-italic card-text'>#8700.00</span></ListGroup.Item>
                            </ListGroup>
                            <Button className='w-100 order-btn'>Order Now!</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} lg={3} className="mt-4 mt-lg-0">
                    <Card>
                        <Card.Header>Sushie Vibes</Card.Header>
                        <Card.Img variant="top" src={dishpic3} />
                        <Card.Body>
                            <Card.Title className="h6 title-color">Calada fime</Card.Title>
                            <Card.Text className="card-text">
                            What more can we say if only you are ready for a bite, you will never say never.
                            </Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>#6650.00 <span className='ps-3 text-muted text-decoration-line-through fw-lighter fst-italic card-text'>#8700.00</span></ListGroup.Item>
                            </ListGroup>
                            <Button className='w-100 order-btn'>Order Now!</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} lg={3} className="mt-4 mt-lg-0">
                    <Card>
                        <Card.Header>Hot Dogs</Card.Header>
                        <Card.Img variant="top" src={dishpic4} />
                        <Card.Body>
                            <Card.Title className="h6 title-color">Beef Roll</Card.Title>
                            <Card.Text className="card-text">
                            What more can we say if only you are ready for a bite, you will never say never.
                            </Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>#6650.00 <span className='ps-3 text-muted text-decoration-line-through fw-lighter fst-italic card-text'>#8700.00</span></ListGroup.Item>
                            </ListGroup>
                            <Button className='w-100 order-btn'>Order Now!</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container>
        </div>
     );
}
 
export default MainComponent;