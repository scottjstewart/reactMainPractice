import React from "react";

import { Route, Link, Switch } from "react-router-dom";

import Home from "./Home";
import Resources from "./Resources";
import FunctionalComponentDemo from "../concepts/FunctionalComponentDemo";
import JSXRules from "../concepts/JSXrules";
import ClassComponentDemo from "../ClassComponentDemo";
import PropsDemo from "../concepts/PropsDemo";
import LifeCycleCodePen from "../concepts/LifeCycleCodePen";
import TimePiecesApp from "../apps/timer-apps/TimePiecesApp";
import TimerApp from "../apps/timer-apps/TimerApp";
import ReactConceptsApp from '../apps/concept-list-app/ReactConceptApp';
import NytApp from '../apps/nyt-app/NytApp';

const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar-list-styling">
      <ul className="sidebar-list list-unstyled">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/rationale">Rationale</Link>
        </li>
        <li>
          <Link to="/functionalcomponent">Functional Component</Link>
        </li>
        <li>
          <Link to="/jsxrules">JSX Rules</Link>
        </li>
        <li>
          <Link to="/ClassComponentDemo">Class Component Demo</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
        <li>
          <Link to="/propsdemo">Props Demo</Link>
        </li>
        <li>
          <Link to="/LifeCycleCodePen">Life Cycle Code Pen</Link>
        </li>
        {/* <li>
          <Link to="/timer">Timers</Link>
        </li> */}
        <li>
          <Link to="TimePiecesApp">Time Pieces App</Link>
        </li>
        <li>
          <Link to="/reactconceptlist">React Concepts Checklist</Link>
        </li>
        <li>
          <Link to="/NytApp">NYT API</Link>
        </li>
      </ul>
    </div>
    <div className="sidebar-route">
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/resources">
          <Resources />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/functionalcomponent">
          <FunctionalComponentDemo />
        </Route>
        <Route exact path="/jsxrules">
          <JSXRules />
        </Route>
        <Route exact path="/ClassComponentDemo">
          <ClassComponentDemo />
        </Route>
        <Route exact path="/PropsDemo">
          <PropsDemo />
        </Route>
        <Route exact path="/LifeCycleCodePen">
          <LifeCycleCodePen />
        </Route>
        <Route exact path="/TimePiecesApp">
          <TimePiecesApp />
        </Route>
        <Route exact path="/TimerApp">
          <TimerApp />
        </Route> 
        <Route exact path="/reactconceptlist">
        <ReactConceptsApp />
        </Route>
        <Route exact path="/NytApp">
        <NytApp />
        </Route>
      </Switch>
    </div>
  </div>
);

export default Sidebar;
