import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container-fluid border-top mt-5">
        <div className="container px-3 px-md-5">
          <div className="row mt-5">
            <div className="col">
              <img
                src="media/images/logo.svg"
                style={{ width: "70%" }}
                alt="Demo Project Logo"
              />
              <p className="mt-2 text-muted" style={{ fontSize: "13px" }}>
                &copy; 2025, MERN Dashboard Demo. All rights reserved.
              </p>
              <div
                className="d-flex gap-4 mb-3 footer-icons"
                style={{ fontSize: "20px" }}
              >
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
              <div
                className="border-top d-flex gap-4 pt-3 footer-icons"
                style={{ fontSize: "20px" }}
              >
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-whatsapp"></i>
                <i className="fa-brands fa-telegram"></i>
              </div>
            </div>
            <div className="ol-12 col-md-6 col-lg-2 footer-links text-muted">
              <p style={{ fontWeight: 500, fontSize: "20px" }}>Account</p>
              <a href="">User Profile</a>
              <br />
              <a href="">Watchlist Settings</a>
              <br />
              <a href="">Order History</a>
              <br />
              <a href="">Simulated Portfolio</a>
              <br />
              <a href="">Trade Blotter</a>
              <br />
              <a href="">Fund Simulation</a>
              <br />
              <a href="">Project Features</a>
              <br />
              <a href="">User Guides</a>
              <br />
            </div>
            {/* 5. CHANGED: Link text to be generic/project-focused */}
            <div className="col footer-links text-muted">
              <p style={{ fontWeight: 500, fontSize: "20px" }}>Support</p>
              <a href="">Project Contact</a>
              <br />
              <a href="">Documentation</a>
              <br />
              <a href="">Report a Bug</a>
              <br />
              <a href="">Feature Requests</a>
              <br />
              <a href="">Version History</a>
              <br />
              <a href="">Updates & Patches</a>
              <br />
              <a href="">Technology Blog</a>
              <br />
              <a href="">Source Code (GitHub)</a>
              <br />
            </div>
            <div className="col footer-links text-muted">
              <p style={{ fontWeight: 500, fontSize: "20px" }}>Company</p>
              <a href="">About This Project</a>
              <br />
              <a href="">My Development Philosophy</a>
              <br />
              <a href="">Press/Media (My Portfolio)</a>
              <br />
              <a href="">Technologies Used</a>
              <br />
              <a href="">Development Journey (Blog)</a>
              <br />
              <a href="">MERN Stack Skills</a>
              <br />
              <a href="">Open Source Libraries Used</a>
              <br />
            </div>
            <div className="col footer-links text-muted">
              <p style={{ fontWeight: 500, fontSize: "20px" }}>Quick links</p>
              <a href="">Market Overview</a>
              <br />
              <a href="">Simulated Trading Rules</a>
              <br />
              <a href="">Data Source Note</a>
              <br />
              <a href="">Simulated Economic Events</a>
              <br />
              <a href="">Financial Calculators</a>
              <br />
              <a href="">Stock Indexes</a>
              <br />
              <a href="">Sectors & Industries</a>
              <br />
            </div>
          </div>
          <div
            className="mt-5 text-muted"
            style={{ fontSize: "10px", lineHeight: "2.1" }}
          >
            <p style={{ fontWeight: 700, fontSize: "12px", color: "red" }}>
              *** IMPORTANT DISCLAIMER FOR EDUCATIONAL DEMONSTRATION ***
            </p>

            <p>
              This application is a non-commercial project built using the MERN
              stack (MongoDB, Express.js, React, Node.js) for educational and
              portfolio demonstration purposes only. All data shown on this
              platform, including stock prices, portfolio values, and order
              executions, is simulated or sourced from a non-live data API and
              should be treated as hypothetical.
            </p>

            <p>
              This project is **NOT** affiliated with, endorsed by, or sponsored
              by Zerodha Broking Limited, the National Stock Exchange (NSE), the
              Bombay Stock Exchange (BSE), or any financial regulatory body. Do
              not use this application for actual trading or investment
              decisions. The look and feel are inspired by modern trading
              platforms but do not represent any specific live broker's
              interface.
            </p>

            <p>
              **Developer Contact:** For inquiries regarding this project,
              please contact [Nisha Singh Kushwaha/nishakuswaha2004@gmail.com].
            </p>
          </div>
          <div
            className="container container px-3 px-md-5"
            style={{ fontSize: "13px" }}
          >
            <ul className="d-flex flex-wrap list-unstyled gap-3 justify-content-center justify-content-md-start">
              <li className="">
                <a className="down-links">Data Sources</a>
              </li>
              <li className="">
                <a className="down-links">Tech Stack</a>
              </li>
              <li className="">
                <a className="down-links">API Policy</a>
              </li>
              <li className="">
                <a className="down-links">Terms of Use (Demo)</a>
              </li>
              <li className="">
                <a className="down-links">Project Privacy Note</a>
              </li>
              <li className="">
                <a className="down-links">Simulator Rules</a>
              </li>
              <li className="">
                <a className="down-links">Accessibility Statement</a>
              </li>
              <li className="">
                <a className="down-links">For Reviewer's Attention</a>
              </li>
              <li className="">
                <a className="down-links">Project Roadmap</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
