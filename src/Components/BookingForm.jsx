import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment-timezone";



const countryCodes = [
  { code: "US", dialCode: "+1", timezone: "America/New_York" },
  { code: "SG", dialCode: "+65", timezone: "Asia/Singapore" },
  { code: "IN", dialCode: "+91", timezone: "Asia/Kolkata" },
];

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [countryName, setCountryName] = useState("US");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        if (data && data.country) {
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

  useEffect(() => {
    const foundCountry = countryCodes.find((c) => c.code === countryCode);
    if (foundCountry) {
      const localTime = moment().tz(foundCountry.timezone).format("HH:mm");
      setSelectedTime(localTime);
    }
  }, [countryCode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const requestData = {
      name,
      contact_number: `${countryCode}${contact}`,
      date: moment(selectedDate).format("YYYY-MM-DD"),
      time: selectedTime,
    };

    try {
      const response = await axios.post(
        "https://zjttxh7w0j.execute-api.ap-south-1.amazonaws.com/TGFE/TGFE_Enquiry",
        requestData
      );



      setMessage("Assessment request successfully submitted! We'll get back to you shortly!!");
    } catch (error) { 
      console.error("API Error:", error);
      setMessage("Failed to submit booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center text-dark">
      <div className="p-6 rounded-lg">
        <p className="text-sm text-gray-400 text-center mb-4">
          Learn technology from scratch or from your current maturity level.
          Pick a suitable time slot, and we'll schedule a free assessment session.
        </p>

        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <label className="block mb-2 text-start">Enter Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded bg-gray-100 text-dark"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-start">Contact Number</label>
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
                className="w-full p-2 rounded bg-gray-100 text-dark"
                placeholder="Enter Phone Number"
                required
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="mb-4 w-[48%] flex flex-col">
              <label className="block mb-2 text-start">Select Date</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="w-full p-2 rounded bg-gray-100 text-dark"
              />
            </div>
            <div className="mb-4 w-[48%] flex flex-col">
              <label className="block mb-2 text-start">Select Time</label>
              <input
                type="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full p-2 rounded bg-gray-100 text-dark"
                required
              />
            </div>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-600 px-4 py-2 rounded text-white"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
          {message && (
            <p className="mt-4 text-center text-sm text-red-500">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
