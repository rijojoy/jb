import React, { Component } from 'react';
import { FieldGroup, Button, FormControl } from 'react-bootstrap';
import sgMail from '@sendgrid/mail';

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
       sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);
		const msg = {
		  to: 'rijojoy@gmail.com',
		  from: 'test@example.com',
		  subject: 'Sending with SendGrid is Fun',
		  text: 'and easy to do anywhere, even with Node.js',
		  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
		};
       sgMail.send(msg);
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