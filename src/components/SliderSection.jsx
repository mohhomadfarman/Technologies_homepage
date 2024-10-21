import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaBeer } from 'react-icons/fa';
import bgImage from '../images/bg_image.png'


function SliderSection(){

    return(
      <section>
        <Container fluid>
        <Row>
          <Carousel className="p-0" fade pause={false} interval={5000}>
        <Carousel.Item className="bg-overly">
        <img src="https://lithoreact.themezaa.com/assets/img/webp/home-startup-slider-bg-02.webp" alt="l,m" className="img-fluid " />
          <Carousel.Caption className="my_slider_body_text">
            <h3>Combine thinking and technical</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <a href="#" className="my_slider_link">Get Started Now</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="bg-overly">
         <img src="https://lithoreact.themezaa.com/assets/img/webp/home-startup-slider-bg-03.webp" alt="l,m" className="img-fluid" />
          <Carousel.Caption className="my_slider_body_text">
            <h3>Start your online business today</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" className="my_slider_link">Get Started Now</a>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="bg-overly">
        <img src="https://lithoreact.themezaa.com/assets/img/webp/home-startup-slider-bg-01.webp" alt="l,m" className="img-fluid" />
          <Carousel.Caption className="my_slider_body_text">
            <h3>Delivering creative digital products</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <a href="#" className="my_slider_link">Get Started Now</a>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
          </Row>      

       
          <Container className="my-custom-col_body">
        <Row>
          <Col md={4} className=" d-flex justify-content-center">
          <div className="my-custom-col">
          <FaBeer color="#27ae60"/>
            <div>
            <h3>Innovative business</h3>
            <p>Easy to customize</p>
            </div>
          </div>
          </Col>

          <Col md={4} className="d-flex justify-content-center ">
          <div className="my-custom-col">
          <FaBeer color="#27ae60"/>
            <div>
            <h3>Innovative business</h3>
            <p>Easy to customize</p>
            </div>
          </div>
          </Col>

          <Col md={4} className="d-flex justify-content-center ">
          <div className="my-custom-col">
          <FaBeer color="#27ae60"/>
            <div>
            <h3>Innovative business</h3>
            <p>Easy to customize</p>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
      
     
      </Container>
      
     
      
      <div className="bg_first_img">
      <Container>
        <Row className="experince_row-sec">
          <Col md={3}>
          <div className="experince_heading">
            <h1>175+</h1>
            <h5>Worldwide offices</h5>
            <p>Lorem ipsum dolor sit consectetur do eiusmod tempor incididunt</p>
          </div>
          </Col>

          <Col >
          <div className="big_text_body">
            <h1 className="big_text">20</h1>
            <h5>Years of experience</h5>
            
          </div>
          </Col> 
          
          <Col md={3}>
          <div className="experince_heading left">
            <h1>175+</h1>
            <h5>Worldwide offices</h5>
            <p>Lorem ipsum dolor sit consectetur do eiusmod tempor incididunt</p>
          </div>
          </Col>
        </Row>
      </Container>
      </div>
      <Container className="circle-image">
        <Row className="align-items-center justify-content-center">
          <Col md={2}>
          <div className="center_image">
            <img src="https://lithoreact.themezaa.com/assets/img/webp//home-startup-about-img.webp" alt="" className="img-fluid" />
          </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="align-items-start justify-content-center provide_advance-row">
          <Col md={6}>
          <div className="provide_advance">
          <h2>We provide advanced solutions to growin your online business</h2>
          </div>
          </Col>
          <Col md={3}>
          <div className="build-site">
          <h5>Build perfect websites</h5>
          <p>Lorem ipsum dolor consectetur adipiscing elit eiusmod tempor elit eiusmod tempor.</p>
          </div>
          </Col>
          <Col md={3}>
          <div className="build-site">
          <h5>Unique experiences</h5>
          <p>Lorem ipsum dolor consectetur adipiscing elit eiusmod tempor elit eiusmod tempor.</p>
          </div>
          </Col>
        </Row>
      </Container>
      </section>



    )
}

export default SliderSection
