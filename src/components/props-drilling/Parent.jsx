import React from "react";
import ChildA from "./ChildA";

let Parent = () => {

    return (
        <React.Fragment>
            <div className="container lead mt-4 h4 text-danger bg-dark text-center">
                NOTE:- when i want the send the parent data at child coponent then
                <br />this is props drilling concept that is too complex
                <br /> never recommeded to use instead of that we will use context-api
                <br /> we cant send data child to parent level
                <br /> context-api will only use for send data fom parent to child level
            </div>
            <div className="text-center mt-3 h3 text-secondary">
                Parent Component

                <div className="row col-md-12">
                    <ChildA greetMsg="hi I'm from Parent" />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Parent;