import React, { useContext } from "react";
import { TreeContext } from "./providers/TreeFormProvider";

export default function TreeFormStep3(params) {
    const treeContext = useContext(TreeContext);

    return (
        <div>
            <p>Example of using context with a hook</p>
            <p>Fleet ID: {treeContext.formData.formId}</p>
        </div>
    );
}
