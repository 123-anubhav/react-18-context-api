import React from "react";

let ChildD = (props) => {

    return (
        <React.Fragment>
            <div className="text-center mt-3 h3 text-secondary">
            Child-D Component 
            </div>
            <span className="text-success">
            from parent :: &nbsp;&nbsp; {props.greetMsg}
            </span>
            
        </React.Fragment>
    );
};

export default ChildD;