import Container from "react-bootstrap/esm/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FormComponent from './FormComponent';
import customers from '../Assets/samsung-uk-YFLh6DV3hsk-unsplash.jpg'

const Menu = () => {
    // const desserts = [
//   {
//     id: 1,
//     name: 'Jollof Rice',
//     price: 2300,
//     createdAt: '2022-10-03'
// },
//   {
//     id: 2,
//     name: 'Fried Rice',
//     price: 1665,
//     createdAt: '2022-03-23'
//   },
//   {
//     id: 3,
//     name: 'Egg Sauce',
//     price: 3560,
//     createdAt: '2022-06-08'
//   },
//   {
//     id: 4,
//     name: 'Stew Drow',
//     price: 1850,
//     createdAt: '2023-01-14'
//   },
//   {
//     id: 5,
//     name: 'Salad',
//     price: 2980,
//     createdAt: '2023-02-09'
//   },
//   {
//     id: 6,
//     name: 'Groundnut Soup',
//     price: 4890,
//     createdAt: '2022-03-05'
//   }
// ];
    return ( 
        <>
        <Container>
        <Row>
        <Col xs={12} sm={12} lg={4}>
            <Card>
                <Card.Header>Customers Satisfaction</Card.Header>
                <Card.Img variant="top" src={customers} />
            </Card>
          {/* <img alt='customers' src={customers} className='customers'></img> */}
        </Col>
        <Col xs={12} sm={6} lg={4}>
            <Card>
                <Card.Header>Soup Category</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Vegetable Soup</ListGroup.Item>
                    <ListGroup.Item>Okro Soup</ListGroup.Item>
                    <ListGroup.Item>Egusi Soup</ListGroup.Item>
                    <ListGroup.Item>Vegetable Soup</ListGroup.Item>
                    <ListGroup.Item>Okro Soup</ListGroup.Item>
                    <ListGroup.Item>Egusi Soup</ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <FormComponent />
        </Col>
      </Row>
        </Container>
        </>
     );
}
 
export default Menu;