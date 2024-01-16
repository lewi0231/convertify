import { Link } from "@remix-run/react";

import type { LinksFunction } from "@remix-run/server-runtime";

import { useState } from "react";
import indexStylesHref from "../styles/_index.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: indexStylesHref },
];

type Position = "left" | "right";

const IndexPage = () => {
  const [activeButton, setActiveButton] = useState<Position>("right");
  const handleClick = (position: Position) => {
    setActiveButton(position);
  };

  return (
    <div className="container">
      <nav>
        <div className="logo">Convertify</div>
        <ul>
          <Link to="#">
            <li>Home</li>
          </Link>
          <Link to="#">
            <li>Solutions</li>
          </Link>
          <Link to="#">
            <li>Integrations</li>
          </Link>
          <Link to="#">
            <li>Support</li>
          </Link>
          <Link to="#">
            <li>Contact</li>
          </Link>
        </ul>
        <Link to="#" className="register-button">
          <div>Register</div>
        </Link>
      </nav>
      <div className="hero">
        <div className="btn-container">
          <Link
            to="#"
            className={`left-btn-wrapper ${
              activeButton === "left" ? "active" : ""
            }`}
          >
            <button id="left-btn" onClick={() => handleClick("left")}>
              Small Business
            </button>
          </Link>
          <Link
            to="#"
            className={`right-btn-wrapper ${
              activeButton === "right" ? "active" : ""
            }`}
          >
            <button id="right-btn" onClick={() => handleClick("right")}>
              Companies
            </button>
          </Link>
        </div>
        <div className="content-container">
          <h1>Grow your business with effective conversion tools</h1>
          <p className="hero-text">
            We believe that powerful tools should be user-friendly. Out
            interface ensures that you can effortlessly navigate through our
            conversion tools, making the process simple and efficient.
          </p>
          <div className="icons-wrapper">
            <p>14-day free trial</p>
            <p>No credit card required</p>
          </div>
          <button className="tools-btn">Explore tools</button>
        </div>
      </div>
      <div className="stats-wrapper">
        <p>
          <span>120k</span>Businesses trust us
        </p>
        <p>
          <span>35%</span>Conversion increase
        </p>
        <p>
          <span>30k</span>Integrations made
        </p>
      </div>
    </div>
  );
};

export default IndexPage;
