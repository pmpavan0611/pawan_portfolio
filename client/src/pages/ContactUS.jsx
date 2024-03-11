import React from "react";

const ContactUS = () => {
  return (
    <>
      <div className="contactUS">
        <div className="container">
          <div className="row my-4">
            <div className="col-6 mt-4 ">
              <h2 className="fw-bold">Let's get in touch</h2>
              <p>
                I enjoy discussing new projects and design challenges. Please
                share as much info, as possible so we can get the most out of
                our first catch-up.
              </p>
              <span className="fw-bold">Living In:</span>
              <p className="">30 Shacham street, Los Angeles, USA.</p>
              <span className="fw-bold">Call:</span>
              <span className="tel">(+060) 444 434 444</span>
            </div>
            <div className="col-6 mt-4">
              <h2 className="fw-bold">Contact US  </h2>
              <form id="contact-form" className="form-border">
                <div className="row g-4 ">
                  <div className="col-12">
                    <label className="form-label" htmlFor="name">
                      What is Your Name:
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-control py-1"
                      required=""
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label" htmlFor="email">
                      Your Email Address:
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control py-1"
                      required=""
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label" htmlFor="form-message">
                      How can I Help you?:
                    </label>
                    <textarea
                      id="form-message"
                      name="form-message"
                      className="form-control py-1"
                      rows="4"
                      required=""
                    ></textarea>
                  </div>
                  <div className="workBtn col-2 text-center text-lg-start ">
                    <button
                      id="submit-btn"
                      className="workBtn btn btn-dark rounded-0"
                      type="submit"
                    >
                      Send{" "}
                      <span className=" ms-3">
                        <i className="fas fa-arrow-right"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUS;
