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
        userName: "John Smith",
        memberSince: "04/22/21",
      },
      debits: [],
      credits: [],
    };
  }

  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );

    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
          </div>
        </Router>
    );
  }



}
  export default App;