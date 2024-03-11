import React from "react";

const ProjectPage = () => {
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
            placeholder="Short description"
          />
          <label htmlFor="floatingPassword">Short description</label>
        </div>

        <div className="form-floating  mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="description"
          />
          <label htmlFor="floatingPassword">Description</label>
        </div>

        <div className="form-floating  mb-3">
          <input type="file" className="form-control" placeholder="Live URL" />
          <label htmlFor="floatingPassword">Thumbnail</label>
        </div>

        <div className="form-floating  mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Github link"
          />
          <label htmlFor="floatingPassword">Github link</label>
        </div>

        <div className="form-floating  mb-3">
          <input type="text" className="form-control" placeholder="Live URL" />
          <label htmlFor="floatingPassword">Live URL</label>
        </div>
        <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
      </form>
    </div>
  );
};

export default ProjectPage;
