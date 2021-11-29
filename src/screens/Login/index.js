import React from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import Header from "layout/Header";
import { useDispatch, useSelector } from "react-redux";
import { login } from "store/slices/auth/operations";
import "./login.scss";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(login(data));
  };

  console.log(errors);
  return isAuthenticated ? (
    <Navigate to={{ pathname: "/video" }} />
  ) : (
    <>
      <div className="background" />
      <Header title="Sign In" />
      <div id="login">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className="typ-input-label">
              Email
            </label>
            <input
              required
              placeholder="Enter your email"
              type="email"
              {...register("email")}
            />
          </div>
          <div>
            <div className="label-wrapper">
              <label htmlFor="password" className="typ-input-label">
                Password
              </label>
              <Link className="form-link" to={{ pathname: "/login" }}>
                Forgot?
              </Link>
            </div>

            <input
              placeholder="Enter your password"
              type="password"
              required
              {...register("password")}
            />
          </div>
          <div className="btn-wrapper">
            <button type="submit">Login</button>
          </div>
        </form>
        <div className="typ-input-label signup">
          New here?{" "}
          <Link className="form-link" to={{ pathname: "/signup" }}>
            Signup
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
