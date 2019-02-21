import React from "react";
import { Link } from "react-router-dom";
import * as Styles from "./styles";

const NavigationBar = ({ username }) => (
    <Styles.NavigationBar>
        <Link to="/">Home</Link>
        <Link to="/account/profile">{username}</Link>
    </Styles.NavigationBar>
);

export default NavigationBar;
