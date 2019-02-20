import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import NavigationBar from "./Components/AccountManager/NavigationBar";
import AccountProfile from "./Components/AccountManager/AccountProfile";

const account = {
    username: "Crunchy Crunch",
    dateJoined: "9/1/18",
    membershipLevel: "Silver"
};

const App = () => (
    <Router>
        <React.Fragment>
            <NavigationBar username={account.username} />
            <React.Switch>
                <Route exact path="/" render={() => <div>Home</div>} />
                <Route
                    exact
                    path="/account/profile"
                    render={() => <AccountProfile account={account} />}
                />
            </React.Switch>
        </React.Fragment>
    </Router>
);

export default App;
