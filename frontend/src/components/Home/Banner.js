import React, { useState } from "react";
import logo from "../../imgs/logo.png";

const Banner = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span
            className="get-part"
            onClick={() => {
              setSearchVisible(true);
            }}
          >
            A place to get{" "}
          </span>
          <form style={{ display: searchVisible ? "inline" : "none" }}>
            <input
              type="text"
              placeholder="what is there you truly desire?"
              name="term"
              id="search-box"
            />
          </form>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
