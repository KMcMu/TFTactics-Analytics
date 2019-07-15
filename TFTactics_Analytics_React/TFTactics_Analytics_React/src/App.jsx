import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Grid2 from "./components/Grid2";
import Master_Detail from "./components/Master_Detail";
import Master_Detail2 from "./components/Master_Detail2";
import Master_Detail3 from "./components/Master_Detail3";
import Master_Detail4 from "./components/Master_Detail4";
import Master_Detail5 from "./components/Master_Detail5";
//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          < Redirect exact path = "/" to = "/Grid2" />
          < Route path = "/Grid2" component = { Grid2 } />
          < Route path = "/Master_Detail" component = { Master_Detail } />
          < Route path = "/Master_Detail2" component = { Master_Detail2 } />
          < Route path = "/Master_Detail3" component = { Master_Detail3 } />
          < Route path = "/Master_Detail4" component = { Master_Detail4 } />
          < Route path = "/Master_Detail5" component = { Master_Detail5 } />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
