import React from "react";
import UserContext from "./UserContext";

let ChildDContext = (props) => {

    return (
        <React.Fragment>
            <div className="container">
                Child-D-Context-Api:: see the code <br />
                <UserContext.Consumer>
                    {
                        (value) => {
                            return (
                                <React.Fragment>
                                    parent data in child d is - {value}
                                </React.Fragment>
                            );
                        }
                    }
                </UserContext.Consumer>
            </div>
        </React.Fragment>
    );
};

export default ChildDContext;