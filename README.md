# react-18-context-api
context api example and use

```markdown
# React Props Drilling vs Context API Example

This project demonstrates the difference between **props drilling** and **Context API** in React, along with their respective advantages, limitations, and usage.

## Overview

### What is Props Drilling?
Props drilling occurs when data is passed from a parent component to deeply nested child components through intermediate components. It can quickly become cumbersome and error-prone as the component tree grows.

### What is Context API?
The Context API is a built-in React feature that allows you to share state across the component tree without passing props manually at every level. This approach solves the problem of props drilling effectively.

---

## Project Structure

```
src/
├── ParentContext.js       // Demonstrates Context API
├── ChildAContext.js       // Child component in Context API example
├── ChildDContext.js       // Deeply nested child using Context API
├── UserContext.js         // Context created using React.createContext()
├── Parent.js              // Demonstrates Props Drilling
├── ChildA.js              // First-level child in Props Drilling
├── ChildB.js              // Second-level child in Props Drilling
├── ChildC.js              // Third-level child in Props Drilling
├── ChildD.js              // Deeply nested child in Props Drilling
```

---

## Context API Example

### **ParentContext.js**

- The `ParentContext` component creates a context using `React.createContext()` and provides the state to its children.
- It uses a `UserContext.Provider` to share data (`greetMsg`) with the nested child components.

```jsx
import React, { useState } from "react";
import ChildAContext from "./ChildAContext";
import UserContext from "./UserContext";

let ParentContext = () => {
    const [greetMsg] = useState("Hi, I'm from Context API Parent");

    return (
        <UserContext.Provider value={greetMsg}>
            <ChildAContext />
        </UserContext.Provider>
    );
};

export default ParentContext;
```

### **ChildDContext.js**

- The `ChildDContext` component consumes the data using `UserContext.Consumer`.

```jsx
import React from "react";
import UserContext from "./UserContext";

let ChildDContext = () => {
    return (
        <UserContext.Consumer>
            {(value) => <div>Parent data in Child-D: {value}</div>}
        </UserContext.Consumer>
    );
};

export default ChildDContext;
```

---

## Props Drilling Example

### **Parent.js**

- The `Parent` component passes a `greetMsg` prop to the first-level child, `ChildA`, which then passes it down to deeper components.

```jsx
import React from "react";
import ChildA from "./ChildA";

let Parent = () => {
    return (
        <ChildA greetMsg="Hi, I'm from Parent via Props Drilling" />
    );
};

export default Parent;
```

### **ChildA.js**

- Receives `greetMsg` from `Parent` and passes it to the next child, `ChildB`.

```jsx
import React from "react";
import ChildB from "./ChildB";

let ChildA = (props) => {
    return (
        <ChildB greetMsg={props.greetMsg} />
    );
};

export default ChildA;
```

### **ChildD.js**

- The deeply nested `ChildD` receives `greetMsg` from its parent.

```jsx
import React from "react";

let ChildD = (props) => {
    return <div>From Parent: {props.greetMsg}</div>;
};

export default ChildD;
```

---

## Comparison: Props Drilling vs Context API

| **Feature**              | **Props Drilling**                                    | **Context API**                                 |
|--------------------------|------------------------------------------------------|------------------------------------------------|
| **Ease of Use**          | Tedious for deeply nested components                 | Simple and intuitive                           |
| **Reusability**          | Limited; tightly coupled to component tree structure | Highly reusable and decoupled                 |
| **Performance**          | Not optimal for frequent updates                     | Can be optimized using `React.memo`           |
| **Scalability**          | Becomes unmanageable with deep nesting               | Scales well with large applications           |

---

## Advantages and Limitations

### Advantages of Props Drilling
1. Explicit data flow makes debugging easier in small applications.
2. No need for additional APIs or tools.

### Limitations of Props Drilling
1. Increases complexity with deeply nested components.
2. Leads to redundant code when passing props at multiple levels.

### Advantages of Context API
1. Reduces boilerplate by eliminating intermediate prop passing.
2. Easy to implement and maintain.

### Limitations of Context API
1. All consumers re-render when the context value changes.
2. May lead to performance issues if used extensively.

---

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the project:
   ```bash
   npm start
   ```

---

## Conclusion

This project demonstrates the strengths and weaknesses of props drilling and the Context API. The Context API is a powerful tool for managing state, especially in applications with deeply nested components.

Feel free to experiment with the code and explore different use cases!
``` 
