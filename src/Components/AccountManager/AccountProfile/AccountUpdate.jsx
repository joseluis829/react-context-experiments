import React from "react";
import * as Styles from "./styles";
import { AccountConsumer } from "../providers/AccountProvider";

class AccountUpdate extends React.Component {
    state = {
        username: this.props.username,
        membershipLevel: this.props.membershipLevel
    };

    handleOnChange = ({ target: { value, name } }) => {
        this.setState({
            [name]: value
        });
    };

    handleOnSubmit = event => {
        event.preventDefault();
        const updatedAccount = { ...this.state };
        this.props.updateAccount(updatedAccount);
    };

    render() {
        const { membershipLevel, username } = this.state;
        const usernameValue = username === this.props.username ? "" : username;

        return (
            <Styles.AccountUpdate>
                <form onSubmit={this.handleOnSubmit}>
                    <label htmlFor="username">New Username</label>
                    <div>
                        <input
                            type="text"
                            name="username"
                            value={usernameValue}
                            onChange={this.handleOnChange}
                        />
                    </div>
                    <label htmlFor="membershipLevel">Membership Level</label>
                    <div>
                        <select
                            value={membershipLevel}
                            name="membershipLevel"
                            onChange={this.handleOnChange}
                        >
                            <option value="Bronze">Bronze</option>
                            <option value="Silver">Silver</option>
                            <option value="Gold">Gold</option>
                        </select>
                    </div>
                    <button>Save</button>
                </form>
            </Styles.AccountUpdate>
        );
    }
}

const ConnectedAccountUpdate = props => (
    <AccountConsumer>
        {({ username, membershipLevel, updateAccount }) => (
            <AccountUpdate
                {...props}
                username={username}
                membershipLevel={membershipLevel}
                updateAccount={updateAccount}
            />
        )}
    </AccountConsumer>
);

export default ConnectedAccountUpdate;
