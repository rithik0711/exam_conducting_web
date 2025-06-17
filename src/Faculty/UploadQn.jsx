import React from 'react';
import FacultyNav from './FacultyNav';
import './UploadQn.css';

export const UploadQn = () => {
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
                    Mechetronics Engineering
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
          </div>
          <div className='ques'>
            <div className="add-ques">
            <h3>Question</h3>
            <input type="text" placeholder="Enter your question here..." />
            </div>

            <div className="options">
              <h3>Options</h3>
              <div className="option-item">
                <input type="radio" name="correctOption" />
                <input type="text" placeholder="Option 1" />
              </div>
              <div className="option-item">
                <input type="radio" name="correctOption" />
                <input type="text" placeholder="Option 2" />
              </div>
              <div className="option-item">
                <input type="radio" name="correctOption" />
                <input type="text" placeholder="Option 3" />
              </div>
              <div className="option-item">
                <input type="radio" name="correctOption" />
                <input type="text" placeholder="Option 4" />
              </div>
              <p className="option-hint">Select the radio button for the correct answer</p>
              <input type="text" placeholder='Correct answer' className='correct-ans'/>
            </div>

            <div className="marks-section">
              <h3>Marks</h3>
              <input type="number" placeholder="1" />
            </div>
          </div>
          <div className="button-group">
            <button className="add-btn">+ Add Another Question</button>
            <div>
              <button className="cancel-btn">Cancel</button>
              <button className="save-btn">Save Questions</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadQn;
