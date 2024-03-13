import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { me, updateProfile } from "../redux/slice/userSlice";
import { DNA } from "react-loader-spinner";
import { useFormik } from "formik";
import * as Yup from "yup";

function UserProfile() {
  const { userData, loading } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      full_name: "",
      title: "",
      aboutUs: "",
      email: "",
      mobile: "",
      pic: "",
    },
    enableReinitialize: true,

    // validationSchema: Yup.object({
    //   email: Yup.string()
    //     .email("string.emailFormat")
    //     .required("Email required"),
    //   password: Yup.string()
    //     .required("Password required")
    //     .matches(/^(?=.*)(?=.{6,})/, "string.passwordLength"),
    // }),

    onSubmit: async (values) => {
      const formData = new FormData();

      Object.entries(values).forEach(([key, value]) => {
        // Check if the field is a file input and a new file is provided
        if (key === 'pic' && value instanceof File) {
          formData.append(key, value); // Append the new file
        } else if (value && key !== 'pic') {
          formData.append(key, value); // Append other non-empty fields
        }
      });
    
      try {
        await dispatch(updateProfile(formData));
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
  });

  useEffect(() => {
    dispatch(me(""));
  }, [dispatch, ]);

  return (
    <div className="container py-5" style={{ backgroundColor: "#eee" }}>
      {loading ? (
        <div className="loading text-center">
          <DNA
            visible={true}
            height="100"
            width="80"
            ariaLabel="dna-loading"
            wrapperClass="dna-wrapper"
            wrapperStyle={{}}
          />
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src={`${process.env.REACT_APP_API_BASE_URL}${userData?.profile}`}
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: 150 }}
                />
                <h5 className="my-3">{userData?.full_name}</h5>
                <p className="text-muted mb-1">{userData?.title}</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>

                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Edit profile
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{userData?.full_name}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{userData?.email}</p>
                  </div>
                </div>
                <hr />
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Mobile</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{userData?.mobile}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{userData?.mobile}</p>
                  </div>
                </div>

                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">About</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{userData?.aboutUs}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Update Profile{" "}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            <form
              onSubmit={formik.handleSubmit}
              encType="multipart/form-data"
              className="edit-profile-form"
            >
              <div className="modal-body">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    name="full_name"
                    onChange={formik.handleChange}
                    value={formik.values.full_name}
                  />
                  <label htmlFor="floatingInput">Full name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    name="title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                  />
                  <label htmlFor="floatingInput">Title</label>
                </div>
                <div className="form-floating  mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="About US"
                    name="aboutUs"
                    onChange={formik.handleChange}
                    value={formik.values.aboutUs}
                  />
                  <label htmlFor="floatingPassword">About US</label>
                </div>

                <div className="form-floating  mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  <label htmlFor="floatingPassword">Email</label>
                </div>

                <div className="form-floating  mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile"
                    name="mobile"
                    onChange={formik.handleChange}
                    value={formik.values.mobile}
                  />
                  <label htmlFor="floatingPassword">Mobile</label>
                </div>

                <div className="form-floating  mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    name="address"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                  />
                  <label htmlFor="floatingPassword">Address</label>
                </div>

                <div className="form-floating  mb-3">
                  <input
                    type="file"
                    name="pic"
                    className="form-control"
                    placeholder="Profile picture"
                    accept="image/*"
                    onChange={(e) =>
                      formik.setFieldValue("pic", e.currentTarget.files[0]) // Set the value for 'pic'
                    }
                  />
                  <label htmlFor="floatingPassword">Profile picture</label>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
