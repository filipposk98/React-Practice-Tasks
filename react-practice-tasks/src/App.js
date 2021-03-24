import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import VerticalSpace from './VerticalSpace/VerticalSpace';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  // New task with the outputfields
  state = {
    username: 'supermax',
    showInputs: false
  }

  //this will change the data in the textareas
  // usernameChangeHandler = (event) => {
  //   this.setState({username: event.target.value})

  // }

  state =  {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 23},
      {name: 'Bill', age: 53}
    ],
    otherState: "new value",
    showPersons: false
  }

  switchNameHandler = (newName) => {
    console.log("was clicked");
    this.setState({persons: [
      {name: newName, age: 28},
      {name: 'Manu', age: 44},
      {name: 'Billiling', age: 27}
    ] })
  }

  nameChangeHandler = (event) => {
    this.setState({persons: [
      {name: 'Max', age: 28},
      {name: event.target.value, age: 44},
      {name: 'Billiling', age: 26}
    ] })

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  toggleInputFields = () => {
    const doesShowInput = this.state.showInputs;
    this.setState({showInputs: !doesShowInput});

  }

  render() {
    const style = {
      backgoundColor: "blue",
      font: "Menlo",
      borders: "1px solid red",
      padding: "8px",
      cursor: "pointer",
      color: "green"
    };


    return (
      <div className="App" >
        <h1>Hi,there</h1>
        {/* I have been creating another element and a new css class to style the p element and added in the p */}
        <p className="p"> Task Nr.1</p>
        <button 
        style={style}
        onClick = {this.togglePersonsHandler}>Switch Name</button>

        { 
        
        this.state.showPersons === true ? 

        <div>

          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} >
          </Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click = {this.switchNameHandler.bind(this, "maxim")}
            changed={this.nameChangeHandler}> My hobbies: Football 
          </Person>
        {/* Can write the same also with out the closure just by adding a / in to the same bracket */}
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />  

        </div> :null

        }


           <VerticalSpace height={30} /> 

           <p className="p">Task Nr.2</p>

           <button 
            style={style}
            onClick = {this.toggleInputFields}>Show Inputs</button>

          {
            this.state.showInputs === true ?   

        <div>

           <UserInput 
           changed={this.usernameChangeHandler}
           currentName={this.state.username}
           />

           <VerticalSpace height={30} /> 

           <UserOutput userName={this.state.username}/>
           <UserOutput userName={this.state.username}/>
           <UserOutput userName='Max'/>


        </div> :null

          }


       </div>
    );
    // return React.createElement("div", {className: 'App'}, React.createElement("h1", null, "Does it work?"));
  }
}

export default App;



    /* //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to React</h1>
    //     </header>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p> */
