import React, { useState } from "react";
import ChildAContext from "./ChildAContext";
import UserContext from "./UserContext";


let ParentContext = () => {

    const [greetMsg] = useState("hi, I'm from context api Parent");

    return (
        <React.Fragment>
            <div className="container mt-3 h4 text-danger text-center">
                NOTE:- when i want the send the parent data at child coponent then
                <br />this is props drilling concept that is too complex
                <br /> never recommeded to use instead of that we will use context-api
                <br /> we cant send data child to parent level
                <br /> context-api will only use for send data fom parent to child level
            </div>
            <div className="container h3 bg-info">
                i am not passing state to any child directly by using context i am passing :- see the code
            </div>
            <div className="text-center mt-3 h3 text-info bg-dark">
                Parent Component - Context API -- See The Code
                <br /> from parent data :: {greetMsg}
                <div className="row col-md-12 text-white">
                    <UserContext.Provider value={greetMsg}>
                        <ChildAContext />
                    </UserContext.Provider>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ParentContext;