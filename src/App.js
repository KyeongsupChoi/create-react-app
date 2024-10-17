import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const App = () => {
  // Initial state with skills data
  const initialData = [
    { level: 'Beginner', description: 'Basic understanding of server-side programming languages (e.g., Python, Node.js, Java, Ruby)', weight: 5, active: true },
    { level: 'Beginner', description: 'Familiarity with HTTP protocols, request/response cycles, and basic client-server architecture.', weight: 5, active: true },
    { level: 'Beginner', description: 'Ability to set up a simple server using frameworks like Flask, Express, or Django.', weight: 5, active: true },
    { level: 'Beginner', description: 'Basic understanding of databases (SQL or NoSQL) and how to perform CRUD operations (Create, Read, Update, Delete).', weight: 5, active: true },
    { level: 'Intermediate', description: 'Proficient in designing and implementing RESTful APIs with CRUD functionality.', weight: 5, active: true },
    { level: 'Intermediate', description: 'Understanding of relational databases and NoSQL databases (e.g., MongoDB, Redis).', weight: 5, active: true },
    { level: 'Advanced', description: 'Setting up continuous integration/continuous deployment (CI/CD) pipelines.', weight: 5, active: true },
    { level: 'Advanced', description: 'Implementing caching strategies (e.g., Redis, Memcached) to optimize API performance.', weight: 5, active: true }
  ];

  // State to hold the skill data
  const [skills, setSkills] = useState(initialData);

  // Calculate the total score from active skills
  const totalScore = skills.reduce((sum, skill) => (skill.active ? sum + skill.weight : sum), 0);

  // Data for chart
  const chartData = {
    labels: skills.map((skill) => skill.description), // Skill descriptions
    datasets: [
      {
        label: 'Active Skills',
        data: skills.map((skill) => (skill.active ? skill.weight : 0)),
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Active skill bar color
      },
      {
        label: 'Inactive Skills',
        data: skills.map((skill) => (!skill.active ? skill.weight : 0)),
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // Inactive skill bar color
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Skill Progress Stacked Bar Chart'
      }
    },
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true,
        beginAtZero: true
      }
    }
  };

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

      {/* Stacked bar chart */}
      <div style={{ width: '80%', margin: '20px auto' }}>
        <Bar data={chartData} options={options} />
      </div>

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
        }
      `}</style>
    </div>
  );
};

export default App;
