import React from "react";
import { TreeContext } from "./providers/TreeFormProvider";

class TreeFormStep1 extends React.Component {
    state = {};
    render() {
        return (
            <TreeContext.Consumer>
                {context => <div>{context.formData.name}</div>}
            </TreeContext.Consumer>
        );
    }
}

export default TreeFormStep1;
