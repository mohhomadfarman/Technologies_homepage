import React, { useEffect, useState } from 'react';
import { FaCross, FaPlus, FaSave } from 'react-icons/fa';

const topics = [
  {
    id: 'topic1',
    title: 'Basics of Technology',
    description:
      'Start your journey by bridging the gap between you and machines! Begin with black coding, evolve into programming languages and harness the power of cutting-edge cloud tools.',
  },
  {
    id: 'topic2',
    title: 'Get Started with Artificial Intelligence',
    description:
      'Discover the magic of AI! Go beyond just using tools like ChatGPT—build, experiment, and explore Large Language Models (LLMs) to bring your AI dreams to life.',
  },
  {
    id: 'topic3',
    title: 'Become a Pro',
    description:
      'Already tech-savvy? Elevate your skills with advanced programming and AI knowledge. This path is your launchpad to becoming an expert innovator.',
  },
];

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const timeSlots = ['5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];

const TopicSelection = ({ topics, handleChange }) => (
  <div className="radio-title-group top-input">
    {topics.map((topic) => (
      <div className="input-container" key={topic.id}>
        <input
          id={topic.id}
          type="radio"
          name="topic"
          value={topic.title}
          onChange={(e) => handleChange(e.target.value)}
        />
        <div className="radio-title rounded-5 sm:py-4 px-3 py-4">
          <div className="d-flex input-image-main align-items-center gap-2">
            <div className="input-tex">
              <h1 className='text-[20px] sm:text-[18px] fw-semibold mb-0 leading-relaxed mb-3'>{topic.title}</h1>
              <p  className='text-[14px] sm:text-[13px] sm:leading-relaxed  fw-normal mb-0'>{topic.description}</p>
            </div>
          </div>
          <label htmlFor={topic.id}></label>
        </div>
      </div>
    ))}
  </div>
);

const DaySelection = ({ days }) => (
  <div className="radio-title-group time-slot sm:flex-wrap sm:px-3">
    {days.map((day, index) => (
      <div className="input-container" key={index}>
        <input id={`day-${day}`} type="radio" name="day" />
        <div className="radio-title">
          <div className="d-flex input-image-main align-items-center gap-2">
            <div className="input-text">
              <h1>{day}</h1>
            </div>
          </div>
          <label htmlFor={`day-${day}`}></label>
        </div>
      </div>
    ))}
  </div>
);

const TimeSlotSelection = ({ timeSlots }) => (
  <div className="radio-title-group time-slot sunday-timing-flex-2">
    {timeSlots.map((time, index) => (
      <div className="input-container" key={index}>
        <input id={`time-${time}`} type="radio" name="time" />
        <div className="radio-title custom-h">
          <div className="d-flex input-image-main align-items-center gap-2">
            <div className="input-text">
              <h1>{time}</h1>
            </div>
          </div>
          <label htmlFor={`time-${time}`}></label>
        </div>
      </div>
    ))}
  </div>
);

function Enroll() {
  const [step, setStep] = useState(0);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);
  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
  }).format(currentTime);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleChange = (value) => {
    console.log('Selected Topic:', value);
    handleNext();
  };
  const formatExpirationDate = (e) => {
    let value = e.target.value;
    // Remove any non-digit or slash characters
    value = value.replace(/[^0-9/]/g, "");
    // Automatically add a slash after entering the first two digits (month)
    if (value.length === 2 && !value.includes("/")) {
      value = value + "/";
    }
    e.target.value = value;
  };

  const validateAlphabets = (e) => {
    const value = e.target.value;
    e.target.value = value.replace(/[^a-zA-Z\s]/g, ""); // Remove non-alphabetic characters
  };
  
  const validateNumbers = (e) => {
    let value = e.target.value;
    
    // Remove any non-numeric characters
    value = value.replace(/\D/g, "");
  
    // Limit input to a maximum of 3 digits
    if (value.length > 3) {
      value = value.slice(0, 3); // Truncate to the first 3 digits
    }
  
    e.target.value = value;
  };
  
  const validateExpirationDate = (value) => {
    const errorElement = document.getElementById("expiration-error");
    errorElement.classList.add("hidden");
  
    const today = new Date();
    const [month, year] = value.split("/").map((v) => parseInt(v, 10));
    const currentYear = today.getFullYear() % 100; // Get last two digits of the year
    const currentMonth = today.getMonth() + 1; // Months are 0-indexed
  
    if (
      !month ||
      !year ||
      month < 1 ||
      month > 12 ||
      year < currentYear ||
      (year === currentYear && month < currentMonth)
    ) {
      errorElement.classList.remove("hidden");
      return false;
    }
    return true;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const expirationInput = document.getElementById("expirationdate").value;
  
    if (!validateExpirationDate(expirationInput)) {
      alert("Please fix the errors before submitting.");
      return;
    }
  
    alert("Form submitted successfully!");
  };

  return (
    <div>
      {step === 0 && (
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-11">
              <div className="perent-bg">
                <div className="top-heading">
                <h4 className='fs-6 leading-normal'>{formattedTime}</h4>
                  <h1 className='text-[28px] sm:text-[20px]'>Pick any Topic below</h1>
                </div>
                <TopicSelection topics={topics} handleChange={handleChange} />
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="container custom-container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-11">
              <div className="mb-4">
                <div className="selected-garage">
                  <h3>Available Time Slots </h3>
                  
                </div>
                    <div className='d-flex justify-between items-center px-5 mb-3'>
                        <h6 className='text-dark fs-6 fw-medium mb-0'>Select Day</h6>
                        <div className='d-flex items-center gap-3 '>
                        {/* <button className='text-[#25244e] fw-bold text-[12px] flex items-center justify-center gap-2'><span>Cancel</span> <FaPlus style={{rotate:"45deg"}}/></button>
                        <button className='text-[#25244e] fw-bold text-[12px] flex items-center justify-center gap-2'><span>Save</span>  <FaSave/></button> */}
                        </div>

                    </div>
                <div className="monday-time-select">
                  <DaySelection days={days} />
                </div>

                <div className="monday-time-select sunday-timing-flex">
                  <div>
                    <h6>Select Time</h6>
                  </div>

                  <div className='d-flex justify-between items-center w-100 px-5 mb-3'>
                        <h6 className='text-dark fs-6 fw-medium mb-0'>Select Time</h6>
                        <div className='d-flex items-center gap-3 '>
                        {/* <button className='text-[#25244e] fw-bold text-[12px] flex items-center justify-center gap-2'><span>Cancel</span> <FaPlus style={{rotate:"45deg"}}/></button>
                        <button className='text-[#25244e] fw-bold text-[12px] flex items-center justify-center gap-2'><span>Save</span>  <FaSave/></button> */}
                        </div>

                    </div>
                  <TimeSlotSelection timeSlots={timeSlots} />
                  <button type="button" className="contineu-btn" onClick={handleNext}>
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {step === 2 && (
        <>
        <form action="" className="px-8" onSubmit={handleSubmit}>
  <div className="field-container">
    {/* Name Field */}
    <div>
      <label htmlFor="name" className="w-100 text-left">
        Your Name
      </label>
      <input
        type="text"
        id="name"
        className="w-100 p-2 text-[18px] rounded-[12px] mb-3"
        required
        pattern="^[a-zA-Z\s]+$"
        onInput={(e) => validateAlphabets(e)}
        title="Please enter only alphabets (letters and spaces)."
      />
    </div>

    {/* Contact Number Field */}
    <div>
      <label htmlFor="contact" className="w-100 text-left">
        Contact Number
      </label>
      <input
    type="text"
    id="contact"
    className="w-100 p-2 text-[18px] rounded-[12px] mb-3"
    required
    maxLength="10"
    pattern="^\d{1,10}$"
    onInput={(e) => {
      e.target.value = e.target.value.replace(/\D/g, ''); // Allow only numeric characters
    }}
    title="Please enter a valid contact number with up to 10 digits."
  />
    </div>

    {/* Card Number Field */}
    <div>
  <label htmlFor="cardnumber" className="w-100 text-left">
    Card Number
  </label>
  <input
    type="text"
    id="cardnumber"
    className="w-100 p-2 text-[18px] rounded-[12px] mb-3"
    required
    maxLength="16"
    pattern="^\d{1,16}$"
    onInput={(e) => {
      e.target.value = e.target.value.replace(/\D/g, '');
    }}
    title="Please enter only numbers (up to 16 digits)."
  />
    </div>

  </div>

  <div className="flex gap-2">
    {/* Expiration Date Field */}
    <div className="field-container w-100">
    <label htmlFor="expirationdate" className="w-100 text-left">
      Expiration (MM/YY)
    </label>
    <input
      className="w-100 p-2 text-[18px] rounded-[12px] mb-3"
      id="expirationdate"
      type="text"
      placeholder="MM/YY"
      required
      maxLength="5"
      pattern="^(0[1-9]|1[0-2])\/([2-9][0-9])$"
      onInput={(e) => formatExpirationDate(e)}
      onBlur={(e) => validateExpirationDate(e.target.value)}
      title="Enter a valid expiration date in MM/YY format."
    />
    <small id="expiration-error" className="text-red-500 hidden">
      Invalid expiration date. Ensure the format is MM/YY and the date is valid.
    </small>
  </div>


    {/* Security Code Field */}
    <div className="w-100">
      <label htmlFor="securitycode" className="w-100 text-left">
        Security Code
      </label>
      <input
        type="text"
        id="securitycode"
        className="w-100 p-2 text-[18px] rounded-[12px] mb-3"
        required
        pattern="^\d{3,4}$"
        onInput={(e) => validateNumbers(e)}
        title="Enter a valid 3-digit CVV."
      />
    </div>
  </div>

  <button
    type="submit"
    className="bgColor=[#0c2236] text-white px-4 py-2 rounded-md mt-4"
  >
    Submit
  </button>
</form>
        </>
      )
      
      }
    </div>
  );
}

export default Enroll;
