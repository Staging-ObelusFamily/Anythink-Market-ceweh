import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {
  const [searchVisible, setSearchVisible] = useState(true);

  const onSearchChange = (event) => {
    props.onSearchFilter(
      event.target.value,
      (page) => agent.Items.byTitle(event.target.value),
      agent.Items.byTitle(event.target.value)
    );
  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span
            id="get-part"
            onClick={() => {
              setSearchVisible(true);
            }}
          >
            A place to get{" "}
          </span>
          <form style={{ display: searchVisible ? "inline" : "none" }}>
            <input
              style={{ width: "250px" }}
              type="text"
              placeholder="what is there you truly desire?"
              name="term"
              id="search-box"
              onChange={onSearchChange}
            />
          </form>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
