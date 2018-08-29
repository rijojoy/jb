import React, { Component } from 'react';
import { FieldGroup, Button, FormControl } from 'react-bootstrap';
import sgMail from '@sendgrid/mail';
import axios-sg from '../../axios-sendgrid';

class contact extends Component {
    
    state = {

    	     name: '',
    	     email: '',
    	     message:''

            };
    constructor(props) {
    	super(props);
    }
    
    componentDidMount() {
    	console.log(process.env.REACT_APP_SENDGRID_API_KEY);
    }

    changeHandler(e) {
        
        var dataId = e.target.id;
        var contactData = {...this.state};
            contactData[dataId] = e.target.value;
       this.setState(contactData);
    }

    handleSubmit() {
        var msg = JSON.stringify({
					  "personalizations": [
					    {
					      "to": [
					        {
					          "email": "john.doe@example.com",
					          "name": "John Doe"
					        }
					      ],
					      "subject": "Hello, World!"
					    }
					  ],
					  "from": {
					    "email": "sam.smith@example.com",
					    "name": "Sam Smith"
					  },
					  "reply_to": {
					    "email": "sam.smith@example.com",
					    "name": "Sam Smith"
					  }
				});

        axios-sg.post(msg)
           .then( res => {
              
              console.log(res);

           });
       console.log(this.state);

    }
    render() {

    	return (
     	       <form>
     	        <FormControl
     	          id="name"
     	          type="text"
     	          placeholder="Enter Name"
     	          onChange={ (e) => this.changeHandler(e)}
     	          />
     	        <FormControl
     	          id="email"
     	          type="email"
     	          placeholder="Enter Email"
     	          onChange={ (e) => this.changeHandler(e)}
     	          />
     	        <FormControl
     	           id="message" 
     	           componentClass="textarea" 
     	           placeholder="Enter Message"
     	           onChange={ (e) => this.changeHandler(e)}
     	          />
     	        <Button 
     	             type="button" 
     	             onClick={this.handleSubmit.bind(this)}> Submit </Button>
     	       </form>
     	    );

    }

}

export default contact;