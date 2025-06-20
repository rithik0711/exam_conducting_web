import React from 'react';
import './Results.css';
import Navbar from './Navbar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const examResults = [
  {
    title: 'Mathematics Final Exam',
    subtitle: 'Advanced Calculus',
    date: '2024-01-08',
    score: '92/100',
    percentage: '92%',
    grade: 'A',
    rank: '#3 of 45 students',
    timeTaken: '115m',
    allowedTime: '120m',
  },
  {
    title: 'Physics Mid-term',
    subtitle: 'Quantum Mechanics',
    date: '2024-01-05',
    score: '88/100',
    percentage: '88%',
    grade: 'A-',
    rank: '#5 of 42 students',
    timeTaken: '87m',
    allowedTime: '90m',
  },
  {
    title: 'Chemistry Quiz',
    subtitle: 'Organic Chemistry',
    date: '2024-01-03',
    score: '95/100',
    percentage: '95%',
    grade: 'A+',
    rank: '#1 of 38 students',
    timeTaken: '55m',
    allowedTime: '60m',
  },
  {
    title: 'Biology Test',
    subtitle: 'Cell Biology',
    date: '2023-12-28',
    score: '85/100',
    percentage: '85%',
    grade: 'B+',
    rank: '#8 of 40 students',
    timeTaken: '70m',
    allowedTime: '75m',
  },
];

const Results = () => {
  return (
    <div>
      <Navbar />
      <div className="results-container">
        <div className="results-header">
          <h2>Recent Exam Results</h2>
          <a href="#" className="download-link">Download Report ⬇</a>
        </div>
        <table className="results-table">
          <thead>
            <tr>
              <th>Exam Details</th>
              <th>Score</th>
              <th>Grade</th>
              <th>Rank</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {examResults.map((exam, index) => (
              <tr key={index}>
                <td>
                  <strong>{exam.title}</strong><br />
                  <span className="subtitle">{exam.subtitle}</span><br />
                  <span className="date">📅 {exam.date}</span>
                </td>
                <td>
                  <strong>{exam.score}</strong><br />
                  <span>{exam.percentage}</span>
                </td>
                <td><span className={`grade ${exam.grade}`}>{exam.grade}</span></td>
                <td>{exam.rank}</td>
                <td>
                  <AccessTimeIcon fontSize="small" /> {exam.timeTaken}
                  <div className="allowed">({exam.allowedTime} allowed)</div>
                </td>
                <td>
                  <a href="#" className="details-link">View Details ➤</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="performance-trend">
          <h2>Performance Trend</h2>
          <div className="trend-placeholder">
            
            <p>Performance chart would be displayed here</p>
            <span>Showing improvement over time</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
