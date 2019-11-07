import React from 'react';
import ReactDOM from 'react-dom';
import BadgeNew from "./pages/BadgeNew";
import Badges from "./pages/Badges";
import "bootstrap/dist/css/bootstrap.css";

import './global.css';
import * as serviceWorker from './serviceWorker';


let container = document.getElementById("app")
ReactDOM.render(<Badges />, container);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
