import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap"

function NavBar() { // call APP with argument drinks or snacks, add logic

  
  
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Snack or Booze
        </NavLink>
         <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/snacks"  >Snacks</NavLink>
            </NavItem>
          <NavItem>
            <NavLink to="/drinks"  >Drinks </NavLink>
          </NavItem> 
          <NavItem>
            <NavLink to="/deserts"  >Deserts </NavLink>
          </NavItem> 
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;

