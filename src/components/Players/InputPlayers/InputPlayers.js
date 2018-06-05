import React from 'react';
import { Button,FormControl, FormGroup, Glyphicon } from 'react-bootstrap';
import './InputPlayers.css';

const InputPlayers = (props) => {

	return (
              <FormGroup controlId="formControlsTextarea">
			      <FormControl componentClass="textarea" placeholder="Enter player names in each line" onChange={props.change} />
			      <br />
                  <Button bsStyle="success Placement" onClick={props.click}> 
                    <Glyphicon glyph="wrench" /> Generate 
                  </Button>
		      </FormGroup>

		   );
}

export default InputPlayers;