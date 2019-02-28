import React from "react";
import { TreeContext } from "./providers/TreeFormProvider";

class TreeFormStep2 extends React.Component {
    state = {};
    render() {
        return <div>{this.context.formData.date}</div>;
    }
}

TreeFormStep2.contextType = TreeContext;
export default TreeFormStep2;
