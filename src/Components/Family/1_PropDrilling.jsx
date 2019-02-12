import React from "react";

export const Display = () => <Grandmother />;

class Grandmother extends React.Component {
    state = {
        lastName: "Sanchez"
    };

    render() {
        return <Mother lastName={this.state.lastName} />;
    }
}

const Mother = ({ lastName }) => {
    return <Child lastName={lastName} />;
};
