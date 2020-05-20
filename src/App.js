import React, { Component } from 'react';
import './App.css';
import StudentsHealthy from './StudentsHealthy';
import StudentsInfected from './StudentsInfected';

class App extends Component {

  constructor() {
    super();

    // THIS binding of a method
    // this.changeMessage = this.changeMessage.bind(this)
    // this.increaseCounter = this.increaseCounter.bind(this)
    this.state = {
      students: [
        { id: 1, name: 'Bendis', infected: false },
        { id: 2, name: 'Plamen', infected: false },
        { id: 3, name: 'Julia', infected: false },
        { id: 4, name: 'Nagster', infected: false },
        { id: 5, name: 'Aghy', infected: false }
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
    let healthy = this.state.students.filter((student) => !student.infected);
    let infected = this.state.students.filter((student) => student.infected);

    return (
      <div className="App">
        <header className="App-header">
          <h1>Corona Game</h1>
        </header>
        <main>
          {healthy.length > 0 && (
            <StudentsHealthy healthy={healthy} infect={this.infect} />
          )}
          {infected.length > 0 && (
            <StudentsInfected infected={infected} />
          )}
        </main>
        <footer onClick={this.reset}>Reset</footer>
      </div>
    );
  }
}

export default App;
