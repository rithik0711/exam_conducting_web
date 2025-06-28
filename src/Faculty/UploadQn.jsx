import React, { useState } from 'react';
import FacultyNav from './FacultyNav';
import './UploadQn.css';

export const UploadQn = () => {
  const emptyQuestion = {
    question: '',
    options: ['', '', '', ''],
    correctAnswer: '',
    marks: 1
  };

  const [questions, setQuestions] = useState([emptyQuestion]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const addQuestionHandler = () => {
    if (questions.length < 20) {
      setQuestions([...questions, emptyQuestion]);
      setCurrentIndex(questions.length); // move to new question
    } else {
      alert("Maximum of 20 questions reached.");
    }
  };

  const handleChange = (field, value) => {
    const updated = [...questions];
    if (field === 'question') updated[currentIndex].question = value;
    if (field === 'correctAnswer') updated[currentIndex].correctAnswer = value;
    if (field === 'marks') updated[currentIndex].marks = value;
    setQuestions(updated);
  };

  const handleOptionChange = (index, value) => {
    const updated = [...questions];
    updated[currentIndex].options[index] = value;
    setQuestions(updated);
  };

  const goToPrevious = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  const goToNext = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex(prev => prev + 1);
  };
  const handleSave = async () => {
  if (!subject || !topic || !fileData) {
    alert('Please fill all fields and upload a PDF file.');
    return;
  }

  const fileInput = document.getElementById('file-upload');
  const file = fileInput.files[0];

  const formData = new FormData();
  formData.append('subject', subject);
  formData.append('topic', topic);
  formData.append('pdfFile', file);

  try {
    const res = await fetch('http://localhost:5000/faculty/upload', {
      method: 'POST',
      body: formData
    });

    if (res.ok) {
      alert('Question uploaded successfully!');
      setSubject('');
      setTopic('');
      setFileName('');
      setFileData('');
    } else {
      alert('Upload failed');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error uploading question');
  }
};

  return (
    <>
      <div>
        <FacultyNav />
        <div className="upload-main">
          <h1>Upload Questions</h1>
          <h5>Create and manage exam questions for your courses</h5>

          <div className="upload-method">
            <h3>Upload Method</h3>
            <button>Manual entry</button>
          </div>

          <div className="sel-dept">
            <h3>Select Department</h3>
            <div className="checkbox-group">
               <label>
                <input type="checkbox" name="department" value="CSE" />
                Computer Science and Engineering
              </label>
              <label>
                <input type="checkbox" name="department" value="ECE" />
                Electronics and Communication Engineering
              </label>
              <label>
                <input type="checkbox" name="department" value="IT" />
                Information Technology
              </label>
              <label>
                <input type="checkbox" name="department" value="ISE" />
                Information Science & Engineering
              </label>
              <label>
                <input type="checkbox" name="department" value="MECH" />
                Mechanical Engineering
              </label>
              <label>
                <input type="checkbox" name="department" value="MZ" />
                Mechatronics Engineering
              </label>
            </div>
          </div>

          <div className="subject">
            <div>
              <h3>Subject</h3>
              <input type="text" placeholder="e.g., Data Structures" />
            </div>
            <div>
              <h3>Topic</h3>
              <input type="text" placeholder="e.g., Binary Trees" />
            </div>
            <div>
              <h3>Timing</h3>
              <input type="text" placeholder='e.g., 20 min'/>
            </div>
            <div>
              <h3>Total Marks</h3>
              <input type="text" placeholder='e.g., 20 marks'/>
            </div>
          </div>

          <div className="ques">
            <h2>Question {currentIndex + 1}</h2>
            <div className="add-ques">
              <h3>Question</h3>
              <textarea
                  placeholder="Enter your question here..."
                  value={questions[currentIndex].question}
                  onChange={e => handleChange('question', e.target.value)}
                  className="question-textarea"
                />
            </div>

            <div className="options">
              <h3>Options</h3>
              {questions[currentIndex].options.map((opt, i) => (
                <div className="option-item" key={i}>
                  <input type="radio" name={`correctOption-${currentIndex}`} />
                  <input
                    type="text"
                    placeholder={`Option ${i + 1}`}
                    value={opt}
                    onChange={e => handleOptionChange(i, e.target.value)}
                  />
                </div>
              ))}
              <p className="option-hint">Select the radio button for the correct answer</p>
              <input
                type="text"
                placeholder="Correct answer"
                className="correct-ans"
                value={questions[currentIndex].correctAnswer}
                onChange={e => handleChange('correctAnswer', e.target.value)}
              />
            </div>

            <div className="marks-section">
              <h3>Marks</h3>
              <input
                type="number"
                placeholder="1"
                value={questions[currentIndex].marks}
                onChange={e => handleChange('marks', e.target.value)}
              />
            </div>

            <div className="nav-buttons">
              <button onClick={goToPrevious} disabled={currentIndex === 0} className='pre-but'>
                Previous
              </button>
              <button
                onClick={goToNext}
                disabled={currentIndex >= questions.length - 1}
              className='next-but'>
                Next
              </button>
            </div>
          </div>

          <div className="button-group">
            <button className="add-btn" onClick={addQuestionHandler}>
              + Add Another Question
            </button>
            <div>
              <button className="cancel-btn">Cancel</button>
              <button
                className="save-btn"
                onClick={() => {
                  localStorage.setItem('uploadedExamQuestions', JSON.stringify(questions));
                  alert("Questions saved successfully!");
                }}
              >
                Save Questions
              </button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadQn;
