import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ErrorBoundries from './ErrorBoundries/ErrorBoundries'


class App extends Component {
  state = ({
    Person: [
      { id: '1', name: "Max", age: 28 },
      { id: '2', name: "tarek", age: 12 },
      { id: '3', name: "test", age: 22 }
    ],
    other: true
  })

  eventClickHandler = () => {
    console.log("I was clicked!")
    //  {this.state.persons[0].name = "ajsdasjdas"}
  }

  nameHandler = (event, id) => {
    console.log(event.target.value)
    const personIndex = this.state.Person.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.Person[personIndex] }
    person.name = event.target.value;

    const persons = [...this.state.Person]
    persons[personIndex] = person;

    this.setState({ Person: persons })
  }

  togglePerson = () => {
    const isVisible = this.state.other;
    this.setState({
      other: !isVisible
    })
  }

  deletePerson = (personIndex) => {
    console.log("clicked")
    // let persons = this.state.Person.slice();
    const persons = [...this.state.Person];
    persons.splice(personIndex, 1);
    this.setState({
      Person: persons
    })
  }


  render() {

    let persons = null;

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    }

    if (this.state.other) {

      style.backgroundColor = 'red'

      persons = (
        <div>
          {
            this.state.Person.map((person, index) => {
              return (
                <ErrorBoundries
                  key={person.id}>
                  <Person
                    name={person.name}
                    age={person.age}
                    click={() => this.deletePerson(index)}
                    changed={(event) => this.nameHandler(event, person.id)} />
                </ErrorBoundries>
              )


            })
          }
        </div>
      )


    }

    const classesArray = []
    if (this.state.Person.length <= 2) {
      classesArray.push('red')

    }

    if (this.state.Person.length <= 1) {
      classesArray.push('bold')
    }

    return (

      <div className="App">
        <h1>Hello world</h1>
        <button onClick={this.togglePerson}
          style={style}>Click Me</button>
        <p className={classesArray.join(" ")}>This is really working</p>
        {persons}

      </div>

    );
  }
}

export default App;
