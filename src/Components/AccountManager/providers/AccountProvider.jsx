import React from "react";

const AccountContext = React.createContext();

export const AccountConsumer = AccountContext.Consumer;

class AccountProvider extends React.Component {
    state = {
        username: "Crunchy Crunch",
        dateJoined: "9/1/18",
        membershipLevel: "Silver",
        updateAccount: updatedAccount => this.updateAccount(updatedAccount)
    };

    updateAccount = updatedAccount => {
        this.setState(prevState => ({
            ...prevState,
            ...updatedAccount
        }));
    };

    render() {
        return (
            <AccountContext.Provider value={this.state}>
                {this.props.children}
            </AccountContext.Provider>
        );
    }
}

export default AccountProvider;
