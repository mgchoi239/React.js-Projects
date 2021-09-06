import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import About from "./components/pages/About";
import Mile_Stones from "./components/pages/Mile_Stones";
import Readings from "./components/pages/Readings";
import Ttca from "./components/pages/Ttca";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/mile_stones" exact component={Mile_Stones} />
          <Route path="/readings" exact component={Readings} />
          <Route path="/thoughtsthatcomealong" exact component={Ttca} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
