import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import Favorites from "./Pages/favorites/index";
import Search from "./Pages/books/index";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/" component={Search} />
          </Switch>
        </Router>

      </>
    );
  };
}

export default App;
