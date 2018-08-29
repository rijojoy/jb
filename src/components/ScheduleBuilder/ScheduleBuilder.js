import React from 'react';
import './ScheduleBuilder.css';
import { Badge, Glyphicon, Label, ListGroup, Panel, ListGroupItem, Row, Col } from 'react-bootstrap';

const ScheduleBuilder = (props) => {
    console.log(props.schedule);
    console.log(props.teams);
	return (
             <Row>
             { props.schedule.map( (v,k) => {

             	  return (
                                <Col md={2} sm={2} lg={2}>
	                              <Panel style={{"margin":"2px"}}>
								    <Panel.Heading>Game {k+1}</Panel.Heading>
								    <Panel.Body>
	                                    <Label bsStyle="success">  
			                              <Glyphicon glyph="user" /><Glyphicon glyph="user" /> {props.teams[v[0]].name} 
			                            </Label>
			                            	<Badge className="custom-margin"> VS </Badge>
			                            <Label bsStyle="danger">
			                              <Glyphicon glyph="user" /><Glyphicon glyph="user" /> {props.teams[v[1]].name}
			                            </Label>
								    </Panel.Body>
								  </Panel>
								</Col>
                                  
								

                              

             	  	     )
             }
                                

             )}
            </Row>
		   );
}

export default ScheduleBuilder;