import React, { useState } from "react";
import { garageData } from './garageData';


function GetLocations({ count, ChangeForm, close }) {

  const handleShow = (garageId) => {
    ChangeForm(4)
  };

  return (
    count === 3 && (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="my-nearest-garage-map">
                <form className="d-flex align-items-center" role="search">
                  <input
                    className="form-control my-search-bar"
                    type="search"
                    placeholder="City, area name, zip code..."
                    aria-label="Search"
                  />
                </form>
                <div className="use_my_location">
                  <a href="#">Use My Location</a>
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="map">
                  <a href="#">List</a>
                  <i className="bi bi-list"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section style={{ background: "#d9d9d9" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-4 d-flex">
                <div>
                  <div className="first-meet border-0 mb-5 pt-4">
                    <div className="selected-garage">
                      <h3 className="m-0">Selected Garage</h3>
                    </div>
                  </div>
                  {garageData.firstMeet.garages.map((garage) => (
                  garage.id ===1 ?
                   <div key={garage.id} className="p-3 card-energy" style={{ borderBottom: "1px solid black" }}>
                      <div className="technology-garage align-items-center">
                        <h6 className="m-0">{garage.name}</h6>
                        <div className="icon-wp">
                          <i className="bi bi-geo-alt"></i> 0.2 Kms
                        </div>
                      </div>
                      <div className="detail">
                        <p>{garage.location}</p>
                      </div>
                      <div className="pick-time-btn">
                        <button onClick={() => handleShow(garage.id)}>
                          <i className="bi bi-calendar3"></i> Pick Time Slots
                        </button>
                        <button className="icon-wp">
                          <i className="bi bi-chat-dots-fill"></i> Contact
                        </button>
                      </div>
                    </div>
                    :""
                  ))}
                  <div className="first-meet border-0 mb-5 pt-4">
                    <div className="selected-garage">
                      <h3 className="m-0">Other nearby Garage</h3>
                    </div>
                  </div>
                  <div className="card-Scrolls">
                  {garageData.firstMeet.garages.map((garage) => (
                    <div key={garage.id} className="p-3 card-energy" style={{ borderBottom: "1px solid black" }}>
                      <div className="technology-garage align-items-center">
                        <h6 className="m-0">{garage.name}</h6>
                        <div className="icon-wp">
                          <i className="bi bi-geo-alt"></i> 0.2 Kms
                        </div>
                      </div>
                      <div className="detail">
                        <p>{garage.location}</p>
                      </div>
                      <div className="pick-time-btn">
                        <button onClick={() => handleShow(garage.id)}>
                          <i className="bi bi-calendar3"></i> Pick Time Slots
                        </button>
                        <button className="icon-wp">
                          <i className="bi bi-chat-dots-fill"></i> Contact
                        </button>
                      </div>
                    </div>
                  ))}
                  </div> 
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
        </section>
      </>
    )
  );
}

export default GetLocations;
