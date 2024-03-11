import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { TypeAnimation } from "react-type-animation";
import About from "./About";
import Service from "./Service";
import Resume from "./Resume";
import Skill from "./skills";
import ContactUS from "./ContactUS";
import { useSelector, useDispatch } from "react-redux";
import { userAbout } from "../redux/slice/userSlice";
import Project from "./Project";
import AppHeader from "../components/AppHeader";

const Home = () => {

  const {
    userData: { data },
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAbout(""));
  }, []);

  return (
    <>
      <AppHeader />
      <div className="hero-section">
        <div className="container">
          {data &&
            data?.map((user, i) => {
              return (
                <div className="row py-5" key={i}>
                  <div className="col-lg-6 py-5 ps-lg-5">
                    <div>
                      <h1 className="text-white">HI, I'M {user?.title}</h1>
                      <TypeAnimation
                        className=""
                        sequence={[user.title, 1000, "developer", 1000]}
                        wrapper="span"
                        speed={40}
                        style={{
                          fontSize: "3em",
                          display: "inline-block",
                          marginLeft: "80px",
                        }}
                        repeat={Infinity}
                      />

                      <p className="mt-4">{user?.aboutUs}</p>
                    </div>

                    <ul className="d-flex ">
                      <li className="workBtn">
                        <a src="/" className="text-decoration-none text-light">
                          View my Works
                        </a>
                      </li>
                      <li className="workBtn">
                        <a src="/" className="text-decoration-none text-light">
                          Contact Me
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6  py-5 ps-lg-5">
                    <Avatar
                      name="avtar"
                      src={`${process.env.REACT_APP_API_BASE_URL}${user?.profile}`}
                      size="500"
                      style={{
                        border: "5px solid white",
                      }}
                      round={true}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <About />
      <Service />
      <Project/>
      <Resume />
      <Skill />
      <ContactUS />
    </>
  );
};

export default Home;
