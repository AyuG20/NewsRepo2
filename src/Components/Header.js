import React from 'react';
import "./component.css";
import "./logo.png";
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <>
      <div className="container">
        <div className="row border-bottom pb-3">
          <div className="col-xs-4 col-sm-3 col-md-3 left-icon pl-0">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 flex-row mt-4 float-start">
              <li style={{ marginRight: "1.5rem!important" }}><a href="#"><i className="bi bi-list fs-4 text-dark"></i></a></li>
              <li className="mx-3 mt-1"><a href="#"><i className="bi bi-search fs-6 text-dark"></i></a></li>
              <li className="mx-3 mt-1"><a href="#"><i className="bi bi-bell-fill fs-6 text-dark"></i></a></li>
            </ul>
          </div>
          <div className="col-xs-4 col-sm-6 col-md-5 mt-3 text-center logo-main">

            <img height="45px" src="logo.png" />
          </div>
          <div className="col-xs-4 col-xs-p0 col-sm-3 col-md-4 sign-up pr-0">
            <ul className="navbar-nav d-flex flex-row-reverse mt-4">
              <li className="mx-1"><a className="bg-white text-dark p-2 nav-link fs-6 border border-1" href="#">Subscribe</a></li>
              <li className="mx-1"><a href="#" className="bg-dark text-white p-2 nav-link fs-6 "><i className="bi bi-person">Sign
                in</i></a></li>
            </ul>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-2">
            <p id="current-date"><strong>Sunday</strong><br />
              17 Aug, 2023
            </p>
          </div>
          <div className="col-sm-10">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
              {/* <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
              type="button" role="tab" aria-controls="pills-home" aria-selected="true">News</button> */}
                <Link to="/" className="nav-link active" id="pills-home-tab" data-bs-target="#pills-home"
                role="tab" aria-controls="pills-home" aria-selected="true">News</Link>
              </li>


              <li className="nav-item" role="presentation">
              {/* <button className="nav-link" id="pills-gravitas-tab" data-bs-toggle="pill" data-bs-target="#pills-gravitas"
              type="button" role="tab" aria-controls="pills-gravitas" aria-selected="true">Gravitas</button> */}
                <Link to={"/gravitas"} className="nav-link" id="pills-gravitas-tab"  data-bs-target="#pills-gravitas"
                 role="tab" aria-controls="pills-gravitas" aria-selected="true">Gravitas</Link>
                  {/* <Link to="/gravitas" class="nav-link">Gravitas</Link> */}
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-world-tab" data-bs-toggle="pill" data-bs-target="#pills-world"
                  type="button" role="tab" aria-controls="pills-world" aria-selected="true">World</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-science-tab" data-bs-toggle="pill" data-bs-target="#pills-science"
                  type="button" role="tab" aria-controls="pills-science" aria-selected="true">Science</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-entertainment-tab" data-bs-toggle="pill"
                  data-bs-target="#pills-entertainment" type="button" role="tab" aria-controls="pills-entertainment"
                  aria-selected="true">Entertainment</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-sports-tab" data-bs-toggle="pill" data-bs-target="#pills-sports"
                  type="button" role="tab" aria-controls="pills-sports" aria-selected="true">Sports</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-business-tab" data-bs-toggle="pill" data-bs-target="#pills-business"
                  type="button" role="tab" aria-controls="pills-business" aria-selected="true">Business</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-live-tab" data-bs-toggle="pill" data-bs-target="#pills-live"
                  type="button" role="tab" aria-controls="pills-live" aria-selected="true"><i
                    className="bi bi-tv fs-6 text-dark"></i> Live TV</button>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </>
  );
}