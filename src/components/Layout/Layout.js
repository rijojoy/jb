import React from 'react';
import NavMenu from '../Nav/Nav';
import { Grid, 
	     Image, 
	     PageHeader, 
	     Row, 
	     Col } from 'react-bootstrap';

const Layout = (props) => {

	return (
              <Grid>
              <NavMenu />
                  <main>
              		{props.children}
              	  </main>
              	  <footer>
              	  </footer>
              </Grid>
		   )
}

export default Layout;