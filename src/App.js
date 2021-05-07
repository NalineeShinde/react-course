import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Learnprops from "./Learnprops";
import LearnEvent from "./learnevents";
import Property from "./Poperty";
import logo from "./logo.svg";
import Users from "./Users";
import Home from "./home";
import LearnEvents from "./learnevents";
import CreateUser from "./CreateUser";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { FormControl } from "react-bootstrap";

function App() {
  const [name, setName] = useState("anil");
  return (
    <div className="App">
      <h1>HOme Page</h1>
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            {" "}
            <Link to="/">
            NavBar
            </Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/property">Property</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/users">User</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/createUser">Create User</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/learnprops">Learn Props</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/learnevents">Learn Props</Link>
            </Nav.Link>
          </Nav>
        </Navbar>


        <Switch>
        <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/property">
            <Property />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/createuser">
            <CreateUser />
          </Route>
          <Route path="/learnprops">
            <Learnprops />
          </Route>
          <Route path="/learnevents">
            <LearnEvents />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>


        {/* <About /> */}
        {/* <Contact /> */}
        {/* <Learnprops name={name} /> */}
        {/* <button onClick={()=>{setName("anil chandgude")}}>Update Props</button> */}
        {/* <Property name={name}  /> */}
        {/* <LearnEvent name={name}/> */}
        {/* <Users /> */}
        {/* <CreateUser /> */}
      </Router>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
