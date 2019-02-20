import React from "react";
import { Link } from "module";

const NavigationBar = ({ username }) => (
    <div>
        <Link to="/">Home</Link>
        <Link to="/account/profile">{username}</Link>
    </div>
);

export default NavigationBar;
