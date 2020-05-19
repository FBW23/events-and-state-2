import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    // THIS binding of a method
    // this.changeMessage = this.changeMessage.bind(this)
    // this.increaseCounter = this.increaseCounter.bind(this)
    this.state = {
      students: [
        { id: 1, name: 'Stud 1', infected: false },
        { id: 2, name: 'Stud 2', infected: false },
        { id: 3, name: 'Stud 3', infected: false },
        { id: 4, name: 'Stud 4', infected: false },
        { id: 5, name: 'Stud 5', infected: false }
      ]
    };
  }

  /**
   * Infect a person of the students list
   * by changing status infected from false to true 
   */
  infect = (studentId) => {
    let studentsNew = [ ...this.state.students ]; // create a copy
    let studentToUpdate = studentsNew.find((student) => student.id === studentId); // find student
    studentToUpdate.infected = true; // change his status to infected
    this.setState({ students: studentsNew }); // update / "overwrite" state
  };

  reset = () => {
    let studentsReset = this.state.students.map((student) => {
      student.infected = false;
      return student;
    });
    this.setState({ students: studentsReset });
  };

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>Corona Game</h1>
        </header>
        <main>
            <div>
              <h4>Healthy</h4>
              <ul>
                {/* List of healthy goes here */}
              </ul>
            </div>
            <div>
              <h4>Infected</h4>
              <ul>
                {/* List of infected goes here */}
              </ul>
            </div>
        </main>
        <footer onClick={this.reset}>Reset</footer>
      </div>
    );
  }
}

export default App;
