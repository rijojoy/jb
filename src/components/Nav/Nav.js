import React from 'react';
import logo from './JB.jpg';
import Scheduler from '../../containers/Scheduler/Scheduler';
import About from '../../containers/Pages/About';

import { 
	     Image,
	     Navbar, 
	     Nav, 
	     NavItem, 
	     NavDropdown, 
	     MenuItem,PageHeader } from 'react-bootstrap';
import {
	     BrowserRouter as Router,
	     Route,
	     Link
	   } from 'react-router-dom';

const NavMenu = () => {
	
	return (
             <Router>
             <div>
              <Navbar>
              <Navbar.Header>
			    <Navbar.Brand>
			    </Navbar.Brand>
			    <Navbar.Toggle />
			  </Navbar.Header>
			  <Navbar.Collapse>
			    <Nav pullRight>
			      <NavItem eventKey={1}>
			        <Link to="/scheduler">Scheduler</Link>
			      </NavItem>
			      <NavItem eventKey={2}>
			        <Link to="/about">About Us</Link>
			      </NavItem>
			      <NavItem eventKey={3} href="#">
			        Members
			      </NavItem>
			    </Nav>
			  </Navbar.Collapse>
			  </Navbar>
			  <header>
	              <PageHeader>
                   <Image src={logo} responsive />
                  </PageHeader>
	          </header>
	          <Route exact path="/" component={Scheduler} />
			  <Route exact path="/scheduler" component={Scheduler} />
			  <Route exact path="/about" component={About} />
			</div>
			</Router>
	       )
}

export default NavMenu;