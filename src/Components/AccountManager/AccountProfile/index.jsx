import React from "react";
import AccountDetails from "./AccountDetails";
import AccountUpdate from "./AccountUpdate";

const AccountProfile = ({
    account: { username, dateJoined, membershipLevel }
}) => (
    <React.Fragment>
        <AccountDetails
            username={username}
            dateJoined={dateJoined}
            membershipLevel={membershipLevel}
        />
        <AccountUpdate username={username} membershipLevel={membershipLevel} />
    </React.Fragment>
);
