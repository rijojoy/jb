import React from 'react';
import { Button, Glyphicon, Table, Label, Badge } from 'react-bootstrap';
import './ListTeams.css';
const STYLE = ["success","danger"];
const ListTeams = (props) => {

	return (
              <div>
              <Table responsive>
				<thead>
				    <tr>
				      <th>#</th>
				      <th>Team Name</th>
				    </tr>
				</thead>
				<tbody>
				{Object.keys(props.teams).map( (v,k) => {
                    
                    return (
                    	     <tr>
                    	      <td>
                    	      <Badge>
                    	      	{props.teams[v].id}
                    	      </Badge>
                    	      </td>
                    	      <td>
                    	      <Label bsStyle={STYLE[k%2]}>
                    	      	{props.teams[v].name}
                    	      </Label>
                    	      </td>
                    	     </tr>
                    	   );

				})}
				</tbody>
			   </Table>
               <br />
               <Button bsStyle="success Placement" onClick={props.click}> 
                    <Glyphicon glyph="wrench" /> Create Schedule 
               </Button>
               </div>

		   );
}

export default ListTeams;