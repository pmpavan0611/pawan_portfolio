import React, { useState } from "react";
import { useDispatch,  } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { login } from "../redux/slice/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [show, ] = useState(false);

  const dispatch = useDispatch();

  // const { loading } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    enableReinitialize: true,

    validationSchema: Yup.object({
      email: Yup.string()
        .email("string.emailFormat")
        .required("Email required"),
      password: Yup.string()
        .required("Password required")
        .matches(/^(?=.*)(?=.{6,})/, "string.passwordLength"),
    }),

    onSubmit:async (values) => {
      try {
        await dispatch(login(values));
        navigate('/app/admindashboard');
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
  });

  return (
    <div className="login">
      <div className="container">
        <div className="row justify-content-center p-4">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card shadow mt-4">
              <div className="card-title text-center border-bottom" >
                <h2 className="p-3">Login</h2>
              </div>
              <div className="card-body">
                <form onSubmit={formik.handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="username" className="form-label">
                      Username/Email
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <span className="text-red-500">
                        {formik.errors.email}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      className="form-control text-sm rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400"
                      name="password"
                      placeholder="Password"
                      type={show ? "text" : "password"}
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
