import React from "react";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Hero" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Badge
                firstName="Jhon"
                lastName="Jhon"
                twitter="jhonalexander11"
                titleJob="Full stack developer"
              />
            </div>
            <div className="col-md-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
