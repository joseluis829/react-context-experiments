import React from "react";
import AccountDetails from "./AccountDetails";
import AccountUpdate from "./AccountUpdate";
import * as Styles from "./styles";

const AccountProfile = ({
    account: { username, dateJoined, membershipLevel }
}) => (
    <Styles.AccountProfile>
        <AccountDetails
            username={username}
            dateJoined={dateJoined}
            membershipLevel={membershipLevel}
        />
        <AccountUpdate username={username} membershipLevel={membershipLevel} />
    </Styles.AccountProfile>
);

export default AccountProfile;
