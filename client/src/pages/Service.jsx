import React from "react";

const Service = () => {


  
  return (
    <div className="bg-secondary">
      <div className="container">
        <div className="text-center">
          {/* <div className="text-center "> */}
            <span className="bg-warning text-center">What I Do?</span>
          {/* </div> */}
        </div>
        <div className="row text-center mt-4">
          <h2 className="fw-bolder">How I can help your next project</h2>
        </div>
        <div className="row ">
          <div className="col-4 text-center">
            <img
              width={"400px"}
              src="https://strapi.dhiwise.com/uploads/Enhancing_User_Experience_with_the_Loading_Component_in_React_Main_Image_df8d468638.webp?w=1920&q=75"
              alt=""
            />
            <span className="text-center">Graphic Design</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text.
            </p>
          </div>
          <div className="col-4 text-center  ">
            <img
              width={"400px"}
              src="https://strapi.dhiwise.com/uploads/Enhancing_User_Experience_with_the_Loading_Component_in_React_Main_Image_df8d468638.webp?w=1920&q=75"
              alt=""
            />
            <span>Web Design</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text.
            </p>
          </div>
          <div className="col-4 text-center  ">
            <img
              width={"400px"}
              src="https://strapi.dhiwise.com/uploads/Enhancing_User_Experience_with_the_Loading_Component_in_React_Main_Image_df8d468638.webp?w=1920&q=75"
              alt=""
            />
            <span>Web Development</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
