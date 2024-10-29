import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(){
    return(
        <div className='footer_container'>
            <Container>
            <Row className="align-items-center">
                
                <Col xl={3} md={6} sm={6}  >
                <div className='footer'>
                        <h6>Company</h6>
                        <div className='footer_list'>
                            <ul>
                                <li> <a href=''>About company</a></li>
                                <li><a href=''>Company services</a></li>
                                <li><a href=''>Job opportunities</a></li>
                                <li><a href=''>Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col xl={3} md={6}   sm={6}>
                <div className='footer'>
                        <h6>customer</h6>
                        <div className='footer_list'>
                            <ul>
                                <li> <a href=''>About company</a></li>
                                <li><a href=''>Company services</a></li>
                                <li><a href=''>Job opportunities</a></li>
                                <li><a href=''>Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col xl={3} md={6}  sm={6}>
                <div className='footer'>
                        <h6>Resources</h6>
                        <div className='footer_list'>
                            <ul>
                                <li> <a href=''>About company</a></li>
                                <li><a href=''>Company services</a></li>
                                <li><a href=''>Job opportunities</a></li>
                                <li><a href=''>Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col xl={3} md={6}  sm={6}>
                    <div className='footer'>
                        <h6>Services</h6>
                        <div className='footer_list'>
                            <ul>
                                <li> <a href=''>About company</a></li>
                                <li><a href=''>Company services</a></li>
                                <li><a href=''>Job opportunities</a></li>
                                <li><a href=''>Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col >
                    <div className='copyright'>
                        {/* <div>
                            <img src=""/>
                        </div> */}
                        <div>
                            <p>© 2024 Litho is Proudly Powered by 
                            ThemeZaa</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    )
}
export default Footer
