import React from "react";
import ChildB from "./ChildB";

let ChildA = (props) => {

    return (
        <React.Fragment>
            <div className="text-center mt-3 h3 text-secondary">
                Child-A Component

            <br/>
            from Parent :
            <span className="text-dark">
             {props.greetMsg}
             </span>

            <span className="text-success">
                <ChildB greetMsg={props.greetMsg} />
            </span>
            </div>
        </React.Fragment>
    );
};

export default ChildA;