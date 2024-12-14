import React from "react";
import ChildBContext from "./ChildBContext";

let ChildAContext = (props) => {

    return (
        <React.Fragment>
            <div className="container">

                Child-A-Context
                <br />
                from Parent : {props.greetMsg}
                <br />
                <ChildBContext />
            </div>
        </React.Fragment>
    );
};

export default ChildAContext;