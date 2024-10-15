import React, { useState } from 'react';

const App = () => {
  // Initial state with skills data
  const initialData = [
    { level: 'Beginner', description: 'Basic understanding of server-side programming languages (e.g., Python, Node.js, Java, Ruby)', weight: 5, active: true },
    { level: 'Beginner', description: 'Familiarity with HTTP protocols, request/response cycles, and basic client-server architecture.', weight: 5, active: true },
    { level: 'Beginner', description: 'Ability to set up a simple server using frameworks like Flask, Express, or Django.', weight: 5, active: true },
    { level: 'Intermediate', description: 'Proficient in designing and implementing RESTful APIs with CRUD functionality.', weight: 5, active: true },
    { level: 'Intermediate', description: 'Understanding of relational databases (e.g., MySQL, PostgreSQL) and NoSQL databases (e.g., MongoDB, Redis).', weight: 5, active: true },
    { level: 'Intermediate', description: 'Familiar with middleware, routing, and handling file uploads.', weight: 5, active: true },
  ];

  // State to hold the skill data
  const [skills, setSkills] = useState(initialData);

  // Calculate the total score from active skills
  const totalScore = skills.reduce((sum, skill) => (skill.active ? sum + skill.weight : sum), 0);

  // Toggle skill active/inactive status
  const toggleSkill = (index) => {
    const updatedSkills = skills.map((skill, i) => {
      if (i === index) {
        return { ...skill, active: !skill.active }; // Toggle the active status
      }
      return skill;
    });
    setSkills(updatedSkills);
  };

  return (
    <div>
      {/* Total score display */}
      <div className="score">Total Score: {totalScore} / 180</div>

      {/* Skills table */}
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Description</th>
            <th>Weight</th>
            <th>Toggle Skill</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill, index) => (
            <tr key={index} className={skill.active ? '' : 'inactive'}>
              <td>{skill.level}</td>
              <td>{skill.description}</td>
              <td className="weight">{skill.weight}</td>
              <td>
                <input
                  type="checkbox"
                  checked={skill.active}
                  onChange={() => toggleSkill(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Inline styles for active/inactive row */}
      <style jsx>{`
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: center;
        }
        th {
          background-color: #f4f4f4;
        }
        .score {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .weight {
          font-weight: bold;
          color: blue;
        }
        .inactive {
          background-color: #f9f9f9;
          color: #999;
          text-decoration: line-through;
        }
      `}</style>
    </div>
  );
};

export default App;
