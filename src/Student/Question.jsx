import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './Question.css';
export const Question = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const loadQuestions = () => {
      const data = JSON.parse(localStorage.getItem('questionBank')) || [];
      setQuestions(data);
    };

    loadQuestions(); // Initial load

    // Reload questions on tab focus or localStorage change
    window.addEventListener('focus', loadQuestions);
    window.addEventListener('storage', loadQuestions);

    return () => {
      window.removeEventListener('focus', loadQuestions);
      window.removeEventListener('storage', loadQuestions);
    };
  }, []);

  const handleOpen = (fileData) => {
    const win = window.open();
    win.document.write(
      `<iframe src="${fileData}" frameborder="0" style="width:100%;height:100%;"></iframe>`
    );
  };

  const handleDownload = (fileData, fileName) => {
    const a = document.createElement('a');
    a.href = fileData;
    a.download = fileName;
    a.click();
  };

  return (
    <div>
      <Navbar />
      <div className="con">
        <h1>Uploaded Questions</h1>
        <div className="question-table">
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Topic</th>
                <th>File</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((q, index) => (
                <tr key={index}>
                  <td>{q.subject}</td>
                  <td>{q.topic}</td>
                  <td>{q.fileName}</td>
                  <td>
                    <button onClick={() => handleOpen(q.fileData)}>Open</button>
                    <button onClick={() => handleDownload(q.fileData, q.fileName)}>Download</button>
                  </td>
                </tr>
              ))}
              {questions.length === 0 && (
                <tr>
                  <td colSpan="4">No questions uploaded yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    
      <div className="study-tips-card">
        <h2>💡 <strong>Study Tips</strong></h2>
        <div className="tips-container">
          <div className="tip">
            <span>🎯 <strong>Focus on Weak Areas</strong></span>
            <p>Identify topics with lower completion rates and spend more time practicing them.</p>
          </div>
          <div className="tip">
            <span>⏰ <strong>Time Management</strong></span>
            <p>Use the estimated time as a guide to plan your study sessions effectively.</p>
          </div>
          <div className="tip">
            <span>🧠 <strong>Regular Practice</strong></span>
            <p>Consistent daily practice with varied difficulty levels improves retention.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;