import React, { useState } from 'react';

const App = () => {
  const data = [
    { level: 'Beginner', description: 'Basic understanding of server-side programming languages (e.g., Python, Node.js, Java, Ruby)', weight: 5 },
    { level: 'Beginner', description: 'Familiarity with HTTP protocols, request/response cycles, and basic client-server architecture.', weight: 5 },
    { level: 'Beginner', description: 'Ability to set up a simple server using frameworks like Flask, Express, or Django.', weight: 5 },
    { level: 'Intermediate', description: 'Proficient in designing and implementing RESTful APIs with CRUD functionality.', weight: 5 },
    { level: 'Intermediate', description: 'Understanding of relational databases (e.g., MySQL, PostgreSQL) and NoSQL databases (e.g., MongoDB, Redis).', weight: 5 },
    { level: 'Intermediate', description: 'Familiar with middleware, routing, and handling file uploads.', weight: 5 },
    // Add more data as needed
  ];

  const totalScore = data.reduce((sum, row) => sum + row.weight, 0);

  return (
    <div>
      <div className="score">Total Score: {totalScore} / 180</div>
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Description</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.level}</td>
              <td>{row.description}</td>
              <td className="weight">{row.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
