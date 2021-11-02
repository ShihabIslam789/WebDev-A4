import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
import "./App.css";
import Debits from "./components/Debits";
import Credits from "./components/Credits";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 0,
      currentUser: {
        userName: "Doylan Mihov",
        memberSince: "06/21/20",
      },
      debits: [],
      credits: [],
    };
  }


}
  export default App;