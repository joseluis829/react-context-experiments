import React from "react";
import { Link } from "react-router-dom";
import * as Styles from "./styles";
import { AccountConsumer } from "./providers/AccountProvider";

const NavigationBar = _props => (
    <AccountConsumer>
        {({ username }) => (
            <Styles.NavigationBar>
                <Link to="/">Home</Link>
                <Link to="/account/profile">{username}</Link>
            </Styles.NavigationBar>
        )}
    </AccountConsumer>
);

export default NavigationBar;
