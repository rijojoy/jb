import React, { Component } from 'react';
import { Glyphicon,Label,Panel,PanelGroup } from 'react-bootstrap';
import InputPlayers from '../../components/Players/InputPlayers/InputPlayers';
import ListTeams from '../../components/Players/ListTeams/ListTeams';
import ScheduleBuilder from '../../components/ScheduleBuilder/ScheduleBuilder';
import axios from '../../axios';
import Loader from '../../components/UI/Loader/Loader';

class Scheduler extends Component {
    
    state = {
               manageSteps: {
                	activeStep: '1'
                },
               loading:false,
               newVal:'',
               gameType:1,
               inputVal:[],
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
        console.log("Component Mounted");
    }

    componentWillReceieveProps() {
    	console.log("Recieved Props");
    }

   shouldComponentUpdate(nextProps,nextState) {
      if (this.state.newVal == nextState.newVal) {
      return true;
      }
    	return true;
    }
  
   
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
     this.handleUpdatePlayerData(e.target.id,e.target.value);
  }

  handleChangeNewVal(e) {
    this.setState({newVal:e.target.value});
  }

  handleChangeGameType(e) {

         this.setState({gameType:e.target.value});
  }

  handleAddNewPlayer() {
    if(this.state.newVal != '') {

      let newVal = {...this.state.inputVal};
        //newVal.push(this.state.newVal);
      let newK = Object.keys(newVal).length;
      newVal[newK] = {"name":this.state.newVal};
      this.setState({inputVal:newVal,newVal:''});

    }
    
  }
  
  handleRemovePlayer(e) {
     let objId = e.target.id;
     let playerVals = {...this.state.inputVal};
     delete playerVals[objId];
     console.log(playerVals);
     this.setState({inputVal:playerVals});

  }
  handleUpdatePlayerData(id,val) {
     console.log("Updating")
     let changeVal = {...this.state.inputVal};
         changeVal[id].name = val;
     this.setState({inputVal:changeVal});
     console.log(this.state.inputVal);
  }

  handleLoadData() {
      this.setState({loading:true});
      axios.get("members.json")
           .then( res => {
              
              const loadData = res.data;
              this.setState({inputVal:loadData,loading:false});

           });

  }


	handleGenerate() {
    
        
        const entries = this.state.inputVal;
        let arr1 = [];
        let arr2 = [];
        let obToArr = Object.keys(entries);
        if(obToArr.length%2 != 0)
        {
        	let obKey = obToArr.length;
          entries[obKey] = {"name":"bye"};
        }
        obToArr = Object.keys(entries);
        const entryLength = obToArr.length;
        
        obToArr.forEach( (val,key) => {
          
           if(key+1 <= entryLength/2){
           	 arr1.push(entries[key]);
           }
           else{
           	 arr2.push(entries[key]);
           }
                   
        });

        arr1.sort(function(){ return 0.5 - Math.random(); });
        arr2.sort(function(){ return 0.5 - Math.random(); });
        let teamsState = {...this.state.teams};
        for(var i=0; i<entryLength/2; i++)
        {
           teamsState[i] = {id:i+1,name:arr1[i].name+' & '+arr2[i].name};
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
    if(this.state.gameType == 2) {

      for(let i=0;i<randomTeam.length;i++){
        for(let j=0;j<randomTeam.length,j!=i;j++){
           
            let arr = new Array(randomTeam[i],randomTeam[j]);
            add.push(arr);

        }
      }
    }
    else {
      for(let i=0;i<randomTeam.length;i++){
            let arr = new Array(randomTeam[i],randomTeam[i+1]);
            add.push(arr);
            i = i+1;
      }
      console.log(add);
    }
		
    this.setState({schedule:add})
    this.handleSelect("3");
	
  }
  

	render() {
    let inputPlayers = <Loader />
    
    if(!this.state.loading) {
         inputPlayers =  <InputPlayers 
                                       change={this.handleChange.bind(this)}
                                       changeNewVal={this.handleChangeNewVal.bind(this)}
                                       click={this.handleGenerate.bind(this)} 
                                       defaultData={this.state.inputVal}
                                       newVal={this.state.newVal}
                                       add={this.handleAddNewPlayer.bind(this)}
                                       remove={this.handleRemovePlayer.bind(this)}
                                       loadData={this.handleLoadData.bind(this)} />
        }   
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
                                {inputPlayers}
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
                                <ListTeams 
                                      teams={this.state.teams} 
                                      click={this.handleSchedule.bind(this)}
                                      change={this.handleChangeGameType.bind(this)}
                                      />
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
                                 <ScheduleBuilder 
                                       schedule={this.state.schedule} 
                                       teams={this.state.teams}
                                      />
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