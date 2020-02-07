import React from "react";
import logo from "./assets/logo.png"
import "./App.css";
import PicData from "./components/apod-data"
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Card, CardImg
} from 'reactstrap';

function App() {
  return (
    <div className="App">
        <div>
            <Navbar>
            <NavbarBrand href="/">
              <img className="App-logo" src={logo} /></NavbarBrand> 
              <Nav navbar>
                <NavItem>
                  <NavLink href="/">Image of the day</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Random</NavLink>
                </NavItem>
              </Nav>
            </Navbar>
        </div>
      <PicData />
    </div>
  );
}

export default App;
