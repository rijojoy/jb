import React from 'react';
import {Grid, Image, PageHeader, Row, Col } from 'react-bootstrap';

const Layout = (props) => {

	return (
              <Grid>
	              <header>
	              <PageHeader>
                   <Image src="/JB.jpg" responsive />
                  </PageHeader>
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