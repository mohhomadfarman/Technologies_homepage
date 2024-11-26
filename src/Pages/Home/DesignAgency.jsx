import React from 'react'
import tourVideo from '../../Assets/img/Tour_of_Technology_Garage_2.mp4';
import Accordion from 'react-bootstrap/Accordion';
// Libraries
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Form, Formik } from 'formik';
import { m, AnimatePresence } from 'framer-motion';
import { Parallax } from "react-scroll-parallax";
import * as Yup from 'yup';
import { Link as ScrollTo } from "react-scroll"

// Components
import Header, { HeaderNav, Menu } from '../../Components/Header/Header'
import { fadeIn, fadeInRight, fadeInLeft } from '../../Functions/GlobalAnimations'
import BlogMasonry from '../../Components/Blogs/BlogMasonry'
import Buttons from '../../Components/Button/Buttons'
import Clients from '../../Components/Clients/Clients'
import IconWithText from '../../Components/IconWithText/IconWithText'
import PricingTable02 from '../../Components/PricingTable/PricingTable02'
import SocialIcons from '../../Components/SocialIcon/SocialIcons'
import { Input } from '../../Components/Form/Form'
import MessageBox from '../../Components/MessageBox/MessageBox'
import CustomModal from '../../Components/CustomModal'
import { Footer } from '../../Components/Footers/Footer'
import SideButtons from "../../Components/SideButtons";
import { resetForm, sendEmail } from "../../Functions/Utilities";

// Data
import { IconWithTextData_05, IconWithTextData_08, IconWithTextData_080 } from '../../Components/IconWithText/IconWithTextData'
import { blogData } from "../../Components/Blogs/BlogData";
import { FilterData } from '../../Components/Portfolio/PortfolioData';
import { FaBeer } from 'react-icons/fa';
import { BsBook, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import Button from 'react-bootstrap/Button';


const FooterSocialIconData = [
    {
        color: "#828282",
        link: "https://www.facebook.com/",
        icon: "fab fa-facebook-f"
    },
    {
        color: "#828282",
        link: "https://dribbble.com/",
        icon: "fab fa-dribbble"
    },
    {
        color: "#828282",
        link: "https://twitter.com/",
        icon: "fab fa-twitter"
    },
    {
        color: "#828282",
        link: "https://www.instagram.com/",
        icon: "fab fa-instagram"
    },
]

const HeaderSocialIconsData = [
    {
        color: "#828282",
        link: "https://www.facebook.com/",
        icon: "fab fa-facebook-f"
    },
    {
        color: "#828282",
        link: "https://www.instagram.com/",
        icon: "fab fa-instagram"
    },
    {
        color: "#828282",
        link: "https://twitter.com/",
        icon: "fab fa-twitter"
    }
]

const PortfolioData = [
    {
        title: "MOTION",
        img: "https://via.placeholder.com/800x800",
        category: ["Branding", "Logo"],
        subtitle: "Identity",
        link: "/portfolio/single-project-page-01",
        double_col: false
    },
    {
        title: "BIOLATOR",
        img: "https://via.placeholder.com/800x1600",
        category: ["Graphics", "Logo"],
        subtitle: "Branding",
        link: "/portfolio/single-project-page-02",
        double_col: false
    },
    {
        title: "OSLANDS",
        img: "https://via.placeholder.com/800x800",
        category: ["Branding", "Photography"],
        subtitle: "Branding",
        link: "/portfolio/single-project-page-03",
        double_col: false
    },
    {
        title: "FINANCIAL",
        img: "https://via.placeholder.com/800x800",
        category: ["Graphics", "Photography"],
        subtitle: "Photography",
        link: "/portfolio/single-project-page-04",
        double_col: false
    },
    {
        title: "DUPONT",
        img: "https://via.placeholder.com/800x800",
        category: ["Branding", "Graphics", "Logo"],
        subtitle: "Branding",
        link: "/portfolio/single-project-page-05",
        double_col: false
    },
    {
        title: "GARDNER",
        img: "https://via.placeholder.com/800x800",
        category: ["Logo", "Photography"],
        subtitle: "Branding",
        link: "/portfolio/single-project-page-01",
        double_col: false
    },
    {
        title: "TRUENORTH",
        img: "https://via.placeholder.com/800x800",
        category: ["Branding", "Graphics", "Photography"],
        subtitle: "Photography",
        link: "/portfolio/single-project-page-02",
        double_col: false
    },

]

const pricingTable = [
    {
        icon: "line-icon-Boy",
        title: "STANDARD",
        price: "$800",
        term: "PER MONTH",
        plans: ['Limited hours', 'Limited projects'],
        buttonTitle: "Get started",
        buttonLink: "/page/pricing-packages",
    },
    {
        icon: "line-icon-Bee",
        title: "ADVANCED",
        price: "$1200",
        term: "PER MONTH",
        plans: ['Unlimited hours', 'Unlimited projects', 'Unlimited variations'],
        buttonTitle: "Get started",
        buttonLink: "/page/pricing-packages",
        popular: {
            isPopular: true
        }
    }
]

const ClientData = [
    {
        img: 'https://via.placeholder.com/232x110'
    },
    {
        img: 'https://via.placeholder.com/232x110'
    },
    {
        img: 'https://via.placeholder.com/232x110'
    },
    {
        img: 'https://via.placeholder.com/232x110'
    },
    {
        img: 'https://via.placeholder.com/232x110'
    },
    {
        img: 'https://via.placeholder.com/232x110'
    },
    {
        img: 'https://via.placeholder.com/232x110'
    },
    {
        img: 'https://via.placeholder.com/232x110'
    },
]

// Filter the blog data category wise
const blogMasonryData = blogData.filter((item) => item.blogType === "masonry").filter(item => item.category.includes("desinagency"));

const DesignagencyPage = (props) => {
    return (
        <>
            <div className="bg-white" style={props.style}>
                <SideButtons />
                {/* Header Start */}
                <Header topSpace={{ md: true }} type="reverse-scroll">
                    <HeaderNav fluid="fluid" theme="light" expand="lg" containerClass="md:p-0" className="py-[0px] px-[35px] md:px-[15px] md:py-[20px] sm:px-0">
                        <Col className="col-5 col-lg-2 ps-lg-0 me-auto me-lg-0">
                            <Link aria-label="header logo" className="flex items-center" to="/">
                                <Navbar.Brand className="inline-block p-0 m-0">
                                    <img className="default-logo" style={{maxHeight:100}} width="200" height="60" loading="lazy" src='/assets/img/garage.png' data-rjs='/assets/img/webp/logo-black@2x.webp' alt='logo' />
                                    <img className="alt-logo" width="111" height="36" loading="lazy" src='/assets/img/garage.png' data-rjs='/assets/img/webp/logo-black@2x.webp' alt='logo' />
                                    <img className="mobile-logo" width="111" height="36" loading="lazy" src='/assets/img/garage.png' data-rjs='/assets/img/webp/logo-black@2x.webp' alt='logo' />
                                </Navbar.Brand>
                            </Link>
                        </Col>
                        <Navbar.Toggle className="md:mr-[17px]">
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>
                        </Navbar.Toggle>
                        <Navbar.Collapse className="justify-center">
                            <Menu {...props} />
                        </Navbar.Collapse>
                        <Col className="col-lg-2 text-end px-lg-0">
                            <div>
                                <a href=""className="py-[8px] px-[20px] font-medium text-[14px] rounded-none font-serif border-black border-2 uppercase text-[white] bg-[#232323] hover:bg-[transparent] hover:text-[#232323] md:mb-[15px]" >Register</a>
                                {/* <Buttons ariaLabel="Pricing packages" to="/page/pricing-packages" className="mt-[20px] font-medium rounded-none font-serif uppercase bg-neutral-900 hover:text-#000 md:mb-[15px]" color="white" size="md" themeColor="white" title="Contact Us" /> */}

                           
                            </div>
                        </Col>
                    </HeaderNav>
                </Header>
                {/* Header End */}

                {/* Section Start */}
                <div className="md:flex md:items-center overflow-hidden relative">
                    <Parallax className="lg-no-parallax bg-cover absolute top-[0px] left-0 md:-top-[30px] w-full h-[100vh]" translateY={[-40, 40]} style={{ backgroundImage: `url(https://via.placeholder.com/1920x1081)` }}></Parallax>
                    <div className="h-full w-full left-0 top-0 absolute cover-background" style={{ backgroundImage: `url('https://via.placeholder.com/1920x1081')` }}></div>
                    
                    <Container className="relative">
                        <Row className="full-screen md:h-[650px] sm:h-[500px]">
                            <Col lg={7} md={6} sm={7} className="flex flex-col items-start justify-center">
                                <h1 className="font-serif font-semibold text-[90px] leading-[95px] text-darkgray -tracking-[4px] mb-[4.5rem] xs:w-[85%] lg:text-[80px] lg:leading-[90px] md:text-[60px] md:leading-[65px] sm:text-[35px] sm:leading-[43px] sm:-tracking-[.5px]">Most practical way to learn technology!</h1>
                                <p className='mb-4'>Finally, kids and parents agree on learning! Admissions and Summer Camp Enrollment now open!</p>
                                <Buttons ariaLabel="Get started now" to="/page/contact-classic" className="font-semibold font-serif z-10 uppercase btn-expand rounded md:mb-[15px] hover:text-darkgray" size="xl" color="#232323" themeColor="#fff" title="Get started now" />
                            </Col>
                        </Row>
                    </Container>
                    <div className="absolute bottom-[30px] w-auto left-0 right-0 z-[1]">
                        <ScrollTo to="about" offset={0} delay={0} spy={true} smooth={true} duration={800} className="section-link block w-[2px] h-[35px] bg-white mx-auto right-0 left-0 absolute cursor-pointer">
                            <span className="text-darkgray absolute font-serif font-semibold tracking-[-.5px] bottom-[25px] w-[100px] h-auto mb-[5px] -rotate-90 origin-[0] hover:text-darkgray">scroll</span>
                        </ScrollTo>
                    </div>
                </div>
                {/* Section End */}

                {/* Section Start */}
                <section id="about" className="py-[160px] overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
                    <Container>
                        <IconWithText grid="row-cols-1 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 gap-y-[50px] justify-center" theme="icon-with-text-05" data={IconWithTextData_05} animation={fadeIn} animationDelay={0.1} />
                        <Row className="items-center justify-center mt-[10.5rem] md:mt-28 md:text-center">
                            
                            <Col lg={5} md={10} className="md:mb-[25px] md:text-center">
                                <m.h2 className="heading-4 w-[100%] font-serif font-semibold text-darkgray block mb-0 pr-10 -tracking-[1px] lg:pr-0" {...{ ...fadeIn, transition: { duration: .7, delay: 0.5 } }}>Our Summer Camp enrollment is now open!</m.h2>
                            </Col>
                            <m.div className="pl-[30px] md:pl-[15px] col-lg-4 col-md-9"  {...{ ...fadeIn, transition: { duration: .7, delay: 0.7 } }}>
                                <p className="w-[100%] mb-[15px] lg:w-full">Technology Garage has brought the world's top most gadgets, methodologies, and mechanisms together to make a fun learning experience. Learning pathways are designed to introduce the technical concepts slowly in a play-way methodology.</p>
                                
                            </m.div>
                            <Col lg={3} className="md:mb-[25px] sm:mb-[15px] lg:px-0 text-center">
                            <Buttons ariaLabel="Get started now" to="/page/contact-classic" className="font-semibold font-serif z-10 uppercase btn-expand rounded md:mb-[15px] hover:text-darkgray" size="xl" color="#232323" themeColor="#828282" title="Get started now" />
                                {/* <m.span className="font-serif font-semibold text-[100px] leading-[95px] text-[#ffcc2e] -tracking-[5px] sm:-tracking-[1.5px] lg:text-[90px] md:text-[70px] sm:text-[45px] sm:leading-none" {...{ ...fadeIn, transition: { duration: .7 } }}>hello<span className="text-darkgray">.</span></m.span> */}
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* Section End */}

                {/* Section Start */}
                {/* <section className="py-[160px] border-t border-mediumgray pb-0 lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
                    <PortfolioBordered
                        title="Amazing work"
                        className="design-agency-portfolio-bordered"
                        grid="grid grid-4col xl-grid-4col lg-grid-2col md-grid-2col sm-grid-2col xs-grid-1col"
                        data={PortfolioData}
                        filterData={FilterData}
                    />
                </section> */}
                {/* Section End */}

                {/* Section Start */}
                <section className="pb-[130px] overflow-hidden bg-gradient-to-b from-[#fff] via-[#fdfdfd] to-[#f7f7f7] lg:py-[90px] md:py-[75px] sm:py-[50px]">
                    <Container>
                        <Row className="items-center justify-between">
                            <Col md={12}>
                            <div className='text-center'>
                            <m.h2 className="heading-4 font-serif font-semibold text-darkgray  -tracking-[.5px] md:text-center" {...{ ...fadeInLeft, transition: { delay: 0.2, duration: 0.6 } }}>What We do, We do the Best!</m.h2>
                            <m.div className=" mb-[5.5rem]"  {...{ ...fadeIn, transition: { duration: .7, delay: 0.7 } }}>
                                <p className="w-[100%] mb-[15px] lg:w-full">Technology Garage has brought the world's top most gadgets, methodologies, and mechanisms together to make a fun learning experience. Learning pathways are designed to introduce the technical concepts slowly in a play-way methodology.</p>
                                
                            </m.div>
                            </div>
                            </Col>
                        
                        </Row>
                        <Row>
            <Col md={4} className="d-flex mt-5">
            <div className="border rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out hover:bg-white">
            <div>
            <icon color="#2ed47c" size={32}/>
            </div>
              <div className="p-12">
              <h3 className="text-[15px] font-serif text-darkgray font-medium m-0 text-center">Robotics</h3>
                <p className='text-center'>Learning starts with zero coding using Lego Spike Kits. Cue in the garage lets you bump up your exploration level with Block coding, JavaScript and more.</p>
              </div>
            </div>
            </Col>
            <Col md={4} className="d-flex mt-5">
            <div className="border rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out hover:bg-white">
            <div >
            <icon color="#2ed47c" size={32}/>
            </div>
              <div className="p-12">
                <h3 className='text-[15px] font-serif text-darkgray font-medium m-0 text-center'>Virtual Reality</h3>
                <p className='text-center'>Learning VR starts with experiencing VR, explore the VR world at the Garage with world's best VR and content. Learn to create your own VR world at our Studio.</p>
              </div>
            </div>
            </Col>
            <Col md={4} className="d-flex mt-5">
            <div className="border rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out hover:bg-white">
            <div>
            <icon color="#2ed47c" size={32}/>
            </div>
              <div className="p-12">
                <h3 className="text-[15px] font-serif text-darkgray font-medium m-0 text-center">Coding</h3>
                <p className='text-center'>There are no syntax, no books or papers. Our stories teach kids coding. A more inclusive and fun way to learn coding. Try it to believe it!</p>
              </div>
            </div>
            </Col>
            <Col md={4} className="d-flex mt-5">
            <div className="border rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out hover:bg-white">
            <div>
            <icon color="#2ed47c" size={32}/>
            </div>
              <div className="p-12">
                <h3 className="text-[15px] font-serif text-darkgray font-medium m-0 text-center">Cloud Computing</h3>
                <p className='text-center'>No theory of cloud here. Get hands on with Microsoft Azure, AWS & GCP!</p>
              </div>
            </div>
            </Col>
            <Col md={4} className="d-flex mt-5">
            <div className="border rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out hover:bg-white">
            <div>
            <icon color="#2ed47c" size={32}/>
            </div>
              <div className="p-12">
                <h3 className="text-[15px] font-serif text-darkgray font-medium m-0 text-center">Artificial Intelligence</h3>
                <p className='text-center '>Enough of hearing the buzz words, get hands on with Microsoft Cognitive Services at our Studio.</p>
              </div>
            </div>
            </Col>
            <Col md={4} className="d-flex mt-5">
            <div className="border rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out hover:bg-white">
            <div>
            <icon color="#2ed47c" size={32}/>
            </div>
              <div className="p-12">
                <h3 className="text-[15px] font-serif text-darkgray font-medium m-0 text-center">Internet of Things (IoT)</h3>
                <p className='text-center'>We promote our kids and learners from Lego sensors to real world sensors. Gather data using Python and trigger specific actions.</p>
              </div>
            </div>
            </Col>
          </Row>
                        {/* <Row>
                            <Col className="text-center mt-28 lg:mt-16">
                                <m.span className="font-serif text-darkgray text-lg text-center" {...fadeIn}>Are you interested in working with us?&nbsp;
                                    <ScrollTo to="pricing" offset={0} delay={0} spy={true} smooth={true} duration={800} className="font-semibold inline-block text-decoration-line-bottom text-darkgray hover:text-darkgray cursor-pointer">Let's started now</ScrollTo>
                                </m.span>
                            </Col>
                        </Row> */}
                    </Container>

                </section>
                {/* Section End */}

                {/* Section Start */}
                <section id="pricing" className="py-[160px] overflow-hidden border-b border-mediumgray pb-0 lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
                    <Container>
                        <m.div className="row items-center" {...fadeIn}>
                            <Col xl={4} lg={5} className="md:mb-20 sm:mb-[6.5rem] sm:text-center">
                                <h2 className="heading-4 font-serif font-semibold text-darkgray -tracking-[1px] mb-10">Learning Technology Gamified!</h2>
                                <p className="w-[90%] sm:w-full mb-[25px]">Kids will like Technology Garage as much as parents do with our gamified approach to teaching technology!</p>
                                <Buttons ariaLabel="Pricing packages" to="/page/pricing-packages" className="mt-[20px] font-medium rounded-none font-serif uppercase btn-transparent hover:text-white md:mb-[15px]" color="#232323" size="lg" themeColor="#232323" title="Contact Us" />
                            </Col>
                            <Col xl={{ span: 6, offset: 2 }} lg={7} className="md:pl-[25px] md:pr-[35px] sm:px-[15px]">
                               <div>
                                <img src="/assets/img/combine.png" className='img-fluid' alt="" />
                               </div>
                            </Col>
                        </m.div>
                        <Row className="items-center justify-center my-40 md:my-28 ">
                            <m.div className="text-right md:mb-20 xs:mb-16 md:text-center col-lg-3 col-md-5 col-sm-6 order-1" {...fadeInLeft}>
                                <i className="fas fa-quote-right text-[28px] block opacity-30 mb-[25px]"></i>
                                <span className="font-serif font-medium text-[24px] leading-[30px] text-darkgray inline-block w-[80%] md:text-xmd md:leading-[22px]">Our devices are from the best of the world!.</span>
                            </m.div>
                            <Col lg={{ span: 6, order: 2 }} md={8} className="p-0 order-3">
                                <div className='d-flex align-center justify-center'>
                                <m.img className="img-fluid rounded-lg"  src="/assets/img/center-image.webp" alt="" {...fadeIn} />
                                </div>
                            </Col>
                            <m.div className="md:mb-20 xs:mb-28 md:text-center col-lg-3 col-md-5 col-sm-6 order-lg-3 order-2" {...fadeInRight}>
                                <i className="fas fa-quote-left text-[28px] block opacity-30 mb-[25px]"></i>
                                <span className="font-serif font-medium text-lg leading-[30px] text-darkgray inline-block w-[80%] md:text-xmd md:leading-[22px]">Including Google, Microsoft, LEGO, Wonder Workshop, and AWS!</span>
                            </m.div>
                        </Row>
                    </Container>
                </section>
                {/* Section End */}

                {/* Section Start */}
                {/* <section className="py-[160px] overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
                    <Container>
                        <Clients grid="row-cols-1 row-cols-sm-2 row-cols-md-4" theme="client-logo-style-06 light" data={ClientData} animation={fadeIn} />
                    </Container>
                </section> */}
                {/* Section End */}

                {/* Section Start */}
                <m.section className="py-[130px] bg-lightgray overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px]" {...fadeIn}>
                    <Container>
                        <Row className="items-center">
                            <Col sm={6}>
                                <h2 className="heading-4 font-serif font-semibold text-darkgray mb-0 -tracking-[1px] xs:text-center">Interesting articles</h2>
                            </Col>
                            <Col sm={6} className="text-right xs:text-center">
                                <Buttons ariaLabel="all articles" to="/blogs/blog-masonry" className="font-medium font-serif uppercase btn-link after:h-[2px] md:mb-[15px] after:bg-darkgray hover:text-darkgray" color="#232323" title="all articles" size="xlg" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="px-sm-0">
                                <BlogMasonry pagination={false} grid="mt-28 md:mt-12 grid grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-double-extra-large" className="design-agency-blog-masonry" data={blogMasonryData} />
                            </Col>
                        </Row>
                    </Container>
                </m.section>
                {/* Section End */}

                {/* Section Start */}
                <section className="py-[160px] overflow-hidden bg-no-repeat bg-right lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
                <Container>
                        <Row>
                            <Col lg={12}>
                            <div className='text-center '>
                            <m.h2 className="heading-4 pl-4  font-serif font-medium text-darkgray -tracking-[1px] inline-block" {...fadeInRight}>Let Our Skills speak for Us</m.h2>
                            <m.div className=""  {...{ ...fadeIn, transition: { duration: .7, delay: 0.7 } }}>
                                <p className="w-[100%] mb-[65px] pr-2 text-start lg:w-full text-center">A unique blend of concepts from the industry is hand picked and created as learning pathways in Technology Garage. Below are the various levels our students can achieve and get certified as they pass through every level.</p>
                                
                            </m.div>
                            </div>
                            </Col>
                            <Col lg={5} md={12}>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                                            <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                culpa qui officia deserunt mollit anim id est laborum.
                                            </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                            <Col lg={7} md={12}>
                            <div>
                                <img src="./assets/img/DNA1.jpg" alt="" className='img-fluid rounded-lg'  />
                            </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="py-[160px] overflow-hidden bg-no-repeat bg-right lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]" style={{ backgroundImage: `url('https://dryycleaner.in/wp-content/uploads/2024/09/row-bgimage-1-1.png')` }}>
                    
                    
                    
                    <Container>
                        <m.div className="row items-center">
                            {/* <m.div className="col-12 col-lg-3 md:mb-16 xs:mb-12" {...fadeInRight}>
                                <m.div className="-ml-[40vw] text-right md:ml-0 md:text-center">
                                    <span className="font-serif pr-8 font-semibold text-[40px] leading-[200px] text-[#ffcc2e] -tracking-[10px] block sm:tracking-[-1px] lg:text-[160px] lg:leading-[160px] lg:pr-0 md:text-[120px] md:leading-[120px] sm:text-[90px] sm:leading-[90px] xs:text-[50px] xs:leading-[50px]">agency</span>
                                </m.div>
                            </m.div> */}
                            <Col lg={5} md={10} className="text-start md:mb-12 md:text-center" >
                                <m.h2 className="heading-4 pl-4 font-serif font-medium text-darkgray mb-0 -tracking-[1px] inline-block md:w-[80%] xs:w-full" {...fadeInRight}>The most practical way to learn technology On Earth!</m.h2>
                            </Col>
                            <Col lg={4} md={9} className="text-left md:mb-12 md:text-center" >
                            <m.div className=""  {...{ ...fadeIn, transition: { duration: .7, delay: 0.7 } }}>
                                <p className="w-[100%] mb-[15px] pr-2 text-start lg:w-full">Technology Garage has brought the world's top most gadgets, methodologies, and mechanisms together to make a fun learning experience. Learning pathways are designed to introduce the technical concepts slowly in a play-way methodology.</p>
                                
                            </m.div>
                            </Col>
                            <m.div className="text-center col-lg-3" {...{ ...fadeIn, transition: { delay: 0.6 } }}>
                                <Buttons ariaLabel="Start a project" to="/page/contact-modern" className="btn-fill btn-fancy font-medium font-serif uppercase rounded-none btn-shadow" size="md" themeColor="#232323" color="#fff" title="Start a project" />
                            </m.div>
                        </m.div>
                    </Container>
                </section>

                <div  className='bg-white z-20 py-14'>
                <Container>
          <Row className="justify-content-center align-items-start">
            <Col md={11}>
              <Row className="justify-content-center align-items-start inner_edite">
              <Col md={12}>
              <div className='text-center'>
                            <m.h2 className="heading-4 font-serif font-semibold text-darkgray  -tracking-[.5px] md:text-center" {...{ ...fadeInLeft, transition: { delay: 0.2, duration: 0.6 } }}>Let's Connect</m.h2>
                            <m.div className=" mb-[5.5rem]"  {...{ ...fadeIn, transition: { duration: .7, delay: 0.7 } }}>
                                <p className="w-[100%] mb-[15px] lg:w-full">Our associates are available over Phone, WhatsApp, Email, in our physical location. Reach us out to elevate your learning experience!</p>
                                
                            </m.div>
                            </div>
              </Col>
              <Col md={12} lg={6}>
                <div className="">
                <div className="">
                <m.h4 className="heading-5 text-[24px] font-serif font-semibold text-darkgray  -tracking-[.5px] md:text-center" {...{ ...fadeIn, transition: { delay: 0.2, duration: 0.6 } }}>Our office info</m.h4>
                <m.h4 className="heading-5 text-[15px] font-serif mb-0 font-semibold text-darkgray  -tracking-[.5px] md:text-center" {...{ ...fadeIn, transition: { delay: 0.2, duration: 0.6 } }}>Headquarters:</m.h4>
              <p className='mb-3 md:text-center' >Aclare Lane, Frisco, Texas <br/>
                  United States Of America<br/>
                  +1 6507660726</p>

                  <m.h4 className="heading-5 text-[15px] font-serif mb-0 font-semibold text-darkgray  -tracking-[.5px] md:text-center" {...{ ...fadeIn, transition: { delay: 0.2, duration: 0.6 } }}>Regional Office:</m.h4>
                  <p className='mb-3 md:text-center'>36/1 Old Agraharam St. Thennur, Trichy<br/>
                    India <br/>+91 7448427243</p>
                    <m.h4 className="heading-5 text-[24px] mb-0 font-serif font-semibold text-darkgray  -tracking-[.5px] md:text-center" {...{ ...fadeIn, transition: { delay: 0.2, duration: 0.6 } }}>Connect with us</m.h4>
            </div>
            <div className='mb-3'>
            <div className="d-flex items-center gap-2 md:justify-center">
              <MdOutlineEmail/>
              <p>admin@technology-garage.com</p>
            
            </div>
            <div className="d-flex gap-2 md:justify-center">
            <a href=""> <span><BsInstagram/></span></a>
            <a href=""> <span><FaFacebookF/></span></a>
            </div>
            </div>
                </div>
            </Col>
            <Col md={12} lg={6}>
            <div className="perent first_side">
            <m.h4 className="heading-5 text-[24px] font-serif font-semibold text-darkgray  -tracking-[.5px] md:text-center" {...{ ...fadeIn, transition: { delay: 0.2, duration: 0.6 } }}>Enroll by giving us a Call/Message</m.h4>
              
            <div>
                  <Row className="mb-3">
                  <div className="mb-3" >
                   <label className='text-[#232323]' my-1>Name</label>
                   <input type="text" className="form-control"  aria-label="First name" />
                 </div>
                   <div controlId="GridEmail">
                      <label className='text-[#232323] my-1'>Email</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3" >
                    <label for="floatingTextarea2" className='text-[#232323] my-1'>Comments</label>
                    <textarea class="form-control"></textarea>
                    
                  </div>
                  </Row>
                  
                  <a href=""className="py-[8px] px-[20px] font-medium text-[13px] rounded-none font-serif border-black border-2 uppercase text-[white] bg-[#232323] hover:bg-[transparent] hover:text-[#232323] md:mb-[15px]" >Submit</a>
                </div>
            </div>
            </Col>
              </Row>
            </Col>
          </Row>
        </Container>
                </div>
                {/* Section End */}
            </div>

            {/* Footer Start */}
            <Footer parallax={{ desktop: true, lg: false }} className="py-[6%] border-t border-mediumgray xs:py-[13%]">
                <Container>
                    <Row>
                        <Col className="xl:text-left md:text-center last:m-0 md:mt-[25px]" lg={{ span: 3, order: 1 }} md={{ span: 12, order: 3 }} xs={{ span: 12, order: 3 }}>
                            <Link aria-label="footer home link" to="/" className="text-slateblue mb-[10px] md:mb-[5px] md:mt-0 inline-block">
                                <img src='/assets/img/garage.png' alt="logo" width={111} height={36} />
                            </Link>
                            <p>© Copyright {new Date().getFullYear()} <a aria-label="footer litho link" href="/" className="underline underline-offset-4 text-black font-medium hover:text-white">Technology Garage</a></p>
                        </Col>
                        <Col lg={{ order: 2 }} md={{ span: 6, order: 1 }} xs={{ span: 12, order: 1 }} className="text-center items-center flex flex-col md:items-start sm:mb-[50px] sm:items-center xs:mb-[30px]">
                            <span className="mb-[25px] block sm:w-full md:text-start md:w-4/5 sm:text-center leading-none md:leading-normal">
                                <span className="text-black font-medium">Newsletter sign-up. </span>
                                Get monthly updates and resources.
                            </span>
                            <div className="form w-[75%] justify-center md:justify-start xs:w-[95%] overflow-hidden">
                                <Formik
                                    initialValues={{ email: '' }}
                                    validationSchema={Yup.object().shape({ email: Yup.string().email("Invalid email.").required("Field is required."), })}
                                    onSubmit={async (values, actions) => {
                                        actions.setSubmitting(true)
                                        const response = await sendEmail(values)
                                        response.status === "success" && resetForm(actions)
                                    }}
                                >
                                    {({ isSubmitting, status }) => (
                                        <div className="relative subscribe-style-05 overflow-hidden">
                                            <Form className="relative">
                                                <Input showErrorMsg={false} type="email" name="email" className="border-[1px] border-solid rounded-none bg-transparent small-input text-md m-0 w-full !pr-[50px]" placeholder="Enter your email address" />
                                                <button aria-label="subscribe btn" type="submit" className={`text-xs tracking-[1px] !py-[4px] !px-[18px] top-1/2 translate-y-2/4 uppercase !border-l-0 xs:text-center${isSubmitting ? " loading" : ""}`}><i className="far fa-envelope text-lg leading-none m-0 mr-[10px] text-black xs:mr-0"></i></button>
                                            </Form>
                                            <AnimatePresence>
                                                {status && <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-[15px] w-full"><MessageBox className="rounded-[4px] text-md py-[10px] px-[22px]" theme="message-box01" variant="success" message="Your message has been sent successfully subscribed to our email list!" /></m.div>}
                                            </AnimatePresence>
                                        </div>
                                    )}
                                </Formik>
                            </div>
                        </Col>
                        <Col className="text-center md:text-right sm:mb-[10px]" lg={{ span: 3, order: 3 }} md={{ span: 6, order: 2 }} xs={{ span: 12, order: 2 }} >
                            <span className="mb-[15px] block text-right sm:text-center">Connect with social</span>
                            <SocialIcons theme="social-icon-style-01" className="justify-end sm:justify-center" size="xs" iconColor="dark" data={FooterSocialIconData} />
                        </Col>
                    </Row>
                </Container>
            </Footer>
            {/* Footer End */}

             
        </>
    )
}

export default DesignagencyPage
