import React from "react";

import TwitterLogo from '../images/Twitter-Logo.png'
import './styles/BadgesList.css'

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id}>
              <div className="BadgesList__container">
                <img
                  className="BadgesList__img"
                  src="https://source.unsplash.com/random"
                  alt="Avatar"
                />
                <div className="BadgesList__content">
                  <strong>
                    {badge.firstName} {badge.lastName}
                  </strong>
                  <a
                    className="BadgesList__twitter-info"
                    href={`https://twitter.com/${badge.twitter}`}
                  >
                    <img
                      className="BadgesList__twitter-logo"
                      src={TwitterLogo}
                      alt="Twitter logo"
                    />
                      @{badge.twitter}
                  </a>
                  <p className="BadgesList__job-title">{badge.jobTitle}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
