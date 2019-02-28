import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./Components/AccountManager/NavigationBar";
import AccountProfile from "./Components/AccountManager/AccountProfile";
import AccountProvider from "./Components/AccountManager/providers/AccountProvider";
import TreeForm from "./Components/TreeForm";

const App = () => <TreeForm />;

/*const App = () => (
    <AccountProvider>
        <Router>
            <React.Fragment>
                <NavigationBar />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => <div>Home Screen</div>}
                    />
                    <Route
                        exact
                        path="/account/profile"
                        component={AccountProfile}
                    />
                </Switch>
            </React.Fragment>
        </Router>
    </AccountProvider>
);*/

export default App;
