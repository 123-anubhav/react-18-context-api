import React from "react";
import ChildDContext from "./ChildDContext";

let ChildCContext = (props) => {

    return (
        <React.Fragment>
            Child-C-Context
            <br />
            {props.greetMsg}
            <br />
            <ChildDContext />
        </React.Fragment>
    );
};

export default ChildCContext;