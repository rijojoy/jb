import React from 'react';

const Input = (props) => {

     let inputElement = null;
     console.log(props);
     switch(props.type) {

     	case 'text':
     	inputElement = <input {...props} />;
     	break;

     	case 'textarea':
     	inputElement = <textarea {...props} />;
     	break;

     	default:
     	inputElement = "Hello";

     }

    return (
    	     <div>
    	     	{inputElement}
    	     </div>
    	   );
}

export default Input;