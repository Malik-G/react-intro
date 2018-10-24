import React, { Component } from 'react';

import './App.css';

class App extends Component {
  
  // constructor(properties){
  //   // React is going to send properties
  //   // Good children componets send these properties to classes super parent
  //   super(properties);
  //   this.state = {name: 'Malik'} // This componet now has a property called 'name'
  // }

  // Alternative to the constructor above, object name has to be state
  state = {
    user: {
      name: '',
      city: '',
      usState: ''
    },
    allUsers: []
  };
  
  // custom methods, needs to be an arrow methods
  // handleNameChange = (event) => {
  //   // console.log(event.target.value);
  //   // setState() updates the componet state
  //   this.setState({
  //     user: {
  //       name: event.target.value,
  //       city: this.state.user.city,
  //       usState: this.state.user.city,
  //     }
  //   });
  // }

  // handleCityChange = (event) => {
  //   // console.log(event.target.value);
  //   this.setState({
  //     user: {
  //       name: this.state.user.name,
  //       city: event.target.value,
  //       usState: this.state.user.city,
  //     }
  //   });
  // }

  // handleUsStateChange = (event) => {
  //   console.log(event.target.value);
  //   this.setState({
  //     user: {
  //       name: this.state.user.name,
  //       city: this.state.user.city,
  //       usState: event.target.value
  //     }
  //   });
  // }

  handleChangeFor = (propertyName) => {
    return (event) => {
      this.setState( { 
        user: {
          ...this.state.user,
          [propertyName]: event.target.value 
        }
      });
    }
  }

  addPerson = (event) => {
    event.preventDefault();
    let user = this.state.user;
    console.log("New user:", user);
    this.setState({
      allUsers: [...this.state.allUsers, this.state.user]
    })
  }
  
  render() {
    
    console.log('All of the users:', this.state.allUsers);
    
    // let htmlList = [];
    

    //let htmlList = this.state.allUsers.map( (currentUser) => {return <li>{currentUser.name} lives in {currentUser.city}, {currentUser.usState}</li>} )
    
    // for(let i=0; i<this.state.allUsers.length; i++){
    //   let currentUser = this.state.allUsers[i]
    //   htmlList.push(<li>{currentUser.name} lives in {currentUser.city}, {currentUser.usState}</li>);
    // }

    // this.state.allUsers.forEach( (currentUser) => {
    //   htmlList.push(<li>{currentUser.name} lives in {currentUser.city}, {currentUser.usState}</li>)
    // })
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Local State</h1>  
        </header>
        <section>
          {/* Due to onChange event, handleChange is logging every time the input is submitted*/}
          {/* <label htmlFor="nameInput">Name</label>
          <input className="nameInput" onChange={this.handleNameChange}/>
          <label htmlFor="cityInput">City</label>
          <input className="cityInput" onChange={this.handleCityChange}/>
          <label htmlFor="stateInput">State</label>
          <input className="stateInput" onChange={this.handleUsStateChange}/> */}
          <form onSubmit={this.addPerson}>
            <label htmlFor="nameInput">Name</label>
            <input className="nameInput" onChange={this.handleChangeFor('name')} value={this.state.user.name}/>
            <label htmlFor="cityInput">City</label>
            <input className="cityInput" onChange={this.handleChangeFor('city')} value={this.state.user.city}/>
            <label htmlFor="stateInput">State</label>
            <input className="stateInput" onChange={this.handleChangeFor('usState')} value={this.state.user.usStatus}/>
            <input type="submit" value="add button" />
          </form>
          <div>
            <p>Hello {this.state.user.name}!</p>
            <p>Do you still live in {this.state.user.city}, {this.state.user.usState}?</p>
          </div> 
        </section>
        <section>
          <h3>All of the Users</h3>
          <pre>
            {JSON.stringify(this.state.allUsers)}
          </pre>
          <ul>
            {htmlList}
            {/* The line below would could also work if htmlList above was not there */}
            {/* {this.state.allUsers.map( (currentUser) => {return <li>{currentUser.name} lives in {currentUser.city}, {currentUser.usState}</li>})} */}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
