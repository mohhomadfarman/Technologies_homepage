import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "./style.css";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import { m, AnimatePresence } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import * as Yup from "yup";
import { Link as ScrollTo } from "react-scroll";

import {
  fadeIn,
  fadeInRight,
  fadeInLeft,
} from "../../Functions/GlobalAnimations";
import Buttons from "../../Components/Button/Buttons";
import IconWithText from "../../Components/IconWithText/IconWithText";
import SocialIcons from "../../Components/SocialIcon/SocialIcons";
import { Input } from "../../Components/Form/Form";
import MessageBox from "../../Components/MessageBox/MessageBox";
import { Footer } from "../../Components/Footers/Footer";
import SideButtons from "../../Components/SideButtons";
import { resetForm, sendEmail } from "../../Functions/Utilities";

import { IconWithTextData_05 } from "../../Components/IconWithText/IconWithTextData";

import CommonModal from "../../Components/CommonModal";
import FormComp from "../../Components/FormComp";
import Header from "../../Components/Header";
import { accordionData, services, skillsData } from "./homeData";
import LineText from "../../Components/LineText";

const FooterSocialIconData = [
  {
    color: "#828282",
    link: "https://www.facebook.com/",
    icon: "fab fa-facebook-f",
  },
  {
    color: "#828282",
    link: "https://dribbble.com/",
    icon: "fab fa-dribbble",
  },
  {
    color: "#828282",
    link: "https://twitter.com/",
    icon: "fab fa-twitter",
  },
  {
    color: "#828282",
    link: "https://www.instagram.com/",
    icon: "fab fa-instagram",
  },
];

const DesignagencyPage = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedImage, setSelectedImage] = useState(skillsData[0].imgSrc);

  const handleSkillClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const TextheadingGredient =
    "bg-gradient-to-l from-[#556fff] via-[#e05fc4] to-[#ff798e] text-gradient -tracking-[.5px] ";
  return (
    <>
      <div className="bg-white" style={props.style}>
        <SideButtons />
        {/* Header Start */}
        <Header />
          <LineText onPress={handleShow}/>
        {/* Section Start */}
        <div className="md:flex md:items-center overflow-hidden relative">
          <Parallax
            className="lg-no-parallax bg-cover absolute top-[0px] left-0 md:-top-[30px] w-full h-[100vh]"
            translateY={[-40, 40]}
            style={{
              backgroundImage: `url(/assets/img/image.png)`,
            }}
          ></Parallax>
          <div
            className="h-full w-full left-0 top-0 absolute cover-background brightness-50"
            style={{
              backgroundImage: `url(/assets/img/image.png)`,
            }}
          ></div>

          <Container className="relative">
            <Row className="full-screen md:h-[650px] sm:h-[500px]">
              <Col
                lg={7}
                md={6}
                sm={7}
                className="flex flex-col items-start justify-center"
              >
                <h1 className="font-serif font-semibold text-[90px] leading-[95px] text-white drop-shadow -tracking-[4px] mb-[4.5rem] xs:w-[85%] lg:text-[80px] lg:leading-[90px] md:text-[60px] md:leading-[65px] sm:text-[35px] sm:leading-[43px] sm:-tracking-[.5px]">
                  Most practical way to learn technology!
                </h1>
                <p className="mb-4 text-white">
                  Finally, kids and parents agree on learning! Admissions and
                  Summer Camp Enrollment now open!
                </p>
                <Buttons
                  ariaLabel="Get started now"
                  to="/page/contact-classic"
                  className="font-semibold font-serif z-10 uppercase btn-expand rounded md:mb-[15px] hover:text-white"
                  size="xl"
                  color="#fff"
                  themeColor="black"
                  title="Get started now"
                />
              </Col>
            </Row>
          </Container>
          <div className="absolute bottom-[30px] w-auto left-0 right-0 z-[1]">
            <ScrollTo
              to="about"
              offset={0}
              delay={0}
              spy={true}
              smooth={true}
              duration={800}
              className="section-link block w-[2px] h-[35px] bg-white mx-auto right-0 left-0 absolute cursor-pointer"
            >
              <span className="text-darkgray absolute font-serif font-semibold tracking-[-.5px] bottom-[25px] w-[100px] h-auto mb-[5px] -rotate-90 origin-[0] hover:text-darkgray">
                scroll
              </span>
            </ScrollTo>
          </div>
        </div>

        <section
          id="about"
          className="py-[160px] overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]"
        >
          <Container>
            <IconWithText
              grid="row-cols-1 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 gap-y-[50px] justify-center"
              theme="icon-with-text-05"
              data={IconWithTextData_05}
              animation={fadeIn}
              animationDelay={0.1}
            />
            <Row className="items-center justify-center mt-[10.5rem] md:mt-28 md:text-center">
              <Col lg={5} md={10} className="md:mb-[25px] md:text-center">
                <m.h2
                  className={`${TextheadingGredient} heading-4 w-[100%] font-serif font-semibold text-darkgray block mb-0 pr-10 -tracking-[1px] lg:pr-0`}
                  {...{ ...fadeIn, transition: { duration: 0.7, delay: 0.5 } }}
                >
                  Our Summer Camp enrollment is now open!
                </m.h2>
              </Col>
              <m.div
                className="pl-[30px] md:pl-[15px] col-lg-4 col-md-9"
                {...{ ...fadeIn, transition: { duration: 0.7, delay: 0.7 } }}
              >
                <p className="w-[100%] mb-[15px] lg:w-full">
                  Technology Garage has brought the world's top most gadgets,
                  methodologies, and mechanisms together to make a fun learning
                  experience. Learning pathways are designed to introduce the
                  technical concepts slowly in a play-way methodology.
                </p>
              </m.div>
              <Col
                lg={3}
                className="md:mb-[25px] sm:mb-[15px] lg:px-0 text-center"
              >
                <Buttons
                  ariaLabel="Get started now"
                  to="/page/contact-classic"
                  className="font-semibold font-serif z-10 uppercase btn-expand rounded md:mb-[15px] hover:text-darkgray"
                  size="xl"
                  color="#232323"
                  themeColor="#828282"
                  title="Get started now"
                />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="pb-[130px] overflow-hidden bg-gradient-to-b from-[#fff] via-[#fdfdfd] to-[#f7f7f7] lg:py-[90px] md:py-[75px] sm:py-[50px]">
          <Container>
            <Row className="items-center justify-between">
              <Col md={12}>
                <div className="text-center">
                  <m.h2
                    className={`${TextheadingGredient} heading-4 font-serif font-semibold text-darkgray  -tracking-[.5px] md:text-center`}
                    {...{
                      ...fadeInLeft,
                      transition: { delay: 0.2, duration: 0.6 },
                    }}
                  >
                    What We do, We do the Best!
                  </m.h2>
                  <m.div
                    className=" mb-[5.5rem]"
                    {...{
                      ...fadeIn,
                      transition: { duration: 0.7, delay: 0.7 },
                    }}
                  >
                    <p className="w-[100%] mb-[15px] lg:w-full">
                      Technology Garage has brought the world's top most
                      gadgets, methodologies, and mechanisms together to make a
                      fun learning experience. Learning pathways are designed to
                      introduce the technical concepts slowly in a play-way
                      methodology.
                    </p>
                  </m.div>
                </div>
              </Col>
            </Row>
            <Row>
            {services.map((service, index) => (
          <Col md={4} className="d-flex mt-5" key={index}>
            <div className="border rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out hover:bg-white">
              <div className="text-center py-3 flex justify-center">{service.icon}</div>
              <div className="p-12 pt-0 pb-10">
                <h3 className="text-[15px] font-serif text-darkgray font-medium m-0 text-center">
                  {service.title}
                </h3>
                <p className="text-center">{service.description}</p>
              </div>
            </div>
          </Col>
        ))}
            </Row>
          </Container>
        </section>
        {/* Section End */}

        {/* Section Start */}
        <section
          id="pricing"
          className="py-[160px] overflow-hidden border-b border-mediumgray pb-0 lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]"
        >
          <Container>
            <m.div className="row items-center" {...fadeIn}>
              <Col
                xl={4}
                lg={5}
                className="md:mb-20 sm:mb-[6.5rem] sm:text-center"
              >
                <h2 className={`${TextheadingGredient} heading-4 font-serif font-semibold text-darkgray -tracking-[1px] mb-10`}>
                  Learning Technology Gamified!
                </h2>
                <p className="w-[90%] sm:w-full mb-[25px]">
                  Kids will like Technology Garage as much as parents do with
                  our gamified approach to teaching technology!
                </p>
                <Buttons
                  ariaLabel="Pricing packages"
                  to="/page/pricing-packages"
                  className="mt-[20px] font-medium rounded-none font-serif uppercase btn-transparent hover:text-white md:mb-[15px]"
                  color="#232323"
                  size="lg"
                  themeColor="#232323"
                  title="Contact Us"
                />
              </Col>
              <Col
                xl={{ span: 6, offset: 2 }}
                lg={7}
                className="md:pl-[25px] md:pr-[35px] sm:px-[15px]"
              >
                <div>
                  <img
                    src="/assets/img/combine.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </Col>
            </m.div>
            <Row className="items-center justify-center  mt-[100px] ">
              <m.div
                className="text-right md:mb-20 xs:mb-16 md:text-center col-lg-3 col-md-5 col-sm-6 order-1"
                {...fadeInLeft}
              >
                <i className="fas fa-quote-right text-[28px] block opacity-30 mb-[25px]"></i>
                <span className="font-serif font-medium text-[24px] leading-[30px] text-darkgray inline-block w-[80%] md:text-xmd md:leading-[22px]">
                  Our devices are from the best of the world!.
                </span>
              </m.div>
              <Col lg={{ span: 6, order: 2 }} md={8} className="p-0 order-3">
                <div className="d-flex align-center justify-center">
                  <m.img
                    className="img-fluid rounded-lg border-1 "
                    src="https://lithoreact.themezaa.com/assets/img/webp/home-design-agency-img-transparent-02.webp"
                    alt=""
                    {...fadeIn}
                  />
                </div>
              </Col>
              <m.div
                className="md:mb-20 xs:mb-28 md:text-center col-lg-3 col-md-5 col-sm-6 order-lg-3 order-2"
                {...fadeInRight}
              >
                <i className="fas fa-quote-left text-[28px] block opacity-30 mb-[25px]"></i>
                <span className="font-serif font-medium text-lg leading-[30px] text-darkgray inline-block w-[80%] md:text-xmd md:leading-[22px]">
                  Including Google, Microsoft, LEGO, Wonder Workshop, and AWS!
                </span>
              </m.div>
            </Row>
          </Container>
        </section>

        <m.section
          className="py-[130px] bg-lightgray overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px]"
          {...fadeIn}
        >
          <Container>
            <Row className="items-center">
              <Col>
                <h2 className={`${TextheadingGredient} heading-4 font-serif font-semibold text-darkgray -tracking-[1px] text-center`}>
                  Our Studio Setup
                </h2>
                <m.div
                  className=""
                  {...{ ...fadeIn, transition: { duration: 0.7, delay: 0.7 } }}
                >
                  <p className="w-[100%] mb-[65px] pr-2 text-start lg:w-full text-center">
                    A unique blend of concepts from the industry is hand picked
                    and created as learning pathways in Technology Garage. Below
                    are the various levels our students can achieve and get
                    certified as they pass through every level.
                  </p>
                </m.div>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={4} lg={4}>
                <div>
                  <img src="./assets/img/SAT_1.jpeg" alt="" />
                </div>
              </Col>
              <Col sm={12} md={4} lg={4}>
                <div>
                  <img src="./assets/img/SAT_2.jpeg" alt="" />
                </div>
              </Col>
              <Col sm={12} md={4} lg={4}>
                <div>
                  <img src="./assets/img/SAT_3.jpeg" alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </m.section>
        {/* Section End */}

        {/* Section Start */}
        <section className="py-[120px] sm:py-[100px] xs:py-[60px] bg-gradient-to-r from-[#4e9c8d] via-[#3b7b6d] to-[#3a4b49] text-white">
      <Container>
        <Row className="flex items-center justify-center">
          {/* Left Section */}
          <Col lg={12} md={12} className="text-center lg:text-left">
            <m.h2
              className="text-5xl font-bold font-serif text-white mb-8"
              {...fadeInRight}
            >
              Let our skills speak for us
            </m.h2>
            <m.p
              className="text-lg text-opacity-90 mb-12"
              {...{
                ...fadeIn,
                transition: { duration: 0.7, delay: 0.7 },
              }}
            >
              A unique blend of concepts from the industry is hand-picked and
              created as learning pathways in Technology Garage. Below are the
              various levels our students can achieve and get certified as they
              pass through every level.
            </m.p>

            {/* Skill Cards */}
         
          </Col>

          </Row>
          <Row className="flex  items-center justify-center">
          {/* <div className="flex flex-wrap justify-start gap-6"> */}
              {skillsData.map((item, index) => (
             <Col lg={4} md={6} className="mt-8 sm:mt-0 flex">
                <div
                  key={index}
                  className="w-full w-100 h-100  min-h-[250px] sm:w-[45%] lg:w-[30%] p-6 bg-white rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out cursor-pointer"
                  onClick={() => handleSkillClick(item.imgSrc)}
                >
                  <h3 className="text-lg text-start font-semibold text-darkgray mb-3">{item.title}</h3>
                  <p className="text-base text-start text-[#828282]">{item.content}</p>
                </div>
                </Col>
              ))}
            {/* </div> */}
          </Row>
          <Row className="justify-center">
          {/* Right Section (Image) */}
          <Col lg={8} md={12} className="mt-8 sm:mt-0">
            <div className="relative">
              <img
                src={selectedImage}
                alt="Selected Skill"
                className="w-full h-auto rounded-lg shadow-lg transition-all duration-700 ease-in-out transform hover:scale-105"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
        <section
          className="py-[160px] overflow-hidden bg-no-repeat bg-right lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]"
          style={{
            backgroundImage: `url('https://dryycleaner.in/wp-content/uploads/2024/09/row-bgimage-1-1.png')`,
          }}
        >
          <Container>
            <m.div className="row items-center">
              <Col
                lg={5}
                md={10}
                className="text-start md:mb-12 md:text-center"
              >
                <m.h2
                  className={`${TextheadingGredient} heading-4 pl-4 font-serif font-medium text-darkgray mb-0 -tracking-[1px] inline-block md:w-[80%] xs:w-full`}
                  {...fadeInRight}
                >
                  The most practical way to learn technology On Earth!
                </m.h2>
              </Col>
              <Col lg={4} md={9} className="text-left md:mb-12 md:text-center">
                <m.div
                  className=""
                  {...{ ...fadeIn, transition: { duration: 0.7, delay: 0.7 } }}
                >
                  <p className="w-[100%] mb-[15px] pr-2 text-start lg:w-full">
                    Technology Garage has brought the world's top most gadgets,
                    methodologies, and mechanisms together to make a fun
                    learning experience. Learning pathways are designed to
                    introduce the technical concepts slowly in a play-way
                    methodology.
                  </p>
                </m.div>
              </Col>
              <m.div
                className="text-center col-lg-3"
                {...{ ...fadeIn, transition: { delay: 0.6 } }}
              >
                <Buttons
                  ariaLabel="Start a project"
                  to="/page/contact-modern"
                  className="btn-fill btn-fancy font-medium font-serif uppercase rounded-none btn-shadow"
                  size="md"
                  themeColor="#232323"
                  color="#fff"
                  title="Start a project"
                />
              </m.div>
            </m.div>
          </Container>
        </section>

        {/* Section End */}
      </div>

      <CommonModal
        bodyClass="bodyModals"
        className="StartModals"
        ModalBody={<FormComp modaleClose={handleClose} />}
        modalHeading="GETTING STARTED"
        handleClose={handleClose}
        show={show}
        size="xl"
      />
      {/* Footer Start */}
      <Footer
        parallax={{ desktop: true, lg: false }}
        className="py-[6%] border-t border-mediumgray xs:py-[13%]"
      >
        <Container>
          <Row>
            <Col
              className="xl:text-left md:text-center last:m-0 md:mt-[25px]"
              lg={{ span: 3, order: 1 }}
              md={{ span: 12, order: 3 }}
              xs={{ span: 12, order: 3 }}
            >
              <Link
                aria-label="footer home link"
                to="/"
                className="text-slateblue mb-[10px] md:mb-[5px] md:mt-0 inline-block"
              >
                <img
                  src="/assets/img/garage.png"
                  alt="logo"
                  width={111}
                  height={36}
                />
              </Link>
              <p>
                © Copyright {new Date().getFullYear()}{" "}
                <a
                  aria-label="footer litho link"
                  href="/"
                  className="underline underline-offset-4 text-black font-medium hover:text-white"
                >
                  Technology Garage
                </a>
              </p>
            </Col>
            <Col
              lg={{ order: 2 }}
              md={{ span: 6, order: 1 }}
              xs={{ span: 12, order: 1 }}
              className="text-center items-center flex flex-col md:items-start sm:mb-[50px] sm:items-center xs:mb-[30px]"
            >
              <span className="mb-[25px] block sm:w-full md:text-start md:w-4/5 sm:text-center leading-none md:leading-normal">
                <span className="text-black font-medium">
                  Newsletter sign-up.{" "}
                </span>
                Get monthly updates and resources.
              </span>
              <div className="form w-[75%] justify-center md:justify-start xs:w-[95%] overflow-hidden">
                <Formik
                  initialValues={{ email: "" }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string()
                      .email("Invalid email.")
                      .required("Field is required."),
                  })}
                  onSubmit={async (values, actions) => {
                    actions.setSubmitting(true);
                    const response = await sendEmail(values);
                    response.status === "success" && resetForm(actions);
                  }}
                >
                  {({ isSubmitting, status }) => (
                    <div className="relative subscribe-style-05 overflow-hidden">
                      <Form className="relative">
                        <Input
                          showErrorMsg={false}
                          type="email"
                          name="email"
                          className="border-[1px] border-solid rounded-none bg-transparent small-input text-md m-0 w-full !pr-[50px]"
                          placeholder="Enter your email address"
                        />
                        <button
                          aria-label="subscribe btn"
                          type="submit"
                          className={`text-xs tracking-[1px] !py-[4px] !px-[18px] top-1/2 translate-y-2/4 uppercase !border-l-0 xs:text-center${
                            isSubmitting ? " loading" : ""
                          }`}
                        >
                          <i className="far fa-envelope text-lg leading-none m-0 mr-[10px] text-black xs:mr-0"></i>
                        </button>
                      </Form>
                      <AnimatePresence>
                        {status && (
                          <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="mt-[15px] w-full"
                          >
                            <MessageBox
                              className="rounded-[4px] text-md py-[10px] px-[22px]"
                              theme="message-box01"
                              variant="success"
                              message="Your message has been sent successfully subscribed to our email list!"
                            />
                          </m.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </Formik>
              </div>
            </Col>
            <Col
              className="text-center md:text-right sm:mb-[10px]"
              lg={{ span: 3, order: 3 }}
              md={{ span: 6, order: 2 }}
              xs={{ span: 12, order: 2 }}
            >
              <span className="mb-[15px] block text-right sm:text-center">
                Connect with social
              </span>
              <SocialIcons
                theme="social-icon-style-01"
                className="justify-end sm:justify-center"
                size="xs"
                iconColor="dark"
                data={FooterSocialIconData}
              />
            </Col>
          </Row>
        </Container>
      </Footer>
      {/* Footer End */}
    </>
  );
};

export default DesignagencyPage;
