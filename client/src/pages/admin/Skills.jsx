import React from "react";

const SkillsPage = () => {
  return (
    <div className="container py-5">
      <form className="skill-form">
        <div className="form-floating mb-3">
          <input type="text" className="form-control" placeholder="title" />
          <label htmlFor="floatingInput">Title</label>
        </div>

        <div className="form-floating  mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Total experience"
          />
          <label htmlFor="floatingPassword">Total experience</label>
        </div>

        <div className="form-floating  mb-3">
          <input type="file" className="form-control" placeholder="Image" />
          <label htmlFor="floatingPassword">Image</label>
        </div>

        <button type="submit" className="submitBtn">
          Submit
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>

      </form>
    </div>
  );
};

export default SkillsPage;
