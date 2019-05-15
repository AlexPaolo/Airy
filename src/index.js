import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.0.0";
import "assets/demo/demo.css";

import Index from "views/Index.jsx";
import Index1 from "views/Index1.jsx";
import LandingPage from "views/examples/LandingPage.jsx";
import RegisterPage from "views/examples/RegisterPage.jsx";
import ProfilePage from "views/examples/ProfilePage.jsx";
import Industry from "views/examples/Industry.jsx";
import Transport from "views/examples/Transport.jsx";
import Healt from "views/examples/Healt.jsx";
import Agro from "views/examples/Agro.jsx";
import Retail from "views/examples/Retail.jsx";
import Apps from "views/examples/Apps.jsx";
import Chatbots from "views/examples/Chatbots.jsx";
import Iot from "views/examples/Iot.jsx";
import Ai from "views/examples/Ai.jsx";


//Se cambio index por index1
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/components" render={props => <Index1 {...props} />} />

      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Route
        path="/agriculture"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/industry"
        render={props => <Industry {...props} />}
      />
      <Route
        path="/healtcare"
        render={props => <Healt {...props} />}
      />
      <Route
        path="/agro"
        render={props => <Agro {...props} />}
      />
      <Route
        path="/transport"
        render={props => <Transport {...props} />}
      />
      <Route
        path="/retail"
        render={props => <Retail {...props} />}
      />
      <Route
        path="/apps"
        render={props => <Apps {...props} />}
      />
      <Route
        path="/chatbots"
        render={props => <Chatbots {...props} />}
      />
      <Route
        path="/iot"
        render={props => <Iot {...props} />}
      />
      <Route
        path="/ai"
        render={props => <Ai {...props} />}
      />
      <Redirect from="/" to="/components" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
