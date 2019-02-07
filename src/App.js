import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: null,
      loaded: false
    }
  }
  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/people')
      .then( response => response.json())
      .then(json => {
        this.setState({
          loaded: true,
          people: json,
        })
      });
  }

  render() {
    let { loaded, people } = this.state;
    if(!loaded) {
      return <div>Bip ... Bop ... </div>
    }
    else {
      return (
        <div className="App">
          <table className="table" id= "people_table">
            <tr className = "header">
              <td>Name</td>
              <td>Age</td>
              <td>Eye-color</td>
              <td>Gender</td>
              <td>Hair-color</td>
            </tr>
            {people.map(man => (
              <tr key = {man.id}>
                <td>{man.name}</td>
                <td>{man.age}</td>
                <td>{man.eye_color}</td>
                <td>{man.gender}</td>
                <td>{man.hair_color}</td>
              </tr>                   
            ))}            
          </table>
        </div>      
      );
    }

    
  }
}

export default App;
