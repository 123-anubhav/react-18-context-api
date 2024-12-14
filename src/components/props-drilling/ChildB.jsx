import React from "react";
import ChildC from "./ChildC";

let ChildB = (props) => {

    return (
        <React.Fragment>
            <div className="text-center mt-3 h3 text-secondary">
                Child-B Component

                <br />
                from Parent :
                <span className="text-dark">
                    {props.greetMsg}
                </span>
                <ChildC greetMsg={props.greetMsg} />
            </div>
        </React.Fragment>
    );
};

export default ChildB;