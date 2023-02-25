import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import dishpic1 from '../Assets/sam-moghadam-khamseh-VpOpy6QrDrs-unsplash.jpg';
import dishpic2 from '../Assets/andrei-caliman-m_tgfIuMoyU-unsplash.jpg';
import dishpic3 from '../Assets/mgg-vitchakorn-vBOxsZrfiCw-unsplash.jpg';
import dishpic4 from '../Assets/louis-hansel-LIJujhJviMI-unsplash.jpg';
import Menu from './Menu';
import Coupon from './Coupon';


function Main() {
  return (
    <div className='my-5'>
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
                    This comes with all you can dream of with an excellent finish that gives you that yummy taste that you cant resist.
                    What more can we say if only you are ready for a bite, you will never say never.
                    </Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item>#2280.00 <span className='ps-3 text-muted text-decoration-line-through fw-lighter fst-italic card-text'>#4350.00</span></ListGroup.Item>
                    </ListGroup>
                    <Button variant="success" className='w-100'>Order Now!</Button>
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
                    This comes with all you can dream of with an excellent finish that gives you that yummy taste that you cant resist.
                    What more can we say if only you are ready for a bite, you will never say never.
                    </Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item>#2280.00 <span className='ps-3 text-muted text-decoration-line-through fw-lighter fst-italic card-text'>#4350.00</span></ListGroup.Item>
                    </ListGroup>
                    <Button variant="success" className='w-100'>Order Now!</Button>
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
                    This comes with all you can dream of with an excellent finish that gives you that yummy taste that you cant resist.
                    What more can we say if only you are ready for a bite, you will never say never.
                    </Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item>#2280.00 <span className='ps-3 text-muted text-decoration-line-through fw-lighter fst-italic card-text'>#4350.00</span></ListGroup.Item>
                    </ListGroup>
                    <Button variant="success" className='w-100'>Order Now!</Button>
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
                    This comes with all you can dream of with an excellent finish that gives you that yummy taste that you cant resist.
                    What more can we say if only you are ready for a bite, you will never say never.
                    </Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item>#2280.00 <span className='ps-3 text-muted text-decoration-line-through fw-lighter fst-italic card-text'>#4350.00</span></ListGroup.Item>
                    </ListGroup>
                    <Button variant="success" className='w-100'>Order Now!</Button>
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
                    This comes with all you can dream of with an excellent finish that gives you that yummy taste that you cant resist.
                    What more can we say if only you are ready for a bite, you will never say never.
                    </Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item>#2280.00 <span className='ps-3 text-muted text-decoration-line-through fw-lighter fst-italic card-text'>#4350.00</span></ListGroup.Item>
                    </ListGroup>
                    <Button variant="success" className='w-100'>Order Now!</Button>
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
                    This comes with all you can dream of with an excellent finish that gives you that yummy taste that you cant resist.
                    What more can we say if only you are ready for a bite, you will never say never.
                    </Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item>#2280.00 <span className='ps-3 text-muted text-decoration-line-through fw-lighter fst-italic card-text'>#4350.00</span></ListGroup.Item>
                    </ListGroup>
                    <Button variant="success" className='w-100'>Order Now!</Button>
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
                    This comes with all you can dream of with an excellent finish that gives you that yummy taste that you cant resist.
                    What more can we say if only you are ready for a bite, you will never say never.
                    </Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item>#2280.00 <span className='ps-3 text-muted text-decoration-line-through fw-lighter fst-italic card-text'>#4350.00</span></ListGroup.Item>
                    </ListGroup>
                    <Button variant="success" className='w-100'>Order Now!</Button>
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
                    This comes with all you can dream of with an excellent finish that gives you that yummy taste that you cant resist.
                    What more can we say if only you are ready for a bite, you will never say never.
                    </Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item>#2280.00 <span className='ps-3 text-muted text-decoration-line-through fw-lighter fst-italic card-text'>#4350.00</span></ListGroup.Item>
                    </ListGroup>
                    <Button variant="success" className='w-100'>Order Now!</Button>
                </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>
    {/*menu content with form  */}
    <Container>
        <Menu />
        <Coupon />
    </Container>
    </div>
  );
}

export default Main;