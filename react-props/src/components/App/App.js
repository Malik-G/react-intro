import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import CreatureList from '../CreatureList/CreatureList';


class App extends Component {
  
  state = {
    newCreature: {
      name: '',
      origin: ''
    },
    allCreatures: []
  }

  handleChangeFor = (propertyName) => {
    return (event) => {
      this.setState( { 
        newCreature: {
          ...this.state.newCreature,
          [propertyName]: event.target.value 
        }
      });
    }
  }

  submitCreature = (event) => {
    event.preventDefault();
    let creature = this.state.newCreature;
    console.log("New creature:", creature);
    this.setState({
      newCreature: {
        name: '',
        origin: ''
      },
      allCreatures: [...this.state.allCreatures, this.state.newCreature]
    })
  }
  
  render() {
    
    console.log('All of the creatures:', this.state.allCreatures);
    //let htmlList = this.state.allCreatures.map( (creature) => {return <li>The {creature.name} originates from {creature.origin}</li>} )
    
    return (
      <div>
        <Header/>
        <section>
          <h3>Add a New Creature</h3>
          <form onSubmit={this.submitCreature}>
            <label htmlFor="nameInput" >Name:</label>
            <input className="nameInput" onChange={this.handleChangeFor('name')}></input>
            <label htmlFor="originInput">Origin:</label>
            <input className="originInput" onChange={this.handleChangeFor('origin')}></input>
            <input type="submit" value="Add"></input>
          </form>
        </section>
        <CreatureList list={this.state.allCreatures}/>
      </div>
    );
  }
}

export default App;
