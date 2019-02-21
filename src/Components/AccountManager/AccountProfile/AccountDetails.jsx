import React from "react";
import * as Styles from "./styles";

const AccountDetails = ({ username, dateJoined, membershipLevel }) => (
    <Styles.AccountDetails>
        <p>Username: {username}</p>
        <p>Date Joined: {dateJoined}</p>
        <p>Membership Level: {membershipLevel}</p>
    </Styles.AccountDetails>
);

export default AccountDetails;
