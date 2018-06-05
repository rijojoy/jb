import React from 'react';
import { Table,Label,Badge } from 'react-bootstrap';
const STYLE = ["success","danger"];
const ListTeams = (props) => {

	return (
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

		   );
}

export default ListTeams;