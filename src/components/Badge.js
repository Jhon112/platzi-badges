import React from "react";

class Badge extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src="" alt="Logo de la conferencia"/>
                </div>

                <div>
                    <img src="https://source.unsplash.com/random" alt="Avatar"/>
                    <h1>
                        Jhon <br/> Arias
                    </h1>
                </div>

                <div>
                    <h3>Full stack developer</h3>
                    <div>@jhonalexander11</div>
                </div>

                <div className="Badge__footer">#platziconf</div>
            </div>
        );
    }
}

export default Badge