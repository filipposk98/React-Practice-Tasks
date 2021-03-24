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



  // The Array below is the Data the amount of persons Info that will show up on the 
  // screen after the button is clicked
  state =  {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 23},
      {name: 'Bill', age: 53},
      {name: 'Jill', age: 893}
    ],
    otherState: "new value",
    showPersons: false
  }


// This is comment out cause is not used on the Next task
  // switchNameHandler = (newName) => {
  //   console.log("was clicked");
  //   this.setState({persons: [
  //     {name: newName, age: 28},
  //     {name: 'Manu', age: 44},
  //     {name: 'Billiling', age: 27}
  //   ] })
  // }

  nameChangeHandler = (event) => {
    this.setState({persons: [
      {name: 'Max', age: 28},
      {name: event.target.value, age: 44},
      {name: 'Billiling', age: 26}
    ] })

  }

  // Here we remove one Person from the list by using the splice method
// it removes one person with the onClick method
deletePersonHandler = (personIndex) => {
  // Adding the slice() method that copies the Array and it stores
  //  it in this function and then we remove BETTER PRACTICE
  const persons = this.state.persons.slice();
  // const persons = [...this.state.persons]; This way E6 works as well with spread operator [...]
  persons.splice(personIndex, 1);
  this.setState({persons: persons})

}

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  toggleInputFields = () => {
    const doesShowInput = this.state.showInputs;
    this.setState({showInputs: !doesShowInput});

  }


  // Inline style editting 
  render() {
    const style = {
      backgoundColor: "blue",
      font: "Menlo",
      borders: "1px solid red",
      padding: "8px",
      cursor: "pointer",
      color: "green"
    };


    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}/>
          })}
        </div> 
        )
      }

    //A different way of adding conditional dynamic content
    //  better practice Under te Render before return

    // let persons = null;

    // if (this.state.showPersons) {
    //   persons = (
    //     <div>

    //       <Person
    //         name={this.state.persons[0].name}
    //         age={this.state.persons[0].age} >
    //       </Person>
    //       <Person
    //         name={this.state.persons[1].name}
    //         age={this.state.persons[1].age}
    //         click = {this.switchNameHandler.bind(this, "maxim")}
    //         changed={this.nameChangeHandler}> My hobbies: Football 
    //       </Person>
    //     {/* Can write the same also with out the closure just by adding a / in to the same bracket */}
    //       <Person
    //         name={this.state.persons[2].name}
    //         age={this.state.persons[2].age} />  

    //     </div>
    //   )
    // }


    return (
      <div className="App" >
        <h1>Hi,there</h1>
        {/* I have been creating another element and a new css class to style the p element and added in the p */}
        <p className="p"> Task Nr.1</p>
        <button 
        style={style}
        onClick = {this.togglePersonsHandler}>Switch Name</button>
        {persons}
        
       <VerticalSpace height={30} /> 

           <p className="p">Task Nr.2</p>
      {/* Adding conditional content in a different way Avoid this practise */}


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
    
  }
}

export default App;



  
