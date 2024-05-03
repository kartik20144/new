import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Background from "../Components/Background";
import Nav from "../Components/Nav";
import Posts from "../Components/Posts";
import SideBar from "../Components/SideBar";
import facebook from "../assets/facebook.jpg"
import google from "../assets/google.png"
import atg from "../assets/atg.jpg"

const HomeScreen = () => {
  const [createFormVisible, setCreateFormVisible] = useState(false);
  const [hideForSignIn1Visible, setHideForSignIn1Visible] = useState(true);
  const [hideForSignIn2Visible, setHideForSignIn2Visible] = useState(true);
  const [updateText, setUpdateText] = useState("Create Account");
  const [update1Text, setUpdate1Text] = useState("Create Account");

  useEffect(() => {
    const handleShowClick = () => {
      setCreateFormVisible(true);
    };

    const handleCloseClick = () => {
      setCreateFormVisible(false);
      setHideForSignIn1Visible(true);
      setHideForSignIn2Visible(true);
      setUpdateText("Create Account");
      setUpdate1Text("Create Account");
    };

    const handleSignInClick = () => {
      setHideForSignIn1Visible((prev) => !prev);
      setHideForSignIn2Visible((prev) => !prev);
      setUpdateText((prevText) =>
        prevText === "Create Account" ? "Sign In" : "Create Account"
      );
      setUpdate1Text((prevText) =>
        prevText === "Create Account" ? "Sign In" : "Create Account"
      );
    };


    document.getElementById("show").addEventListener("click", handleShowClick);


    document
      .getElementById("close-form")
      .addEventListener("click", handleCloseClick);

    document
      .getElementById("sign-in")
      .addEventListener("click", handleSignInClick);

    // Cleanup function
    return () => {
      document
        .getElementById("show")
        .removeEventListener("click", handleShowClick);
      document
        .getElementById("close-form")
        .removeEventListener("click", handleCloseClick);
      document
        .getElementById("sign-in")
        .removeEventListener("click", handleSignInClick);
    };
  }, []); 

  return (
    <div>
      <Header />

      <div
        id="create-form"
        style={{
          display: createFormVisible ? "block" : "none",
          zIndex: 2,
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          paddingTop: "40px",
        }}
      >
        <div
          className="create-account"
          style={{
            width: "70%",
            margin: "auto",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            position: "relative",
            zIndex: 3,
          }}
        >
          <div className="modal-content">
            <div className="modal-header custom-modal-header d-flex justify-content-center mb-4">
              Let's learn, share &amp; inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button
                id="close-form"
                type="button"
                className="close"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="px-4">
              <div className="d-flex justify-content-between  align-items-center mb-4">
                <h4 className="d-flex fw-bold" id="update">
                  {updateText}
                </h4>
                <button className="btn" fdprocessedid="n1c408" id="sign-in">
                  {updateText === "Create Account" ? (
                    <>
                      Already have an account?{" "}
                      <span className="text-primary">Sign In</span>
                    </>
                  ) : (
                    <>
                      Don't have an account yet?{" "}
                      <span className="text-primary">Create new for free!</span>
                    </>
                  )}
                 
                </button>
              </div>
              <div className="container text-center">
                <div className="row">
                  <div className="col">
                    <div className="d-flex flex-column gap-2">
                      <div className="d-flex">
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="First Name"
                          style={{
                            display: hideForSignIn1Visible ? "block" : "none",
                          }}
                        />
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Last Name"
                          style={{
                            display: hideForSignIn2Visible ? "block" : "none",
                          }}
                        />
                      </div>
                      <input
                        type="email"
                        className="form-control custom-input"
                        placeholder="Email"
                      />
                      <div className="d-flex align-items-center justify-content-between  position-relative">
                        <input
                          type="password"
                          className="form-control custom-input"
                          placeholder="Password"
                        />
                        <button
                          className="btn position-absolute"
                          style={{ right: "10px" }}
                        >
                         👁️‍🗨️
                        </button>
                      </div>
                      <input
                        type="password"
                        className="form-control mb-4 custom-input"
                        placeholder="Confirm password"
                      />
                      <button
                        className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center mb-4"
                        data-bs-dismiss="modal"
                        id="update1"
                      >
                        {update1Text}
                      </button>
                      <div className="d-flex flex-column gap-2">
                        <button className="btn d-flex align-items-center justify-content-center gap-2 button-signup-group">
                          <img
                            src={facebook}
                            alt="facebook"
                          />
                          Sign Up with Facebook
                        </button>
                        <button className="btn d-flex align-items-center gap-2 button-signup-group justify-content-center">
                          <img
                            src={google}
                            alt="google"
                            width="25px"
                            height="25px"
                          />
                          Sign Up with Google
                        </button>
                        <button className="btn d-flex align-items-center gap-2 button-signup-group justify-content-center">
                          Forgot Password?
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="d-flex flex-column">
                      <img
                        src={atg}
                        alt="atg-illustration"
                      />
                      <p className="info-signup">
                        By signing up, you agree to our Terms &amp; conditions,
                        Privacy policy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Background />

      <Nav />

      <hr className="mx-auto mt-0" style={{ maxWidth: "1040px" }} />

      <div className="container3">
        <div
          className="mx-auto d-flex gap-5 justify-content-center"
          style={{ maxWidth: "1040px" }}
        >
          {/* <Posts /> */}
          <div className="container mx-5">
      <div className="row">
        <div className="col">
          <Posts />
        </div>
      </div>
    </div>

          <SideBar />

          
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default HomeScreen;
