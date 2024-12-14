import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ChildAContext from './components/context-api/ChildAContext';
import ChildBContext from './components/context-api/ChildBContext';
import ChildCContext from './components/context-api/ChildCContext';
import ChildDContext from './components/context-api/ChildDContext';
import ParentContext from './components/context-api/Parent';
import Navbar from './components/Navbar';

import ChildA from "./components/props-drilling/ChildA";
import ChildB from "./components/props-drilling/ChildB";
import ChildC from "./components/props-drilling/ChildC";
import ChildD from "./components/props-drilling/ChildD";
import Parent from './components/props-drilling/Parent';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/props-dril/parent" element={<Parent />} />
          <Route path="/" redirect="/props-dril/parent" />
          <Route path="/props-dril/child-a" element={<ChildA />} />
          <Route path="/props-dril/child-b" element={<ChildB />} />
          <Route path="/props-dril/child-c" element={<ChildC />} />
          <Route path="/props-dril/child-d" element={<ChildD />} />

          {/*   CONTEXT-API-URLS-ROUTING */}
          
          <Route path="/context-api/parent" element={<ParentContext />} />
          <Route path="/context-api/child-a" element={<ChildAContext />} />
          <Route path="/context-api/child-b" element={<ChildBContext />} />
          <Route path="/context-api/child-c" element={<ChildCContext />} />
          <Route path="/context-api/child-d" element={<ChildDContext />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
