import "../App.css";
import logo from "../assets/Logo.svg";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Menu from "../Menu";
import About from "../About";
import Reservations from "../Reservations";
import Login from "../Login";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img className="navbar-brand" src={logo} alt="Little Lemon Logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link" href="/menu">
                Menu
              </a>
            </li>
            <li>
              <a className="nav-link" href="/reservations">
                Reservations
              </a>
            </li>
            <li>
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Nav;