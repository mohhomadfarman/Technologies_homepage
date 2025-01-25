import React, { useEffect, useState } from 'react';
import { FaPlus, FaSave } from 'react-icons/fa';

// Constants moved to separate objects but maintaining original structure
const FORM_DATA = {
  topics: [
    {
      id: 'topic1',
      title: 'Basics of Technology',
      description: 'Start your journey by bridging the gap between you and machines! Begin with black coding, evolve into programming languages and harness the power of cutting-edge cloud tools.',
    },
    {
      id: 'topic2',
      title: 'Get Started with Artificial Intelligence',
      description: 'Discover the magic of AI! Go beyond just using tools like ChatGPT—build, experiment, and explore Large Language Models (LLMs) to bring your AI dreams to life.',
    },
    {
      id: 'topic3',
      title: 'Become a Pro',
      description: 'Already tech-savvy? Elevate your skills with advanced programming and AI knowledge. This path is your launchpad to becoming an expert innovator.',
    },
  ],
  days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  timeSlots: ['5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM']
};

// Reusable components maintaining original styling
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
              <h1 className="text-[20px] sm:text-[18px] fw-semibold mb-0 leading-relaxed mb-3">
                {topic.title}
              </h1>
              <p className="text-[14px] sm:text-[13px] sm:leading-relaxed fw-normal mb-0">
                {topic.description}
              </p>
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

// Input validation utilities
const InputValidation = {
  alphabetsOnly: (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
  },
  numbersOnly: (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
  },
  formatExpirationDate: (e) => {
    let value = e.target.value.replace(/[^0-9/]/g, "");
    if (value.length === 2 && !value.includes("/")) {
      value += "/";
    }
    e.target.value = value;
  },
  validateExpirationDate: (value) => {
    if (!value) return false;
    
    const [month, year] = value.split("/").map(v => parseInt(v, 10));
    const today = new Date();
    const currentYear = today.getFullYear() % 100;
    const currentMonth = today.getMonth() + 1;
    
    return month >= 1 && month <= 12 && 
           (year > currentYear || (year === currentYear && month >= currentMonth));
  }
};

function Enroll() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    topic: '',
    studentInfo: {},
    paymentInfo: {}
  });
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
  }).format(currentTime);

  const handleNext = () => setStep(step + 1);

  const handleTopicChange = (value) => {
    setFormData(prev => ({ ...prev, topic: value }));
    handleNext();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const expirationInput = document.getElementById("expirationdate")?.value;

    if (!InputValidation.validateExpirationDate(expirationInput)) {
      alert("Please enter a valid expiration date.");
      return;
    }

    console.log('Form submitted:', formData);
    alert("Form submitted successfully!");
  };


  const backNavigation = () => {
    setStep(step - 1);
  }
  return (
    <form onSubmit={handleSubmit} className="px-8">
      <div>
        {step === 0 && (
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-11">
                <div className="perent-bg">
                  <div className="top-heading">
                    <h4 className="fs-6 leading-normal">{formattedTime}</h4>
                    <h1 className="text-[28px] sm:text-[20px]">Pick any Topic below</h1>
                  </div>
                  <TopicSelection topics={FORM_DATA.topics} handleChange={handleTopicChange} />
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
                    <h3>Available Time Slots</h3>
                  </div>
                  <div className="d-flex justify-between items-center px-5 mb-3">
                    <h6 className="text-dark fs-6 fw-medium mb-0">Select Day</h6>
                  </div>
                  <div className="monday-time-select">
                    <DaySelection days={FORM_DATA.days} />
                  </div>
                  <div className="monday-time-select sunday-timing-flex">
                    <div>
                      <h6>Select Time</h6>
                    </div>
                    <div className="d-flex justify-between items-center w-100 px-5 mb-3">
                      <h6 className="text-dark fs-6 fw-medium mb-0">Select Time</h6>
                    </div>
                    <TimeSlotSelection timeSlots={FORM_DATA.timeSlots} />
                    <button
                        type="button"
                        className="bg-gradient-to-l from-[#556fff] via-[#e05fc4] to-[#ff798e]  -tracking-[.5px]  text-white px-4 py-2 rounded-md mt-4"
                        onClick={handleNext}
                      >
                        Save & Continue
                      </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <>
            <div className="field-container">
              <div>
                <label htmlFor="name" className="w-100 text-left">
                  Student name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-100 p-2 text-[18px] rounded-[12px] mb-3"
                  required
                  onInput={InputValidation.alphabetsOnly}
                />
              </div>
              <div className="d-flex justify-start gap-3">
                <div className="d-flex flex-column w-50">
                  <label htmlFor="age" className="w-100 text-left">
                    Age
                  </label>
                  <input
                    type="text"
                    id="age"
                    className="w-100 p-2 text-[18px] rounded-[12px] mb-3"
                    required
                  />
                </div>
                <div className="d-flex flex-column w-50">
                  <label htmlFor="grade" className="w-100 text-left">
                    Grade
                  </label>
                  <input
                    type="text"
                    id="grade"
                    className="w-100 p-2 text-[18px] rounded-[12px] mb-3"
                    required
                  />
                </div>
              </div>
              <div className="d-flex justify-start gap-3">
                <div className="d-flex flex-column w-50">
                  <label htmlFor="parentName" className="w-100 text-left">
                    Parents name
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    className="w-100 p-2 text-[18px] rounded-[12px] mb-3"
                    required
                    onInput={InputValidation.alphabetsOnly}
                  />
                </div>
                <div className="d-flex flex-column w-50">
                  <label htmlFor="parentNumnber" className="w-100 text-left">
                    Parents Number
                  </label>
                  <input
                    type="text"
                    id="parentNumnber"
                    className="w-100 p-2 text-[18px] rounded-[12px] mb-3"
                    required
                    onInput={InputValidation.alphabetsOnly}
                  />
                </div>
          
              </div>
              <div className="d-flex justify-start gap-3">
              <div className="d-flex flex-column w-100">
                  <label htmlFor="email" className="w-100 text-left">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-100 p-2 text-[18px] rounded-[12px] mb-3"
                    required
                  />
                </div>
           
              </div>
              
            </div>
           <div className='d-flex justify-between'>

           <button
              type="button"
              className="text-white bg-slate-500 px-4 py-2 rounded-md mt-4"
              onClick={backNavigation}
            >
             Back 
            </button>
            <button
              type="button"
              className="bg-gradient-to-l from-[#556fff] via-[#e05fc4] to-[#ff798e]  -tracking-[.5px]  text-white px-4 py-2 rounded-md mt-4"
              onClick={handleNext}
            >
              Save & Continue
            </button>
           </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className="field-container">
              <div>
                <label htmlFor="cardName" className="w-100 text-left">
                  Your Name
                </label>
                <input
                  type="text"
                  id="cardName"
                  className="w-100 p-2 text-[18px] rounded-[12px] mb-3"
                  required
                  onInput={InputValidation.alphabetsOnly}
                />
              </div>
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
                  onInput={InputValidation.numbersOnly}
                />
              </div>
            </div>

            <div className="flex gap-2">
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
                  onInput={InputValidation.formatExpirationDate}
                />
              </div>
              <div className="w-100">
                <label htmlFor="securitycode" className="w-100 text-left">
                  Security Code
                </label>
                <input
                  type="text"
                  id="securitycode"
                  className="w-100 p-2 text-[18px] rounded-[12px] mb-3"
                  required
                  maxLength="3"
                  onInput={InputValidation.numbersOnly}
                />
              </div>
            </div>

            <div className='d-flex justify-between'>

<button
   type="button"
   className="text-white bg-slate-500 px-4 py-2 rounded-md mt-4"
   onClick={backNavigation}
 >
  Back 
 </button>
          <div className='d-flex align-center gap-3'>

        
 <button
   type="button"
   className="bg-[#fff]  text-black px-4 py-2 rounded-md mt-4"
 >
   Inquire Now
 </button>
 <button
   type="button"
   className="bg-gradient-to-l from-[#556fff] via-[#e05fc4] to-[#ff798e]  -tracking-[.5px]  text-white px-4 py-2 rounded-md mt-4"
 >
   Enroll & Pay
 </button>
          </div>
</div>
          </>
        )}
      </div>
    </form>
  );
}

export default Enroll;