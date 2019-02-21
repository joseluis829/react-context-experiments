import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
            <Switch>
                <Route exact path="/" render={() => <div>Home Screen</div>} />
                <Route
                    exact
                    path="/account/profile"
                    render={() => <AccountProfile account={account} />}
                />
            </Switch>
        </React.Fragment>
    </Router>
);

export default App;
