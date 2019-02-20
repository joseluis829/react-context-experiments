import React from "react";

class AlertManager extends React.Component {
    state = {
        alert: undefined
    };

    render() {
        const { alert } = this.state;
        const { children } = this.props;
        return children({ alert, showAlert: this.showAlert });
    }

    showAlert = alert => {
        this.setState({
            alert
        });
    };
}

export default AlertManager;
