import React from "react";
import "./styles/Badge.css";
import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://source.unsplash.com/random"
            alt="Avatar"
          />
          <h1>
            Jhon <br /> Arias
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Full stack developer</h3>
          <div>@jhonalexander11</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
