import React from 'react';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import header from "../images/badge-header.svg";
import  './styles/BadgeNew.css'

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
                  <Badge />
                </div>
                <div className="col-md-6">
                    Form
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default BadgeNew;
