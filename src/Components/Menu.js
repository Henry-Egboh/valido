import Container from "react-bootstrap/esm/Container";
// import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import FormComponent from './FormComponent';
import customers from '../Assets/samsung-uk-YFLh6DV3hsk-unsplash.jpg';
import { useState } from "react";
// import Desserts from "./Desserts";


// create a table menu
const TableMenu = props => (
      <>
        {/* <tr>
          <th>S/N</th>
          <th>Name</th>
          <th>Price</th>
          <th>Date Created</th>
        </tr> */}
        <tr>
          <td>{props.id}</td>
          <td>{props.name}</td>
          <td>{props.price}</td>
          <td>{props.createdAt}</td>
        </tr>
      </>
)

const Menu = () => {
    const menuList = [
  {
    id: 1,
    name: 'Jollof Rice',
    price: 2300,
    createdAt: '2022-10-03'
},
  {
    id: 2,
    name: 'Fried Rice',
    price: 1665,
    createdAt: '2022-03-23'
  },
  {
    id: 3,
    name: 'Egg Sauce',
    price: 3560,
    createdAt: '2022-06-08'
  },
  {
    id: 4,
    name: 'Stew Drow',
    price: 1850,
    createdAt: '2023-01-14'
  },
  {
    id: 5,
    name: 'Salad',
    price: 2980,
    createdAt: '2023-02-09'
  },
  {
    id: 6,
    name: 'Vegetable Soup',
    price: 3600,
    createdAt: '2022-07-05'
  },
  {
    id: 7,
    name: 'Okro Soup',
    price: 1435,
    createdAt: '2023-02-11'
  },
  {
    id: 8,
    name: 'Salad',
    price: 4500,
    createdAt: '2023-02-09'
  },
  {
    id: 9,
    name: 'Egusi Soup',
    price: 860,
    createdAt: '2022-03-26'
  },
  {
    id: 10,
    name: 'Ghana Soup',
    price: 860,
    createdAt: '2022-03-26'
  }
];

// useState hook to acccess and change desserts menu
const [foodMenu, setFoodMenu] = useState(menuList);


    return ( 
        <div className="my-5">
          <Container>
              <Row>
                  <Col xs={12} md={6} lg={4}>
                      <Card>
                          <Card.Header>Customers Satisfaction</Card.Header>
                          <Card.Img variant="top" src={customers} />
                      </Card>
                    {/* <img alt='customers' src={customers} className='customers'></img> */}
                  </Col>
                  <Col xs={12} md={6} lg={4} className="mt-4 mt-md-0">
                      <Card>
                          <Card.Header>Cheap Daily Menu Now!</Card.Header>
                          {/* <Desserts myList={desserts} /> */}
                          <table>
                            <tr>
                              <th>S/N</th>
                              <th>Name</th>
                              <th>Price</th>
                              <th>Date Created</th>
                            </tr> 
                            <tbody>
                              {foodMenu.map((food) => (
                                <TableMenu id= {food.id} name= {food.name} price= {food.price} createdAt={food.createdAt} />
                              ))}
                            </tbody>
                          </table>
                      </Card>
                  </Col>
                  <Col xs={12} md={6} lg={4} className="mt-4 mt-lg-0">
                    <FormComponent />
                  </Col>
              </Row>
          </Container>
        </div>
     );
}
 
export default Menu;