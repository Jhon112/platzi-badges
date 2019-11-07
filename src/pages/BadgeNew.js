import React from "react";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";

class BadgeNew extends React.Component {
  state = {
    form: { firstName: "", lastName: "", twitter: "", jobTitle: "", email: ""}
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }

  render() {

    const {firstName, lastName, twitter, jobTitle} = this.state.form

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
                firstName={firstName}
                lastName={lastName}
                twitter={twitter}
                jobTitle={jobTitle}
              />
            </div>
            <div className="col-md-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
