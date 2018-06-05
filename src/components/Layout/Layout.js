import React from 'react';
import {Grid, Row, Col } from 'react-bootstrap';

const Layout = (props) => {

	return (
              <Grid>
	              <header>
	               <h1> Tournament Scheduler </h1>
	              </header>
	              <main>
              		{props.children}
              	  </main>
              	  <footer>
              	  </footer>
              </Grid>
		   )
}

export default Layout;