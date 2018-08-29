import React from 'react';
import { Button,FormControl, FormGroup, InputGroup, Glyphicon, ListGroup, ListGroupItem } from 'react-bootstrap';
import './InputPlayers.css';

const InputPlayers = (props) => {
    
      let listPlayers = Object.keys(props.defaultData).map( (k,v) => {

                    return <ListGroupItem>
                            <InputGroup>
                            <FormControl
					            type="text"
					            value={props.defaultData[k].name}
					            placeholder="Enter player name"
					            id={k}
					            required="true"
					            onChange={props.change}
					            style={(props.defaultData[k].name == '') ? {"border-color":"red"} : {}}
					          />
					          <InputGroup.Addon>
                               <Button bsStyle="danger btn-xs" id={k} onClick={props.remove}>
                                 <Glyphicon glyph="minus-sign" style={{"pointer-events":"none"}}/>
                               </Button>
					          </InputGroup.Addon>
					         </InputGroup>
					        </ListGroupItem>;
    });
	return (
              <FormGroup>
			      <ListGroup>
			      {listPlayers}
			      <ListGroupItem>
			        <InputGroup>
                            <FormControl
					            type="text"
					            value={props.newVal}
					            placeholder="Enter player name"
					            id="new"
					            onChange={props.changeNewVal}
					            style={(props.newVal == '') ? {"border-color":"red"} : {"border-color":"green"}}
					          />
					          <InputGroup.Addon>
                               <Button bsStyle="success btn-xs" onClick={props.add}>
                                 <Glyphicon glyph="plus-sign" />
                               </Button>
					          </InputGroup.Addon>
					</InputGroup>
					</ListGroupItem>
			      </ListGroup>
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