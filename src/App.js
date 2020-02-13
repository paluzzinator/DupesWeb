import React from "react";
import Home from "./pages/home/Home";
import Donate from "./pages/donate/Donate";
import Contact from "./pages/contact/Contact";
import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
//import "App.scss";

export default function App() {
  return (
    <Router>
      <div className="App-Container">
        <NavBar name="NavBar" />
        <Switch>
          <Route path="/donate" component={Donate} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}
