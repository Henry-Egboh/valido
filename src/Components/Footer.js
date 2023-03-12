import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Footer = () => {

    return (
        <footer className='bg-dark'>
            
                <section>
                    <Row>
                        {/* col 1 row 1 */}
                        <Col xs={12} sm={12} md={7} lg={8} className='py-5'>
                            <Row className='mx-5 ps-5'>
                            {/* first col */}
                            <Col xs={6} md={4} lg={3} className="">
                                <h6 className='footer-color'>Query Maker</h6>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link className='footer-text ps-0' href="/home">Solitude Pay</Nav.Link>
                                <Nav.Link className='footer-text ps-0' eventKey="link-1">Cash via ATM</Nav.Link>
                                <Nav.Link className='footer-text ps-0' eventKey="link-2">Free DOM Delivery</Nav.Link>
                                <Nav.Link className='footer-text ps-0' eventKey="link-1">Ash Botller</Nav.Link>
                                <Nav.Link className='footer-text ps-0' eventKey="link-2">Face Off Fact</Nav.Link>
                                <Nav.Link className='footer-text ps-0' eventKey="link-1">Dancing Queen</Nav.Link>
                                <Nav.Link className='footer-text ps-0' eventKey="link-2">Welcome Versace</Nav.Link>
                            </Nav>
                            </Col>

                            {/* second col */}
                            <Col xs={6} md={4} lg={3} className="">
                                <h6 className='footer-color ps-2'>Query Maker</h6>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link className='footer-text' eventKey="link-1">Cash via ATM</Nav.Link>
                                <Nav.Link className='footer-text' href="/home">Solitude Pay</Nav.Link>
                                <Nav.Link className='footer-text' eventKey="link-2">Free DOM Delivery</Nav.Link>
                                <Nav.Link className='footer-text' eventKey="link-1">Ash Botller</Nav.Link>
                                <Nav.Link className='footer-text' eventKey="link-2">Face Off Fact</Nav.Link>
                                <Nav.Link className='footer-text' eventKey="link-1">Dancing Queen</Nav.Link>
                                <Nav.Link className='footer-text' eventKey="link-2">Welcome Versace</Nav.Link>
                            </Nav>
                            </Col>

                            {/* third col */}
                            <Col xs={6} md={4} lg={3} className="">
                                <h6 className='footer-color ps-2'>Query Maker</h6>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link className='footer-text' eventKey="link-1">Cash via ATM</Nav.Link>
                                <Nav.Link className='footer-text' href="/home">Solitude Pay</Nav.Link>
                                <Nav.Link className='footer-text' eventKey="link-2">Free DOM Delivery</Nav.Link>
                                <Nav.Link className='footer-text' eventKey="link-1">Ash Botller</Nav.Link>
                                <Nav.Link className='footer-text' eventKey="link-2">Face Off Fact</Nav.Link>
                                <Nav.Link className='footer-text' eventKey="link-1">Dancing Queen</Nav.Link>
                                <Nav.Link className='footer-text' eventKey="link-2">Welcome Versace</Nav.Link>
                            </Nav>
                            </Col>

                            {/* fourth col */}
                            <Col xs={6} md={4} lg={3} className="">
                                <h6 className='footer-color ps-2'>Query Maker</h6>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link className='footer-text' eventKey="link-1">Cash via ATM</Nav.Link>
                                <Nav.Link className='footer-text' href="/home">Solitude Pay</Nav.Link>
                                <Nav.Link className='footer-text' eventKey="link-2">Free DOM Delivery</Nav.Link>
                                <Nav.Link className='footer-text' eventKey="link-1">Ash Botller</Nav.Link>
                                <Nav.Link className='footer-text' eventKey="link-2">Face Off Fact</Nav.Link>
                                <Nav.Link className='footer-text' eventKey="link-1">Dancing Queen</Nav.Link>
                                <Nav.Link className='footer-text' eventKey="link-2">Welcome Versace</Nav.Link>
                            </Nav>
                            </Col>
                            </Row>
                            {/* ============================================== */}
                            {/* second row  */}
                            <Row className='mx-5 mt-5 ps-5 bg-light bg-opacity-25 py-5'>
                                {/* 1st col */}
                            <Col xs={6} sm={6} md={4} lg={4} className="">
                                    <Nav defaultActiveKey="/home" className="flex-column">
                                        <Nav.Link className='footer-text-1 ps-0' eventKey="link-1">Ash Botller</Nav.Link>
                                        <Nav.Link className='footer-text-1 ps-0' eventKey="link-2">Face Off Fact</Nav.Link>
                                        <Nav.Link className='footer-text-1 ps-0' eventKey="link-1">Dancing Queen</Nav.Link>
                                        <Nav.Link className='footer-text-1 ps-0' eventKey="link-2">Welcome Versace</Nav.Link>
                                    </Nav>
                            </Col>
                            {/* 2nd row */}
                            <Col xs={6} sm={6} md={4} lg={4} className="">
                                    <Nav defaultActiveKey="/home" className="flex-column">
                                        <Nav.Link className='footer-text-1' eventKey="link-1">Ash Botller</Nav.Link>
                                        <Nav.Link className='footer-text-1' eventKey="link-2">Face Off Fact</Nav.Link>
                                        <Nav.Link className='footer-text-1' eventKey="link-1">Dancing Queen</Nav.Link>
                                        <Nav.Link className='footer-text-1' eventKey="link-2">Welcome Versace</Nav.Link>
                                    </Nav>
                            </Col>
                            {/* 3rd col */}
                            <Col xs={6} sm={6} md={4} lg={4} className="">
                                    <Nav defaultActiveKey="/home" className="flex-column">
                                        <Nav.Link className='footer-text-1' eventKey="link-1">Ash Botller</Nav.Link>
                                        <Nav.Link className='footer-text-1' eventKey="link-2">Face Off Fact</Nav.Link>
                                        <Nav.Link className='footer-text-1' eventKey="link-1">Dancing Queen</Nav.Link>
                                        <Nav.Link className='footer-text-1' eventKey="link-2">Welcome Versace</Nav.Link>
                                    </Nav>
                            </Col>
                            </Row>
                        </Col>
                        {/* ========================================================================================== */}
                        {/* col 2 row 1 */}
                        <Col xs={12} sm={12} md={5} lg={4} className='bg-secondary bg-opacity-50 py-5'>
                            {/* first row */}
                            <Row>
                                <Col xs={12}>
                                    <div className='mb-4 d-flex flex-column align-items-center justify-content-center'>
                                        <h4 className='text-light mb-3'>Subscribe</h4>
                                        <Form className='d-flex gap-3'>
                                            <Form.Group controlId="formBasicEmail">
                                                {/* <Form.Label className='text-danger'>Subscribe</Form.Label> */}
                                                <Form.Control type="email" placeholder="Enter email" />
                                            </Form.Group>
                                            <Button variant="success" type="submit">
                                                Submit
                                            </Button>
                                        </Form>
                                    </div>
                                </Col>
                            </Row>
                            {/* second row */}
                            <Row>
                                {/* ist col */}
                                <Col xs={6} className='d-flex justify-content-center'>
                                <Nav defaultActiveKey="/home" className="flex-column">
                                    <h6 className='footer-color ps-3'>Query Maker</h6>
                                    <Nav.Link className='footer-text-1' eventKey="link-1">Cash via ATM</Nav.Link>
                                    <Nav.Link className='footer-text-1' href="/home">Solitude Pay</Nav.Link>
                                    <Nav.Link className='footer-text-1' eventKey="link-2">Free DOM Delivery</Nav.Link>
                                    <Nav.Link className='footer-text-1' eventKey="link-1">Ash Botller</Nav.Link>
                                    <Nav.Link className='footer-text-1' eventKey="link-2">Face Off Fact</Nav.Link>
                                    <Nav.Link className='footer-text-1' eventKey="link-1">Dancing Queen</Nav.Link>
                                    <Nav.Link className='footer-text-1' eventKey="link-2">Welcome Versace</Nav.Link>
                                </Nav>
                                </Col>
                                {/* 2nd col */}
                                <Col xs={6} className='d-flex justify-content-center'>
                                <Nav defaultActiveKey="/home" className="flex-column">
                                    <h6 className='footer-color ps-3'>Query Maker</h6>
                                    <Nav.Link className='footer-text-1' eventKey="link-1">Cash via ATM</Nav.Link>
                                    <Nav.Link className='footer-text-1' href="/home">Solitude Pay</Nav.Link>
                                    <Nav.Link className='footer-text-1' eventKey="link-2">Free DOM Delivery</Nav.Link>
                                    <Nav.Link className='footer-text-1' eventKey="link-1">Ash Botller</Nav.Link>
                                    <Nav.Link className='footer-text-1' eventKey="link-2">Face Off Fact</Nav.Link>
                                    <Nav.Link className='footer-text-1' eventKey="link-1">Dancing Queen</Nav.Link>
                                    <Nav.Link className='footer-text-1' eventKey="link-2">Welcome Versace</Nav.Link>
                                </Nav>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </section>
        </footer>
    );
}

export default Footer;