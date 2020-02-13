import React from "react";
import Home from "./pages/home/Home";
import Donate from "./pages/donate/Donate";
import Contact from "./pages/contact/Contact";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import monaDark from "./assets/GitHub-Mark-120px-plus.png";
//import "App.scss";

export default function App() {
  return (
    <Router>
      <div className="App-Container">
        <a href="https://github.com/" target="_blank">
          <img src={monaDark} alt="<Mona isn't showing up>" />
        </a>
        <header>some stuff</header>
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
