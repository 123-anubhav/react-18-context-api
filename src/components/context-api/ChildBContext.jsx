import React from "react";
import ChildCContext from "./ChildCContext";

let ChildBContext=(props)=>{

    return(
        <React.Fragment>
            Child-B-Context
            <br />
            {props.greetMsg}
            <br />
            <ChildCContext/>
        </React.Fragment>
    );
};

export default ChildBContext;