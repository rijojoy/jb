import React from 'react';
import './ScheduleBuilder.css';
import { Badge,Glyphicon,Label,ListGroup, ListGroupItem } from 'react-bootstrap';

const ScheduleBuilder = (props) => {

	return (
             <ListGroup>
             { props.schedule.map( (v,k) => {

             	  return (
                              
                              <ListGroupItem className="align-center">
	                            <h4>
		                            <Label bsStyle="success">  
		                              <Glyphicon glyph="user" /><Glyphicon glyph="user" /> {props.teams[v[0]].name} 
		                            </Label>
		                            	<Badge className="custom-margin"> VS </Badge>
		                            <Label bsStyle="danger">
		                              <Glyphicon glyph="user" /><Glyphicon glyph="user" /> {props.teams[v[1]].name}
		                            </Label>
	                            </h4>

                              </ListGroupItem>
             	  	     )
             }
                                

             )}
             </ListGroup>
		   );
}

export default ScheduleBuilder;