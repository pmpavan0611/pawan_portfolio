import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AppHeader = () => {
  const [navSize, setnavSize] = useState("5rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#252734") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("5rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
      <nav
        className="navbar fixed-top "
        data-bs-theme="dark"
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s",
        }}
      >
        <div className="container">
          <a className="navbar-brand fw-bold" href="/home">
            Coding Yaar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav5"
            aria-controls="navbarNav5"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav5">
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutUS">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  What I Do?
                </Link>
              </li>
              <li className="nav-item">
                <span className="nav-link">Resume</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Portfolio</span>
              </li>

              <li className="nav-item">
                <span className="nav-link">Client Speak</span>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Contact Me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AppHeader;
