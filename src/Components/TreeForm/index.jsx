import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { TreeContext } from "./providers/TreeFormProvider";
import TreeFormStep1 from "./TreeFormStep1";
// import TreeFormStep2 from "./TreeFormStep2";
// import TreeFormStep3 from "./TreeFormStep3";

class TreeForm extends React.Component {
    state = {
        formData: {
            form_id: "",
            name: "data form",
            date: "",
            build_id: "",
            unreleased: "",
            creating: true
        },
        updateFormData: this.updateFormData,
        goToStep: this.goToStep
    };

    updateFormData = () => {};

    goToStep = () => {};

    render() {
        return (
            <TreeContext.Provider value={this.state}>
                <TreeFormStep1 />
            </TreeContext.Provider>
        );
    }
}

export default TreeForm;
