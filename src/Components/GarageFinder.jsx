import React from "react";

const GarageFinder = ({ count, ChangeForm }) => {
  return (
    count === 2 && (
      <div
        className={`container `}
        style={{ background: "#eaeaea", maxHeight: 600 }}
      >
        <div class="row align-items-center justify-content-center">
          <div class="col-md-12">
            <div class="perent-bg">
              <div class="use_my_location">
                <a href="#">Use My Location </a>
                <i class="bi bi-geo-alt"></i>
              </div>
              <form class="d-flex mb-5 mt-4 align-items-center" role="search">
                <input
                  class="form-control  my-search-bar"
                  type="search"
                  placeholder="City, area name, zip code..."
                  aria-label="Search"
                />
              </form>
              <div class="map">
                <a href="#">Map </a>
                <i class="bi bi-map"></i>
              </div>
            </div>
          </div>
        </div>
        <button onClick={()=>ChangeForm(3)}>Next</button>
      </div>
    )
  );
};

export default GarageFinder;
