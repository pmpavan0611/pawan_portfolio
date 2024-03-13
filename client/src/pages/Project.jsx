import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projectList } from "../redux/slice/projectSlice";
const Project = () => {
  const {
    projectData: { data },
  } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(projectList(""));
  }, [dispatch]);


  return (
    <div className="container">
      <div className="row">
        {data &&
          data?.map((item, i) => {
            return (
              <div className="col-md-4">
                <div className="image-container d-flex" key={i}>
                  <div className="">
                    {item?.photoes.map((pic) => (
                      <>
                        <img
                          src={`${process.env.REACT_APP_API_BASE_URL}${pic}`}
                          className="img-fluid"
                          key={i}
                          alt={pic}
                          sizes={100}
                          width={100}
                        />
                      </>
                    ))}
                    <p>{item?.title}</p>
                    <p>{item?.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Project;
