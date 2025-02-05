import React, { useEffect, useState } from "react";
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


import CommonModal from "../../Components/CommonModal";
import FormComp from "../../Components/FormComp";
import Header from "../../Components/Header";
import { accordionData, services, skillsData } from "./homeData";
import LineText from "../../Components/LineText";
import { IconWithTextData_05 } from "../../Components/IconWithText/IconWithTextData";
import Enroll from "../Enroll";
import BookingForm from "../../Components/BookingForm";
import moment from "moment-timezone";
import axios from "axios";

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

const Page = (props) => {
  const [show, setShow] = useState(false);
  const [mobileNumber,setMobileNumber] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedImage, setSelectedImage] = useState(skillsData[0].imgSrc);
    const [contact, setContact] = useState("");
      const [selectedTime, setSelectedTime] = useState("");
    const [countryCode, setCountryCode] = useState("+1");
    const [countryName, setCountryName] = useState("US");

    const countryCodes = [
      
      { code: "US", dialCode: "+1", timezone: "America/New_York" },
      { code: "UK", dialCode: "+44", timezone: "Europe/London" },
      { code: "IN", dialCode: "+91", timezone: "Asia/Kolkata" },
      { code: "CA", dialCode: "+1", timezone: "America/Toronto" },
      { code: "AU", dialCode: "+61", timezone: "Australia/Sydney" },
    ];

    const Payload = `${countryCode}${contact}`
 
    useEffect(() => {
      const fetchLocation = async () => {
        try {
          const response = await fetch("https://ipapi.co/json/");
          const data = await response.json();
          if (data && data?.country) {
            // console.log(data)
            const foundCountry = countryCodes.find((c) => c.dialCode === data.country_calling_code);
            if (foundCountry) {
              setCountryCode(data?.country_calling_code);
              setCountryName(data?.country);
  
            }
          }
        } catch (error) {
          console.error("Error fetching location:", error);
        }
      };

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          () => fetchLocation(),
          (error) => {
            console.warn("Geolocation permission denied, using IP lookup.");
            fetchLocation();
          }
        );
      } else {
        fetchLocation();
      }
    }, []);


      // useEffect(() => {
      //   const foundCountry = countryCodes.find((c) => c.code === countryCode);
      //   if (foundCountry) {
      //     const localTime = moment().tz(foundCountry.timezone).format("HH:mm");
      //     setSelectedTime(localTime);
      //   }
      // }, [countryCode]);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSkillClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

    const Newsletter  = async () =>{
      setLoading(true);
      setMessage("");
      const requestData = {
        name:" ",
        time:" ",
        contact_number: Payload,
        date: moment(new Date()).format("YYYY-MM-DD"),
      };
      try {
        const response = await axios.post(
          "https://zjttxh7w0j.execute-api.ap-south-1.amazonaws.com/TGFE/TGFE_Enquiry",
          requestData
        );
        setMessage("Your request successfully submitted! We'll get back to you shortly!!");
        setContact(' ')
      } catch (error) { 
        console.error("API Error:", error);
        setMessage("Failed to submit booking. Please try again.");
      } finally {
        setLoading(false);
      }
    }


    

  const TextheadingGredient =
    "bg-gradient-to-l from-[#556fff] via-[#e05fc4] to-[#ff798e] text-gradient -tracking-[.5px] ";
  return (
    <>
      <div className="bg-white" style={props.style}>
        <SideButtons />
        {/* Header Start */}
        <Header />
        <LineText onPress={handleShow} />
        {/* Section Start */}
        <div className="md:flex md:items-center overflow-hidden relative">
          <Parallax
            className="lg-no-parallax bg-cover absolute top-[0px] left-0 md:-top-[30px] w-full h-[100vh]"
            translateY={[-40, 40]}
            style={{
              backgroundImage: `url(./assets/img/AI-is-not.png)`,
            }}
          ></Parallax>
          <div
            className="h-full w-full left-0 top-0 absolute cover-background brightness-50"
            style={{
              backgroundImage: `url(/assets/img/AI-is-not.png)`,
            }}
          ></div>

          <Container className="relative">
            <Row className="full-screen md:h-[650px] justify-center">
              <Col
                lg={12}
                md={6}
                sm={7}
                className="flex flex-col items-center justify-center"
              >
                <h1 className="font-serif text-center font-semibold text-[70px] leading-[90px] text-white drop-shadow -tracking-[4px] mb-[4.5rem] xs:w-[85%] lg:text-[80px] lg:leading-[90px] md:text-[50px] md:leading-[65px] sm:text-[35px] sm:leading-[43px] sm:-tracking-[.5px]">
                  {/* AI is not in the<br/>
                  Future !!<br/>
                  It's happening<br/>
                  NOW !!<br/> */}
                  The most practical way to learn technology On Earth!
                </h1>
                <p className="text-white text-center font-medium">
                  Technology Garage has brought the world's top most gadgets, methodologies, and mechanisms together to make a fun learning experience. Learning pathways are designed to introduce the technical concepts slowly in a play-way methodology.
                </p>
                {/* <p className="mb-5 text-white font-medium">Start your AL journey now and embrace the possibilities !
                </p> */}
                <Buttons
                  onClick={handleShow}
                  ariaLabel="Get started now"
                  // to="/page/contact-classic"
                  className="font-semibold text-[30px] font-serif z-10 uppercase btn-expand rounded md:mb-[15px] hover:text-white"
                  color="#fff"
                  themeColor="#828282"
                  title="Get started"
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
              <span className="text-white absolute font-serif font-semibold tracking-[-.5px] bottom-[25px] w-[100px] h-auto mb-[5px] -rotate-90 origin-[0] hover:text-darkgray">
                scroll
              </span>
            </ScrollTo>
          </div>
        </div>

        {/*start- second_section--- */}
        {/* <section id="about"
          className="py-[160px] overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
            <Container>
              <Row className="text-center">
                <Col md={12}>
                  <div className="text-center">
                    <h2 className={`${TextheadingGredient} heading-4 w-[100%] font-serif font-semibold text-darkgray block mb-0 pr-10 -tracking-[1px] lg:pr-0`}
                  {...{ ...fadeIn, transition: { duration: 0.7, delay: 0.5 } }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                    </h2>
                  </div>
                </Col>
                <Col 
                md={4}
                >
                <div style={{}}>

                </div>
                </Col>
                <Col md={4}>
                asdashd
                </Col>
                <Col md={4}>
                asdashd
                </Col>
                <Col md={4}>
                asdashd
                </Col>
                <Col md={4}>
                asdashd
                </Col>
                <Col md={4}>
                asdashd
                </Col>
              </Row>
            </Container>
        </section> */}
        {/* second_section---end */}
        <section
          className="overflow-hidden py-[120px] lg:py-[90px] sm:py-[80px] bg-black">
          <Container>
            <Row className="md:justify-center xl:justify-center">
              <Col md={12}>
                <m.h2
                  className={`${TextheadingGredient} heading-4 font-serif font-semibold text-darkgray  -tracking-[.5px] text-center`}
                  {...{
                    ...fadeInLeft,
                    transition: { delay: 0.2, duration: 0.6 },
                  }}
                >
                  What We do, We do the Best!
                </m.h2>
                <m.div
                  {...{
                    ...fadeIn,
                    transition: { duration: 0.7, delay: 0.7 },
                  }}
                >
                </m.div>
              </Col>
              <Col lg={4} md={6}>
                <div className="text-center mb-[16px] flex flex-col justify-center items-center">
                  <img src="assets/img/Exposure to Technology .svg" className="img-fluid w-[170px]" alt="" />
                  <h5 className="sm:w-[77%] leading-[24px] text-[15px] font-semibold text-white mb-[10px]">Exposure to Technology</h5>
                  <p className="leading-[24px]">Explore the greatest learning pathways and the
                    latest technologies shaping the world around us
                    Start here and shape the future!
                  </p>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div className="text-center mb-[16px] flex flex-col justify-center items-center">
                  <img src="assets/img/Hands-On Experience to Become the Future You .svg" className="img-fluid w-[170px]" alt="" />
                  <h5 className="sm:w-[77%] leading-[24px] text-[15px] font-semibold text-white mb-[10px]">Hands-On Experience to
                    Become the Future You</h5>
                  <p className="leading-[24px]">Acquire real-world experience to craft the future
                    version of yourself. Begin your journey here and
                    transform your future!
                  </p>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div className="text-center mb-[16px] flex flex-col justify-center items-center">
                  <img src="assets/img/Compete with the Rest of the World .svg" className="img-fluid w-[170px]" alt="" />
                  <h5 className="sm:w-[77%] leading-[24px] text-[15px] font-semibold text-white mb-[10px]">Compete with the Rest of the World</h5>
                  <p className="leading-[24px]">Learning is only half the job done; hands-on experience
                    is what truly completes the journey. Thats's exactly what we do at Technology Garage!
                  </p>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div className="text-center mb-[16px] flex flex-col justify-center items-center">
                  <img src="assets/img/Convert Your Creativity to Implementation  .svg" className="img-fluid w-[170px]" alt="" />
                  <h5 className=" sm:w-[77%] leading-[24px] text-[15px] font-semibold text-white mb-[10px]">Convert Your Creativity to Implementation</h5>
                  <p className=" leading-[22px]">Bring your creative ideas to life by turning them info real-world solutions
                  </p>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div className="text-center mb-[16px] flex flex-col justify-center items-center">
                  <img src="assets/img/Become a Leader in What You Want to Achieve with Technology .svg" className="img-fluid w-[170px]" alt="" />
                  <h5 className=" leading-[24px] text-[15px] font-semibold text-white mb-[10px]">Become a Leader in What You Want to
                    Achieve with Technology</h5>
                  <p className="leading-[24px]">Learning is only half the job done; hands-on experience
                    is what truly completes the journey.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section
          id="about"
          className="py-[120px] lg:py-[90px] sm:py-[80px]"
        >
          <Container>
            <div className=" flex flex-column justify-center items-center">
              <m.h2
                className={`${TextheadingGredient} heading-4 text-center w-[100%] font-serif font-semibold text-darkgray block sm:mb-[10px] md:mb-12 lg:mb-12 xl:mb-12 pr-10 -tracking-[1px] lg:pr-0`}
                {...{ ...fadeIn, transition: { duration: 0.7, delay: 0.5 } }}
              >
                How does it works
              </m.h2>
              <IconWithText
                grid="row-cols-2 row-cols-lg-3 w-[100%] row-cols-md-3 row-cols-sm-3 gap-y-[55px] sm:gap-y-[30px] justify-between"
                theme="icon-with-text-05"
                data={IconWithTextData_05}
                animation={fadeIn}
                animationDelay={0.1}
              />

              <p className="sm:pl-[12px] mt-[55px] sm:mt-[40px] sm:text-left md:text-center xl:text-center ">
                You Will be assigned a dedicated coach who will work closely with you to help you develop a strong foundation
                in technology. This primary coach will not only guide you
                through your learning journey but will also bring in additional expert coaches when needed, ensuring you
                get the specialized support required for your growth.
              </p>
            </div>
            {/* summer-camp-start */}
            {/* <Row className="items-center justify-center mt-[10.5rem] md:mt-28 md:text-center">
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
                  title="Get Start Now"
                />
              </m.div>

            </Row> */}

            {/* summer-camp-end */}
          </Container>
        </section >
        {/* what-we-do-start */}
        {/* <section
          className="py-[120px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px] bg-black">
            <Container>
              <Row className="md:justify-center xl:justify-center">
               <Col md={12}>
               <m.h2
                    className={`${TextheadingGredient} heading-4 font-serif font-semibold text-darkgray  -tracking-[.5px] text-center`}
                    {...{
                      ...fadeInLeft,
                      transition: { delay: 0.2, duration: 0.6 },
                    }}
                  >
                    What We do, We do the Best!
                  </m.h2>
                  <m.div
                    {...{
                      ...fadeIn,
                      transition: { duration: 0.7, delay: 0.7 },
                    }}
                  >
                    <p className="mb-[35px] xl:text-center sm:text-center">
                      Technology Garage is your "one-stop shop" a
                      place where you can dive deep into hands-on
                      experiences, enhance your tech skills, and explore
                      everything from the basics to more advanced
                      techniques, all in one convenient location. Whether
                      you're starting from scratch or leveling up your
                      expertise, our expert coaches and cutting-edge
                      tools are here to guide you every step of the way.
                      Empower yourself today, unlock your full potential,
                      and be ready to shape a brighter, more innovative tomorrow.
                    </p>
                  </m.div>
              </Col>
                <Col lg={4} md={6}>
                  <div className="text-center mb-[16px] flex flex-col justify-center items-center">
                    <img src="assets/img/Exposure to Technology .svg" className="img-fluid w-[170px]" alt="" />
                    <h5 className="sm:w-[77%] leading-[24px] text-[15px] font-semibold text-white mb-[10px]">Exposure to Technology</h5>
                    <p className="leading-[24px]">Explore the greatest learning pathways and the
                      latest technologies shaping the world around us
                      Start here and shape the future!
                    </p>
                  </div>
                </Col>
                <Col lg={4} md={6}>
                  <div className="text-center mb-[16px] flex flex-col justify-center items-center">
                    <img src="assets/img/Hands-On Experience to Become the Future You .svg" className="img-fluid w-[170px]" alt="" />
                    <h5 className="sm:w-[77%] leading-[24px] text-[15px] font-semibold text-white mb-[10px]">Hands-On Experience to
                    Become the Future You</h5>
                    <p className="leading-[24px]">Acquire real-world experience to craft the future
                    version of yourself. Begin your journey here and
                    transform your future!
                    </p>
                  </div>
                </Col>
                <Col lg={4} md={6}>
                  <div className="text-center mb-[16px] flex flex-col justify-center items-center">
                    <img src="assets/img/Compete with the Rest of the World .svg" className="img-fluid w-[170px]" alt="" />
                    <h5 className="sm:w-[77%] leading-[24px] text-[15px] font-semibold text-white mb-[10px]">Compete with the Rest of the World</h5>
                    <p className="leading-[24px]">Learning is only half the job done; hands-on experience
                    is what truly completes the journey. Thats's exactly what we do at Technology Garage!
                    </p>
                  </div>
                </Col>
                <Col lg={4} md={6}>
                  <div className="text-center mb-[16px] flex flex-col justify-center items-center">
                    <img src="assets/img/Convert Your Creativity to Implementation  .svg" className="img-fluid w-[170px]" alt="" />
                    <h5 className=" sm:w-[77%] leading-[24px] text-[15px] font-semibold text-white mb-[10px]">Convert Your Creativity to Implementation</h5>
                    <p className=" leading-[24px]">Bring your creative ideas to life by turning them info real-world solutions
                    </p>
                  </div>
                </Col>
                <Col lg={4} md={6}>
                  <div className="text-center mb-[16px] flex flex-col justify-center items-center">
                    <img src="assets/img/Become a Leader in What You Want to Achieve with Technology .svg" className="img-fluid w-[170px]" alt="" />
                    <h5 className="sm:w-[77%] leading-[24px] text-[15px] font-semibold text-white mb-[10px]">Become a Leader in What You Want to
                    Achieve with Technology</h5>
                    <p className="leading-[24px]">Learning is only half the job done; hands-on experience
                    is what truly completes the journey.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
        </section> */}
        {/* what-we-do-end */}
        {/* hover-custom-card-start */}
        {/* <section className=" overflow-hidden bg-gradient-to-b from-[#fff] via-[#fdfdfd] to-[#f7f7f7] xl:py-[120px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
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
                    {...{
                      ...fadeIn,
                      transition: { duration: 0.7, delay: 0.7 },
                    }}
                  >
                    <p className="mb-[15px]">
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
        </section> */}

        {/* hover-custom-card-end */}
        {/* Section End */}

        {/* Section Start */}
        <section
          id="pricing"
          className="py-[120px] lg:py-[90px] sm:py-[80px] xs:py-[50px] overflow-hidden border-b border-mediumgray bg-black"
        >
          <Container>

            <m.div className="row items-center">
              <Col
                xl={4}
                lg={5}
                className="sm:text-center md:text-center"
              >
                <h2 className={`${TextheadingGredient} heading-4 font-serif font-semibold text-darkgray -tracking-[1px] mb-10`}>
                  Your One - Stop Shop
                </h2>
                <p className="xl:w-[90%] sm:w-full mb-[35px] md:w-[100%] sm:text-left">
                  With this personalized and flexible approch, Technology Garage becomes your
                  "one-stop shope" for exploring and mastering technology. Whether your're just starting
                  or looking to expand your skills, we're here to support you every step of the way.
                </p>
              </Col>
              <Col
                xl={{ span: 7, offset: 1 }}
                lg={7} className="px-0"
              >
                <div>
                  <img
                    src="/assets/img/Your One - Stop Shop.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </Col>

            </m.div>
            <Row className="justify-center ">
              <Col lg={12}>
                <div>
                  <p className="w-[100%] mt-[35px] lg:w-full">
                    Technology Garage is your "one-stop shop" a
                    place where you can dive deep into hands-on
                    experiences, enhance your tech skills, and explore
                    everything from the basics to more advanced
                    techniques, all in one convenient location. Whether
                    you're starting from scratch or leveling up your
                    expertise, our expert coaches and cutting-edge
                    tools are here to guide you every step of the way.
                    Empower yourself today, unlock your full potential,
                    and be ready to shape a brighter, more innovative
                    tomorrow .
                  </p>
                </div>
              </Col>
            </Row>



          </Container>
        </section>

        <section
          id="pricing"
          className="py-[90px] overflow-hidden border-b border-mediumgray pb-0 lg:py-[0px] md:py-[95px] sm:py-[80px] xs:py-[50px]"
        >
          <Container>

            <Row className="pb-[24px]">
              <Col lg={4}
                md={6}


                className="d-flex  mb-5" >
                <div className="border px-3 py-4 rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out bg-white hover:bg-white">
                  <div className="text-center pb-4 flex justify-center">
                    <img src="/assets/img/Basics.svg" className="img-fluid w-[70px]" alt="" />
                  </div>
                  <div className="">
                    <h3 className="text-[15px] leading-[22px] font-serif text-darkgray font-medium mb-3 text-center">
                      Basics of Technology
                    </h3>
                    <p className="text-center leading-8 pt-2">Designed for beginners, this track you from scratch, starting with block-based coding and
                      gradually advancing to more sophisticated skills.
                      Start your journey with the basics and build a solid foundation for the future.</p>
                  </div>
                </div>
              </Col>
              <Col lg={4}
                md={6}

                className="d-flex  mb-5" >
                <div className="border px-3 py-4 rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out bg-white hover:bg-white">
                  <div className="text-center pb-4 flex justify-center">
                    <img src="/assets/img/Learn.svg" className="img-fluid w-[70px]" alt="" />
                  </div>
                  <div className="">
                    <h3 className="text-[15px] leading-[22px] font-serif text-darkgray font-medium mb-3 text-center">
                      Learn and Grow with Artificial Intelligence
                    </h3>
                    <p className="text-center leading-8 pt-2">Dive into the world of Artificial Intelligence and
                      develop the skills needed to understand and work
                      with Al. From machine learning to Generative Al,
                      explore the endless possibilities of Artificial
                      Intelligence and how it's shaping the world.</p>
                  </div>
                </div>
              </Col>
              <Col lg={4}
                md={6}

                className="d-flex  mb-5" >
                <div className="border px-3 py-4 rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out bg-white hover:bg-white">
                  <div className="text-center pb-4 flex justify-center">
                    <img src="/assets/img/Gamified.svg" className="img-fluid w-[70px]" alt="" />
                  </div>
                  <div>
                    <h3 className="text-[15px] leading-[22px] font-serif text-darkgray font-medium mb-3 text-center">
                      Gamified Learning Experience
                    </h3>
                    <p className="text-center leading-8 pt-2">Experience learning like never before with a
                      gamified approach! Earn points as you progress
                      through challenges, and redeem them to unlock
                      and use cutting-edge technology tools. Make
                      learning fun and rewarding!</p>
                  </div>
                </div>
              </Col>
            </Row>
            {/* <m.div className="row items-center" {...fadeIn}>
              <Col
                xl={4}
                lg={5}
                className="md:mb-20 sm:mb-[6.5rem] sm:text-center md:text-center"
              >
                <h2 className={`${TextheadingGredient} heading-4 font-serif font-semibold text-darkgray -tracking-[1px] mb-10`}>
                  Learning Technology Gamified!
                </h2>
                <p className="xl:w-[90%] sm:w-full mb-[25px] md:w-[100%]">
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
            </m.div> */}

          </Container>
        </section>
        {/* studio-setup */}
        {/* <m.section
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
                  <p className="w-[100%] mb-[65px] pr-2  lg:w-full text-center">
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
        </m.section> */}
        {/* Section End */}

        {/* Section Start-certificate */}
        {/* <section style={{
              backgroundImage: `url(/assets/img/Learn-tech-bg2.png)`,
            }} className="py-[120px] overflow-hidden bg-no-repeat bg-center bg-cover sm:py-[100px] xs:py-[60px] bg-gradient-to-r from-[#4e9c8d] via-[#3b7b6d] to-[#3a4b49] text-white">
      <Container>
        <Row className="flex items-center justify-center">

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


         
          </Col>

          </Row>
          <Row className="flex  items-center justify-center">

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

          </Row>
          <Row className="justify-center">

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
    </section> */}
        {/* end-certificate */}
    

        {/* Section End */}
      </div>

      <CommonModal
        bodyClass="bodyModals"
        className="StartModals"
        // ModalBody={<Enroll/>}
        ModalBody={<BookingForm />}
        modalHeading="GETTING STARTED"
        handleClose={handleClose}
        show={show}
        size="md"
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
                  src="/assets/img/Technology Garage Logo - Dark.png"
                  alt="logo"
                  width={180}
                  height={40}
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
              <span className="mb-[25px] block sm:w-full font-semibold text-black text-[24px] md:text-start md:w-4/5 sm:text-start leading-none md:leading-normal">
                Get In Touch

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

<div className="flex">
              <select
                className="p-2 rounded bg-gray-100 text-dark mr-2"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
              >
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.dialCode}>
                    {country.code} {country.dialCode}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className=" p-2 rounded bg-gray-100 text-dark w-full"
                placeholder="Enter Phone Number"
                required
              />
              <button className="flex text-nowrap " disabled={loading} onClick={Newsletter}>
                <span className="p-3 px-[20px] bg-black">{loading?"Submiting..":"Submit"}</span>
              </button>
            </div>
            {message && <p>{message}</p>}
                      {/* <Form className="relative">
                        <Input
                          onChange={(e)=>setMobileNumber(e.traget.values)}
                          showErrorMsg={false}
                          type="number"
                          name="contact"
                          className="border-[1px] border-solid rounded-none bg-transparent small-input text-md m-0 w-full !pr-[50px]"
                          placeholder="Enter your Contact Number"
                        />
                        <button
                          onClick={Newsletter}
                          aria-label="subscribe btn"
                          type="submit"
                          className={`text-xs tracking-[1px] !py-[4px] !px-[18px] top-1/2 translate-y-2/4 uppercase !border-l-0 xs:text-center${isSubmitting ? " loading" : ""
                            }`}
                        >
                          Submit
                        </button>
                      </Form> */}
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

export default Page;
