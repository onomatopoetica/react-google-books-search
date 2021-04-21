import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Favorites from "./Pages/favorites/index";
import SearchBox from "./Pages/books/index";


class App extends Component {
  render() {
    return (
      <>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/" component={SearchBox} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
