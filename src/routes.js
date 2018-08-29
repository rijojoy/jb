import React from 'react';
import Scheduler from './containers/Scheduler/Scheduler';
import About from './containers/Pages/About';
import {
	     BrowserRouter as Router,
	     Route
	   } from 'react-router-dom';

const Routes = () => {

	return (
               <Router>
                 <div>
		              <Route exact path="/" component={Scheduler} />
					  <Route exact path="/scheduler" component={Scheduler} />
					  <Route exact path="/about" component={About} />
				 </div>
               </Router>
		   );
}

export default Routes;