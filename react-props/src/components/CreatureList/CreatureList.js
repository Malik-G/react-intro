import React, { Component } from 'react';


class CreatureList extends Component {
  
  render() {

   let htmlList = this.props.list.map( (creature) => {
      return <li>The {creature.name} originates from {creature.origin}</li>
   });
   
   return (
   <section>
      <h3>List of Creatures</h3>
      <ul>{htmlList}</ul>
   </section>
   );
  }
}

export default CreatureList;
