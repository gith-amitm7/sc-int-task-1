import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Header from "layout/Header";
import clsx from "clsx";
import "./signup.scss";

const SignUp = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  const [isPasswordStrong, setIsPasswordStrong] = useState(false);
  const passwordRegistry = register("password", { required: true });
  const handlePassChange = useCallback((e) => {
    setIsPasswordStrong(e.target.value.length > 8);
  }, []);
  return (
    <>
      <div className="background" />
      <Header title="Create an account" />
      <div id="sign-up">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name" className="typ-input-label">
              Full Name
            </label>
            <input
              placeholder="Enter your name"
              type="text"
              {...register("name")}
            />
          </div>
          <div>
            <label htmlFor="email" className="typ-input-label">
              Email
            </label>
            <input
              placeholder="Enter your email"
              type="email"
              {...register("email")}
            />
          </div>
          <div>
            <div className="label-wrapper">
              <label htmlFor="password" className="typ-input-label">
                New Password
              </label>
              <span
                className={clsx(
                  `form-link`,
                  isPasswordStrong ? "text-success" : "text-danger"
                )}
              >
                {isPasswordStrong ? "Strong" : "Weak"}
              </span>
            </div>
            <input
              placeholder="Enter your password"
              type="password"
              {...passwordRegistry}
              onChange={handlePassChange}
            />
          </div>
          <div className="btn-wrapper">
            <button type="submit">Signup</button>
          </div>
        </form>
        <div className="typ-input-label signup">
          Already user?{" "}
          <Link className="form-link" to={{ pathname: "/login" }}>
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
