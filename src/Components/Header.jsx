import React from 'react'
import logo from '../assets/logo.jpg'
import arrow from '../assets/arrow.jpg';


const Header = () => {
  return (
    <div className="header-container container d-none d-lg-flex align-items-center justify-content-between p-3">
        <div className="header-img" style={{ zIndex: 1 }}>
          <img
            src={logo}
            width="162.57px"
            height="24px"
            alt="Logo"
          />
        </div>
        <div className="header-form">
          <form
            className="d-flex"
            style={{ width: "360px", borderRadius: "21px" }}
          >
            <button className="custom-search" type="submit">
             
              ⌕
            </button>
            <input
              className="form-control custom-input-search"
              type="search"
              placeholder="Search for your favorite groups in ATG"
              aria-label="Search"
            />
          </form>
        </div>
        <div className="header-button">
          <button
            id="show"
            className="btn custom-btn-create p-0 m-0"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            fdprocessedid="hd62ne"
          >
            create Account.{" "}
            <span className="text-primary fw-bold">
              It's Free!
              <img
                className="rounded-circle"
                alt="Profile"
                src={arrow}
              />
            </span>
          </button>
        </div>
      </div>
  )
}

export default Header