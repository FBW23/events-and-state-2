import React from 'react';

const StudentsHealthy = (props) => {

  let { healthy, infect } = props

  let jsxHealthyList = healthy.map((student) => (
    <li onClick={() => infect(student.id)}>{student.name}</li>
  ))

  return (
    <div>
      <h4>Healthy</h4>
      <ul>{jsxHealthyList}</ul>
    </div>
  );
}

export default StudentsHealthy;