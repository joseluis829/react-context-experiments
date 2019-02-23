import React from "react";
import AccountDetails from "./AccountDetails";
import AccountUpdate from "./AccountUpdate";
import * as Styles from "./styles";

const AccountProfile = () => (
    <Styles.AccountProfile>
        <AccountDetails />
        <AccountUpdate />
    </Styles.AccountProfile>
);

export default AccountProfile;
