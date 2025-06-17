import React, { useState, useEffect } from 'react';
import './Student.css';
import Navbar from './Navbar'
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useNavigate } from 'react-router-dom';

export const Student = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const user = JSON.parse(localStorage.getItem('user')) || {
    name: 'Rithikeswaran',
    email: 'rithikeswaran.it23@bitsathy.ac.in',
    picture: '',
    department: 'IT'
  };

  return (
    
    <div className="capital">
      <div><Navbar /></div>
      <div className='content'>
        <h3 className='wel'>Welcome Back, {user.name}!</h3>
        <div className='con'>
          <div className='up-exam'>
            <div className='card-1'><CalendarMonthIcon fontSize='large' /></div>
            <div>
              <p>Upcoming Exams</p>
              <p>3</p>
            </div>
          </div>
          <div className="score">
            <div className='card-2'><EmojiEventsIcon fontSize='large' /></div>
            <div>
              <p>Total Score</p>
              <p>280</p>
            </div>
          </div>
          <div className='completed'>
            <div className='card-3'><MenuBookIcon fontSize='large' /></div>
            <div>
              <p>Completed Exams</p>
              <p>5</p>
            </div>
          </div>
          <div className="rank">
            <div className='card-4'><MilitaryTechIcon fontSize='large' /></div>
            <div>
              <p>Rank</p>
              <p>2</p>
            </div>
          </div>
        </div>
        <div className='grapg-atten'>
          <div className='graph'>
            <h3>Graph</h3>
            <div className="donut-chart">
              <div className="donut-center"></div>
            </div>
            <div className="legend">
              <div><span className="pass-dot"></span> Pass</div>
              <div><span className="fail-dot"></span> Fail</div>
            </div>
          </div>
          <div className="attented">
            <h3>Attented Exams</h3>
          </div>
        </div>
      </div>
      <div className="tips">
        <h3>💡 <span className="tip-title">Quick Tip</span></h3>
        <p>
          Use varied difficulty levels in your question bank to create comprehensive
          assessments that challenge students appropriately.
        </p>
      </div>

    </div>
  );
};

export default Student;
