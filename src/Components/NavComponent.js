import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import pic from '../Assets/signal.png';

function NavComponent() {
  return (
    <>
    {/* company logo */}
    <header className='d-flex justify-content-center my-md-3'>
      <Link to='/' className='logo-link'>
          <div className='d-flex align-items-start justify-content-start gap-1'>
              <img src={pic} alt="logo" className='logo'></img>
              <p>Valido</p>
          </div>
      </Link>
    </header>

    {/* nav contents */}
      <Navbar bg="white" expand="sm">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"  className='justify-content-center'>
            <Nav className='gap-xs-0 gap-lg-4'>
              <Nav.Link href="#Recipes">Recipes</Nav.Link>
              <Nav.Link href="#Delicacies">Delicacies</Nav.Link>
              <Nav.Link href="#Recipes">Services</Nav.Link>
              <Nav.Link href="#Delicacies">Meat Meal</Nav.Link>
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Jollof Rice</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Groundnut Soup</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Salad</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  This is it
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#Recipes">Place an Order</Nav.Link>
              <Nav.Link href="#Delicacies">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavComponent;