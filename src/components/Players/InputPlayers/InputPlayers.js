import React from 'react';
import { Button,FormControl, FormGroup, Glyphicon } from 'react-bootstrap';
import './InputPlayers.css';

const InputPlayers = (props) => {

	return (
              <FormGroup controlId="formControlsTextarea">
			      <FormControl 
			             componentClass="textarea" 
			             placeholder="Enter player names in each line" 
			             onChange={props.change}
			             value={props.defaultData} />
			      <br />
			      
                  <Button bsStyle="success Placement" onClick={props.click}> 
                    <Glyphicon glyph="wrench" /> Generate 
                  </Button>
                  <Button bsStyle="warning Placement" onClick={props.loadData}> 
                    <Glyphicon glyph="download-alt" /> Load Members 
                  </Button>
		      </FormGroup>

		   );
}

export default InputPlayers;