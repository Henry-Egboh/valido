import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import picDish from '../Assets/jack-shingai-uHYOKEosqmk-unsplash.jpg';
import picDish1 from '../Assets/mgg-vitchakorn-vBOxsZrfiCw-unsplash.jpg';
import picDish2 from '../Assets/sam-moghadam-khamseh-VpOpy6QrDrs-unsplash.jpg';
import picDish3 from '../Assets/louis-hansel-LIJujhJviMI-unsplash.jpg';

const Coupon = () => {
    return ( 
        <div>
            <Container>
                <h2 className='text-center text-secondary fs-4'>Special Coupon</h2>
                    {/* first row */}
                <div className='d-flex justify-content-center'>
                    <Row className='w-75 coupon-bg mt-3'>
                        <Col xs={12} md={6} className='px-0'>
                            <img alt='coupon' src={picDish} className="w-100" />
                        </Col>

                        <Col xs={12} md={6} className='py-4'>
                            <div>
                                <h4 className='border-bottom'>New Offer!</h4>
                                <p>W hat i the fridge but what can be said is that we need to look into what is happening in here so that
                                    it will help to curb excesses. Meanwhile enjoy the besdtg taste in the restaurant business and we are not
                                    joking, Take this opportunity while you can have it.
                                </p>
                                <Card.Footer>Hurry now while stock lasts!</Card.Footer>
                            </div>
                        </Col>
                    </Row>
                </div>
                        {/* second row */}
                <div className='d-flex justify-content-center'>
                    <Row className='w-75 coupon-bg-1 my-5'>
                        <Col xs={12} md={6} className='px-0'>
                            <img alt='coupon' src={picDish1} className="w-100" />
                        </Col>

                        <Col xs={12} md={6} className='py-4'>
                            <div>
                                <h4 className='border-bottom'>New Offer!</h4>
                                <p>W hat i the fridge but what can be said is that we need to look into what is happening in here so that
                                    it will help to curb excesses. Meanwhile enjoy the besdtg taste in the restaurant business and we are not
                                    joking, Take this opportunity while you can have it.
                                </p>
                                <Card.Footer>Hurry now while stock lasts!</Card.Footer>
                            </div>
                        </Col>
                    </Row>
                </div>
                    {/* third row */}
                <div className='d-flex justify-content-center'>
                    <Row className='w-75 coupon-bg mt-3'>
                        <Col xs={12} md={6} className='px-0'>
                            <img alt='coupon' src={picDish2} className="w-100" />
                        </Col>

                        <Col xs={12} md={6} className='py-4'>
                            <div>
                                <h4 className='border-bottom'>New Offer!</h4>
                                <p>W hat i the fridge but what can be said is that we need to look into what is happening in here so that
                                    it will help to curb excesses. Meanwhile enjoy the besdtg taste in the restaurant business and we are not
                                    joking, Take this opportunity while you can have it.
                                </p>
                                <Card.Footer>Hurry now while stock lasts!</Card.Footer>
                            </div>
                        </Col>
                    </Row>
                </div>
                    {/* fourth row */}
                <div className='d-flex justify-content-center'>
                    <Row className='w-75 coupon-bg-1 my-5'>
                        <Col xs={12} md={6} className='px-0'>
                            <img alt='coupon' src={picDish3} className="w-100" />
                        </Col>

                        <Col xs={12} md={6} className='py-4'>
                            <div>
                                <h4 className='border-bottom'>New Offer!</h4>
                                <p>W hat i the fridge but what can be said is that we need to look into what is happening in here so that
                                    it will help to curb excesses. Meanwhile enjoy the besdtg taste in the restaurant business and we are not
                                    joking, Take this opportunity while you can have it.
                                </p>
                                <Card.Footer>Hurry now while stock lasts!</Card.Footer>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
     );
}
 
export default Coupon;