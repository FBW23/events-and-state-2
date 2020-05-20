import React from 'react';

const StudentsInfected = (props) => {

  let { infected } = props

  let jsxInfectedList = infected.map((student) => <li>{student.name}</li>);

  return (
    <div>
      <h4>Infected</h4>
      <ul>{jsxInfectedList}</ul>
    </div>
  );
};

export default StudentsInfected;
