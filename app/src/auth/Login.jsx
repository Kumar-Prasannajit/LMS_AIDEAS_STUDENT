import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-left">
          <div className="login-left-bg" />
          <div className="login-left-gradient" />
          <div className="login-left-inner">
            <div className="login-logo-wrap">
              <img
                src="/images/aideas-logo.png"
                alt="Aideas Logo"
                className="login-logo"
              />
            </div>

            <p className="login-left-description">
              Transform your career with industry-leading software training
              programs. Join thousands of successful professionals who started
              their journey with Aideas Academy.
            </p>
          </div>
        </div>

        <div className="login-right">
          <div className="login-right-inner">
            <h1 className="welcome-title">Welcome Back !</h1>
            <p className="welcome-subtitle">Please enter your login details</p>

            <form className="login-form">
              <div className="form-group">
               
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                
                <div className="password-wrapper">
                  <input
                    id="password"
                    type="password"
                    className="form-input"
                    placeholder="password"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    aria-label="Toggle password visibility"
                  >
                    👁
                  </button>
                </div>
              </div>

              <div className="login-options">
                <label className="remember-me">
                  <input type="checkbox" defaultChecked />
                  <span>Keep me logged in</span>
                </label>
                <button type="button" className="forgot-password">
                  Forgot password ?
                </button>
              </div>

              <button type="submit" className="login-button">
                SIGN IN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;