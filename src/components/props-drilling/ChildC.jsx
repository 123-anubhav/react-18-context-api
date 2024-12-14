import React from "react";
import ChildD from "./ChildD";

let ChildC = (props) => {

    return (
        <React.Fragment>
           <div className="text-center mt-3 h3 text-secondary">
                Child-C Component

            <br/>
            from Parent :
            <span className="text-dark">
             {props.greetMsg}
             </span>
                <ChildD greetMsg={props.greetMsg} />
            </div>
        </React.Fragment>
    );
};

export default ChildC;