import React from 'react';
import logo from './JB.jpg';
import Scheduler from '../../containers/Scheduler/Scheduler';
import About from '../../containers/Pages/About';
import Contact from '../../containers/Contact/Contact';

import { 
	     Image,
	     Navbar, 
	     Nav, 
	     NavItem, 
	     NavDropdown, 
	     MenuItem,PageHeader } from 'react-bootstrap';
import {
	     Route,
	     Link
	   } from 'react-router-dom';

const NavMenu = () => {
	
	return (
             
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
			      <NavItem eventKey={4}>
			        <Link to="/contact">Contact Us</Link>
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
			  <Route exact path="/contact" component={Contact} />
			</div>
	       )
}

export default NavMenu;