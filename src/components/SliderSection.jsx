import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaBeer } from 'react-icons/fa';
import { BsBook } from "react-icons/bs";
import bgImage from '../images/bg_image.png';
import laptop from '../images/home-startup-business-process.png';
import bgcoffee from '../images/Untitled design.png';
import ProgressBar from 'react-bootstrap/ProgressBar';


function SliderSection(){

    return(
      <section>
        <Container fluid>
        <Row>
          <Carousel className="p-0" fade pause={false} interval={5000}>
        <Carousel.Item className="bg-overly my-inner-carausel">
        <img src="https://lithoreact.themezaa.com/assets/img/webp/home-startup-slider-bg-02.webp" alt="l,m" className="img-fluid " />
          <Carousel.Caption className="my_slider_body_text">
            <h3>Combine thinking and technical</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <a href="#" className="my_slider_link">Get Started Now</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="bg-overly my-inner-carausel">
         <img src="https://lithoreact.themezaa.com/assets/img/webp/home-startup-slider-bg-03.webp" alt="l,m" className="img-fluid" />
          <Carousel.Caption className="my_slider_body_text">
            <h3>Start your online business today</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" className="my_slider_link">Get Started Now</a>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="bg-overly my-inner-carausel">
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

       
          <div className="my-custom-col_body_top">
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
          </div>
      
     
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
      <div className="progress_bar_container">
        <Container>
          <Row>
            <Col md={12}>
              <div className="highly_expertise">
                <h2>What We do, We do the Best!</h2>
                <p>Fun is the core element of our learning process at Technology Garage. The learning experience is totally Gamified and with worlds best gadgets in the studio, we bring the best to our kids.</p>
              </div>
            </Col>
          </Row>
          <div className="amazing_layout_container">
          <Row>
            <Row>
              <Col><div><h2></h2></div></Col>
            </Row>
            <Col md={4} className="d-flex">
            <div className="amazing_layout">
            <div>
            <BsBook color="#2ed47c" size={32}/>
            </div>
              <div className="amazing_layout_text">
                <h3>Robotics</h3>
                <p>Learning starts with zero coding using Lego Spike Kits. Cue in the garage lets you bump up your exploration level with Block coding, JavaScript and more.</p>
              </div>
            </div>
            </Col>
            <Col md={4} className="d-flex">
            <div className="amazing_layout">
            <div >
            <BsBook color="#2ed47c" size={32}/>
            </div>
              <div className="amazing_layout_text">
                <h3>Virtual Reality</h3>
                <p>Learning VR starts with experiencing VR, explore the VR world at the Garage with world's best VR and content. Learn to create your own VR world at our Studio.</p>
              </div>
            </div>
            </Col>
            <Col md={4} className="d-flex">
            <div className="amazing_layout">
            <div>
            <BsBook color="#2ed47c" size={32}/>
            </div>
              <div className="amazing_layout_text">
                <h3>Coding</h3>
                <p>There are no syntax, no books or papers. Our stories teach kids coding. A more inclusive and fun way to learn coding. Try it to believe it!</p>
              </div>
            </div>
            </Col>
            <Col md={4} className="d-flex">
            <div className="amazing_layout">
            <div>
            <BsBook color="#2ed47c" size={32}/>
            </div>
              <div className="amazing_layout_text">
                <h3>Cloud Computing</h3>
                <p>No theory of cloud here. Get hands on with Microsoft Azure, AWS & GCP!</p>
              </div>
            </div>
            </Col>
            <Col md={4} className="d-flex">
            <div className="amazing_layout">
            <div>
            <BsBook color="#2ed47c" size={32}/>
            </div>
              <div className="amazing_layout_text">
                <h3>Artificial Intelligence</h3>
                <p>Enough of hearing the buzz words, get hands on with Microsoft Cognitive Services at our Studio.</p>
              </div>
            </div>
            </Col>
            <Col md={4} className="d-flex">
            <div className="amazing_layout">
            <div>
            <BsBook color="#2ed47c" size={32}/>
            </div>
              <div className="amazing_layout_text">
                <h3>Artificial Intelligence</h3>
                <p>Enough of hearing the buzz words, get hands on with Microsoft Cognitive Services at our Studio.</p>
              </div>
            </div>
            </Col>
          </Row>
          </div>
        </Container>
      </div>
      <div className="coffee_container">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div>
                <img src={bgcoffee} alt="" className="img-fluid" />
              </div>
            </Col>
            <Col md={6}>
              <div className="coffee_text_firt">
                <h2>Hand crafted pixel perfect design</h2>
                <h5>Scientific website optimization</h5>
                <p>Lorem ipsum dolor sit consectetur adipiscing elit sed do eiusmod tempor incididunt.</p>
              </div>
              
              <div className="coffee_text_firt coffee_second">
                <h5>Scientific website optimization</h5>
                <p>Lorem ipsum dolor sit consectetur adipiscing elit sed do eiusmod tempor incididunt.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="business_process_perent overflow-hidden">
      <Container >
        <Row>
          <Col xl={5} lg={6} md={10}>
          <div className="business_body_text">
            <label htmlFor="">Business process</label>
            <h2>Understand and apply the business process</h2>
            <div className="business_body_content">
            <div className="business_body_small">
            <span>1</span>
              <div >
                <h3>Unlimited power customization</h3>
                <p>Lorem ipsum amet consectetur adipiscing do eiusmod tempor incididunt ut labore.</p>
              </div>
            </div>
            </div>
            <div className="business_body_content">
            <div className="business_body_small mt-4 ">
            <span>2</span>
              <div >
                <h3>Unlimited power customization</h3>
                <p>Lorem ipsum amet consectetur adipiscing do eiusmod tempor incididunt ut labore.</p>
              </div>
            </div>
            </div>
            <div className="business_body_content">
            <div className="business_body_small mt-4">
            <span>3</span>
              <div>
                <h3>Unlimited power customization</h3>
                <p>Lorem ipsum amet consectetur adipiscing do eiusmod tempor incididunt ut labore.</p>
              </div>
            </div>
            </div>
          </div>

          </Col>
          <Col className="sidelaptop">
          
            <img src={laptop} alt="" className="img-fluid "/>
          
          </Col>
        </Row>
      </Container>
      </div>
      </section>



    )
}

export default SliderSection
