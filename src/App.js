import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import About from "./components/About"
import Footer from "./components/Footer"
import Contact from "./components/Contact"

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/Services/" component={Services} />
        <Route exact path="/About/" component={About} />
        <Route exact path="/Contact/" component={Contact} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
     
      <Footer />
    </>
  );
}

export default App;
