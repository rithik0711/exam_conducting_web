// QuestionBank.js
import React, { useState } from 'react';
import FacultyNav from './FacultyNav';
import './QuestionBank.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export const QuestionBank = () => {
  const [fileName, setFileName] = useState('');
  const [fileData, setFileData] = useState('');
  const [subject, setSubject] = useState('');
  const [topic, setTopic] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        setFileData(reader.result); // base64 data
      };
      reader.readAsDataURL(file);
    } else {
      alert('Only PDF files are allowed.');
    }
  };

  const handleSave = () => {
    if (!subject || !topic || !fileName || !fileData) {
      alert('Please fill all fields and upload a PDF file.');
      return;
    }

    const newQuestion = { subject, topic, fileName, fileData };
    const existing = JSON.parse(localStorage.getItem('questionBank')) || [];

    // Optional: Check for duplicates
    const isDuplicate = existing.some(q =>
      q.subject === subject &&
      q.topic === topic &&
      q.fileName === fileName
    );
    if (isDuplicate) {
      alert('This question file already exists.');
      return;
    }

    existing.push(newQuestion);
    localStorage.setItem('questionBank', JSON.stringify(existing));

    alert('Question saved successfully!');
    setSubject('');
    setTopic('');
    setFileName('');
    setFileData('');
  };

  return (
    <div>
      <FacultyNav />
      <div className='QB-main'>
        <h1>Upload Questions</h1>
        <h5>Create and manage exam questions for your courses</h5>

        <div className="subject">
          <div>
            <h3>Subject</h3>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g., Data Structures"
            />
          </div>
          <div>
            <h3>Topic</h3>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., Trees"
            />
          </div>
        </div>

        <div className="upload-box">
          <h3>Choose File</h3>
          <label htmlFor="file-upload" className="drop-zone">
            <CloudUploadIcon className="upload-icon" />
            <p><span className="upload-text">Click to upload or drag and drop</span></p>
            <p className="file-note">Only PDF files</p>
            <input
              id="file-upload"
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
            />
          </label>
          {fileName && <p className="file-name">Selected file: {fileName}</p>}
        </div>

        <div className="button-row">
          <button className="cancel-btn" onClick={() => {
            setSubject('');
            setTopic('');
            setFileName('');
            setFileData('');
          }}>Cancel</button>
          <button className="set-btn" onClick={handleSave}>Save Questions</button>
        </div>
      </div>
    </div>
  );
};

export default QuestionBank;
