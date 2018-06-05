import React, { Component } from 'react';
import { Glyphicon,Label,Panel,PanelGroup } from 'react-bootstrap';
import axios from 'axios';
import InputPlayers from '../../components/Players/InputPlayers/InputPlayers';
import ListTeams from '../../components/Players/ListTeams/ListTeams';
import ScheduleBuilder from '../../components/ScheduleBuilder/ScheduleBuilder';

const API_URL = "https://api.myjson.com/bins/r4ky2";
class Scheduler extends Component {
    
    state = {
               manageSteps: {
                	activeStep: '1'
                },
               inputVal:'',
               teams:[],
               schedule:[]
            };
    constructor(props){
       super(props)
    }

    componentWillMount() {

    	console.log("component Will Mount");
    }

    componentDidMount() {
        console.log(API_URL);
    }

    componentWillReceieveProps() {
    	console.log("Recieved Props");
    }

   /*shouldComponentUpdate(nextProps,nextState) {
    	console.log(nextProps);
    	console.log(nextState);
    	return true;
    }
    */
   
    componentWillUpdate() {
    	console.log("Component Will Update");
    }

    componentDidUpdate() {
    	console.log("Component Did Update");
    	console.log(this.state);
    }

    componentWIllUnmount() {

    	console.log("Component Did Unmount");
    }

	handleSelect(eventKey) {
       
       const manageSteps = {...this.state.manageSteps};
       manageSteps.activeStep = eventKey;
       this.setState({manageSteps:manageSteps});

	}
    
    handleChange(e) {
       console.log("Recieved");
       console.log(e.target.value);
       this.handleUpdatePlayerData(e.target.value);
    }
    
    handleUpdatePlayerData(val) {
       let changeVal = {...this.state.inputVal};
           changeVal = val;
       this.setState({inputVal:changeVal});
    }

    handleLoadData() {
        axios.get(API_URL)
             .then( res => {
                
                const loadData = res.data[0].value;
                console.log(loadData);
                this.setState({inputVal:loadData});

             });

    }


	handleGenerate() {
    
        
        const entries = this.state.inputVal.split("\n");
        let arr1 = [];
        let arr2 = [];
        if(entries.length%2 != 0)
        {
        	entries.push("bye");
        }
        const entryLength = entries.length;

        entries.forEach( (val,key) => {
          
           if(key+1 <= entryLength/2){
           	 arr1.push(val);
           }
           else{
           	 arr2.push(val);
           }
                   
        });

        arr1.sort(function(){ return 0.5 - Math.random(); });
        arr2.sort(function(){ return 0.5 - Math.random(); });
        let teamsState = {...this.state.teams};
        for(var i=0; i<entryLength/2; i++)
        {
           teamsState[i] = {id:i+1,name:arr1[i]+' & '+arr2[i]};
        }
        this.setState({teams:teamsState});
        this.handleSelect("2");
	}
    

    handleSchedule() {

    	var teams={...this.state.teams};
		var randomTeam=Object.keys(teams).sort(function(a,b){
			return  0.5 - Math.random();
		});
		var add=[];
		for(var i=0;i<randomTeam.length;i++){
		  for(var j=0;j<randomTeam.length,j!=i;j++){
		     
		      var arr = new Array(randomTeam[i],randomTeam[j]);
		      add.push(arr);

		  }
		}
        this.setState({schedule:add})
        this.handleSelect("3");
		
    }
  

	render() {
        
		return (
                  <Panel bsStyle="info">
                    <Panel.Heading> 
                       <Panel.Title componentClass="h3">
                            <Glyphicon glyph="th-list" />  Scheduler 
                       </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                       <PanelGroup
                          accordion
                          id="steps"
                          activeKey={this.state.manageSteps.activeStep}
                          onSelect={this.handleSelect.bind(this)}>
                          
                          <Panel 
                            eventKey="1">
                            <Panel.Heading> 
                              <Panel.Title componentClass="h5" toggle>
                                <Glyphicon glyph="user" /> Input Player Names
                              </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <InputPlayers 
                                       change={this.handleChange.bind(this)} 
                                       click={this.handleGenerate.bind(this)} 
                                       defaultData={this.state.inputVal}
                                       loadData={this.handleLoadData.bind(this)} />
                            </Panel.Body>
                          </Panel>

                          <Panel 
                            eventKey="2">
                            <Panel.Heading>
                              <Panel.Title componentClass="h5" toggle>
                                <Glyphicon glyph="list" /> Team List
                              </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <ListTeams teams={this.state.teams} click={this.handleSchedule.bind(this)}/>
                            </Panel.Body>
                          </Panel>

                          <Panel 
                            eventKey="3">
                            <Panel.Heading>
                              <Panel.Title componentClass="h5" toggle>
                                <Glyphicon glyph="pencil" /> Schedule
                              </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                 <ScheduleBuilder schedule={this.state.schedule} teams={this.state.teams}/>
                            </Panel.Body>
                          </Panel>

                          <Panel 
                            eventKey="4">
                            <Panel.Heading>
                              <Panel.Title componentClass="h5" toggle>
                                <Glyphicon glyph="align-justify" /> Points Table
                              </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                            </Panel.Body>
                          </Panel>

                          <Panel 
                            eventKey="5">
                            <Panel.Heading>
                              <Panel.Title componentClass="h5" toggle>
                                <Glyphicon glyph="book" /> Play Off
                              </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                            </Panel.Body>
                          </Panel>


                       </PanelGroup>
                    </Panel.Body>
                  </Panel>
               );
	}
}


export default Scheduler;