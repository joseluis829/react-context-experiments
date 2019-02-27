import React from "react";
import TreeFormStep1 from "./TreeFormStep1";

class TreeForm extends React.Component {
    state = { formData: {} };
    render() {
        return (
            <TreeFormStep1
                formData={this.state.formData}
                updateFormData={this.updateFormData}
            />
        );
    }
}

export default TreeForm;
