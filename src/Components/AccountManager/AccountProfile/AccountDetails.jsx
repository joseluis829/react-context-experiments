import React from "react";
import * as Styles from "./styles";
import { AccountConsumer } from "../providers/AccountProvider";

const AccountDetails = () => (
    <AccountConsumer>
        {({ username, dateJoined, membershipLevel }) => (
            <Styles.AccountDetails>
                <p>Username: {username}</p>
                <p>Date Joined: {dateJoined}</p>
                <p>Membership Level: {membershipLevel}</p>
            </Styles.AccountDetails>
        )}
    </AccountConsumer>
);

export default AccountDetails;
