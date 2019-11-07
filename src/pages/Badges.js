import React from "react";

import Navbar from "../components/Navbar";
import BadgesList from "../components/BadgesList"
import confLogo from "../images/badge-header.svg";
import "./styles/Badges.css";

class Badges extends React.Component {
  state = {
    data: [
      {
        id: "22xasxasx",
        firstName: "Jhon",
        lastName: "Arias",
        twitter: "jhonalexander11",
        jobTitle: "Full stack software developer"
      },
      {
        id: "22x551",
        firstName: "Rubiela",
        lastName: "Montoya",
        twitter: "madresita",
        jobTitle: "Best mom ever"
      },
      {
        id: "22x96633",
        firstName: "Diego",
        lastName: "Arias",
        twitter: "Brother",
        jobTitle: "Best brother ever"
      }
    ]
  };

  render() {
    let { data } = this.state;

    return (
      <div>
        <Navbar />
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges__conf-logo"
                src={confLogo}
                alt="Conf logo"
              />
            </div>
          </div>

          <div className="Badges__container">
            <div className="Badges__buttons">
              <a className="btn btn-primary" href="/Badges/new">
                New Badges
              </a>
            </div>

            <div className="Badges__list">
                <BadgesList badges={data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Badges;
