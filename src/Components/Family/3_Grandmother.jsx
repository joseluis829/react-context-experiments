import React from "react";

class Grandmother extends Component {
    state = { lastName: "Sanchez" };
    render() {
        return (
            <FamilyProvider value={this.state.lastName}>
                <Mother />
            </FamilyProvider>
        );
    }
}

const Mother = () => {
    return <Child />;
};

const Child = () => {
    return <FamilyConsumer>{context => <p>{context}</p>}</FamilyConsumer>;
};

export default Grandmother;
