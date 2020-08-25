import React, { useEffect, useState } from "react";
import "./Nav.css";
const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.addEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix logo"
      />

      <img
        className="nav__avatar"
        src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png"
        alt="Netflix logo"
      />
    </div>
  );
};

export default Nav;
