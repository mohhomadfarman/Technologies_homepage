import React from 'react'

function Appointment({ count, ChangeForm }) {

  const days = [
    { name: "Monday", id: 2 },
    { name: "Tuesday", id: 3 },
    { name: "Wednesday", id: 4 },
    { name: "Thursday", id: 5 },
    { name: "Friday", id: 6 },
    { name: "Saturday", id: 7 },
    { name: "Sunday", id: 8 },
  ];
  
  const times = ["5pm", "6pm", "7pm", "8pm"];

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className=" my-nearest-garage-map px-4">
                    <form className="d-flex align-items-center" role="search">
                        <input className="form-control  my-search-bar" type="search"
                            placeholder="City, area name, zip code..." aria-label="Search"/>

                    </form>
                    <div className="use_my_location">
                        <a href="#">Use My Location </a>
                        <i className="bi bi-geo-alt"></i>
                    </div>

                    <div className="map">
                        <a href="#">List </a>
                        <i className="bi bi-list"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="row ">
        <div className="col-md-4 d-flex p-0">
      <div className="  w-100 p-4" style={{background:"#d9d9d9"}}>
        <div className="selected-garage">
          <h3>Available time slots </h3>
        </div>

        {days.map((day) => (
          <div className="time-select d-flex justify-content-between w-100" key={day.id}>
            <div>
              <h6>{day.name}</h6>
            </div>
            <div className="radio-title-group time-slot">
              {times.map((time, index) => (
                <div className="input-container mb-4" key={index}>
                  <input id={`radio-${day.id}-${index}`} type="radio" name={day.id} />
                  <div className="radio-title">
                    <div className="d-flex input-image-main align-items-center gap-2">
                      <div className="input-text">
                        <h1>{time}</h1>
                      </div>
                    </div>
                    <label htmlFor={`radio-${day.id}-${index}`}></label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
            <div className="col-md-8 p-0 d-flex">
                <iframe
                  src="https://www.google.com/maps/embed?...{yourMapParams}"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
        </div>

    </div>
  )
}

export default Appointment