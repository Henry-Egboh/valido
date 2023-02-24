import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import dishpic1 from '../Assets/sam-moghadam-khamseh-VpOpy6QrDrs-unsplash.jpg';
import dishpic2 from '../Assets/andrei-caliman-m_tgfIuMoyU-unsplash.jpg';
import dishpic3 from '../Assets/mgg-vitchakorn-vBOxsZrfiCw-unsplash.jpg';
import dishpic4 from '../Assets/louis-hansel-LIJujhJviMI-unsplash.jpg';
import Menu from './Menu';


function Main() {
  return (
    <>
    <Container>
      {/* Stack the columns on mobile by making them full-width */}
      <Row>
        <Col xs={12} sm={6} lg={3}>
            <Card>
                <Card.Header>Fav Dish</Card.Header>
                <Card.Img variant="top" src={dishpic1} />
                <Card.Body>
                    <Card.Title>Salad Dish</Card.Title>
                    <Card.Text>
                    This comes with all you can dream of with an excellent finish that gives you that yummy taste that you cant resist.
                    What more can we say if only you are ready for a bite, you will never say never.
                    </Card.Text>
                    <Button variant="success">Order Now!</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col xs={12} sm={6} lg={3}>
            <Card>
                <Card.Header>Angel Fried</Card.Header>
                <Card.Img variant="top" src={dishpic2} />
                <Card.Body>
                    <Card.Title>Roasted Potatoes</Card.Title>
                    <Card.Text>
                    This comes with all you can dream of with an excellent finish that gives you that yummy taste that you cant resist.
                    What more can we say if only you are ready for a bite, you will never say never.
                    </Card.Text>
                    <Button variant="success">Order Now!</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col xs={12} sm={6} lg={3}>
            <Card>
                <Card.Header>Sushie Vibes</Card.Header>
                <Card.Img variant="top" src={dishpic3} />
                <Card.Body>
                    <Card.Title>Calada fime</Card.Title>
                    <Card.Text>
                    This comes with all you can dream of with an excellent finish that gives you that yummy taste that you cant resist.
                    What more can we say if only you are ready for a bite, you will never say never.
                    </Card.Text>
                    <Button variant="success">Order Now!</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col xs={12} sm={6} lg={3}>
            <Card>
                <Card.Header>Hot Dogs</Card.Header>
                <Card.Img variant="top" src={dishpic4} />
                <Card.Body>
                    <Card.Title>Beef Roll</Card.Title>
                    <Card.Text>
                    This comes with all you can dream of with an excellent finish that gives you that yummy taste that you cant resist.
                    What more can we say if only you are ready for a bite, you will never say never.
                    </Card.Text>
                    <Button variant="success">Order Now!</Button>
                </Card.Body>
            </Card>
        </Col>
      </Row>

      {/* second row */}
      <Row>
        <Col xs={12} sm={6} lg={3}>
            <Card>
                <Card.Header>Fav Dish</Card.Header>
                <Card.Img variant="top" src={dishpic1} />
                <Card.Body>
                    <Card.Title>Salad Dish</Card.Title>
                    <Card.Text>
                    This comes with all you can dream of with an excellent finish that gives you that yummy taste that you cant resist.
                    What more can we say if only you are ready for a bite, you will never say never.
                    </Card.Text>
                    <Button variant="success">Order Now!</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col xs={12} sm={6} lg={3}>
            <Card>
                <Card.Header>Angel Fried</Card.Header>
                <Card.Img variant="top" src={dishpic2} />
                <Card.Body>
                    <Card.Title>Roasted Potatoes</Card.Title>
                    <Card.Text>
                    This comes with all you can dream of with an excellent finish that gives you that yummy taste that you cant resist.
                    What more can we say if only you are ready for a bite, you will never say never.
                    </Card.Text>
                    <Button variant="success">Order Now!</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col xs={12} sm={6} lg={3}>
            <Card>
                <Card.Header>Sushie Vibes</Card.Header>
                <Card.Img variant="top" src={dishpic3} />
                <Card.Body>
                    <Card.Title>Calada fime</Card.Title>
                    <Card.Text>
                    This comes with all you can dream of with an excellent finish that gives you that yummy taste that you cant resist.
                    What more can we say if only you are ready for a bite, you will never say never.
                    </Card.Text>
                    <Button variant="success">Order Now!</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col xs={12} sm={6} lg={3}>
            <Card>
                <Card.Header>Hot Dogs</Card.Header>
                <Card.Img variant="top" src={dishpic4} />
                <Card.Body>
                    <Card.Title>Beef Roll</Card.Title>
                    <Card.Text>
                    This comes with all you can dream of with an excellent finish that gives you that yummy taste that you cant resist.
                    What more can we say if only you are ready for a bite, you will never say never.
                    </Card.Text>
                    <Button variant="success">Order Now!</Button>
                </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>
    <Container>
        <Menu />
    </Container>
    </>
  );
}

export default Main;