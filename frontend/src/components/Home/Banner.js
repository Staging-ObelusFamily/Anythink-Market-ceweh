import React from "react";
import logo from "../../imgs/logo.png";

const Banner = () => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
          <div>
              <span>A place to get </span>
              <span className="search-box">what is there you truly desire?</span>
              <span> the cool stuff.</span>
          </div>

      </div>
    </div>
  );
};

export default Banner;
