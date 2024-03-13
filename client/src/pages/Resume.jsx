import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { experience } from "../redux/slice/resumeSlice.js";

const Resume = () => {
  const {
    userExperienceData: { data },
  } = useSelector((state) => state.experience);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(experience(""));
  }, [dispatch]);


  return (
    <>
      <div className="">
        <div className="container">
          <div className="text-center">
            <span className="bg-warning ">CV</span>
          </div>
          <div className="row text-center">
            <h2 className="fw-bolder">A summary of My CV</h2>
          </div>
          <div className="row" >
            <div className="col-6">
              <span className="fw-bolder">My Education</span>
              <hr className="bg-danger border-2 border-top border-danger" />
              {data &&
                data.map((item, i) => {
                  return (
                    <div className="" key={i}>
                      <h4 className="fw-bolder">{item?.title}</h4>
                      <p>{item?.companyName}</p>
                      <p>{item?.description}</p>
                    </div>
                  );
                })}
            </div>

            <div className="col-6  ">
              <span className="fw-bolder">My Experience</span>
              <hr className="bg-danger border-2 border-top border-danger" />
              {data &&
                data.map((item, i) => {
                  return (
                    <div className="" key={i}>
                      <h4 className="fw-bolder">{item?.title}</h4>
                      <p>{item?.companyName}</p>
                      <p>{item?.description}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
