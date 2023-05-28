import React, { useState, useEffect } from 'react';
import { getToken, getCookie } from '../Token';
import './styles/issue.css'

function EditIssue() {
  const [issue, setIssue] = useState(null)

  const URL = 'http://127.0.0.1:8000/issue/12/';
  
  useEffect(() => {
    const fetchIssue = async () => {
      try {
        const response = await fetch(URL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + getToken()
          }
        });
        if (response.ok) {
          const data = await response.json();
          setIssue(data);
        } else {
          throw new Error('Failed to fetch profile');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchIssue();
  }, []);

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState('');

  const handleTextClick = () => {
    setIsEditing(true);
    setText(issue.data.subject)
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  };


  const handleButtonClick = () => {
    const data = {
      subject: text,
    };
    
    setIsEditing(false);
    issue.data.subject = text;
    fetch(URL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('X_CSRFTOKEN'),
            'Authorization': 'Token ' + getToken()
        },
        body: JSON.stringify(data),
    });

  };

  const handleButtonCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="issue-page">
    {isEditing ? (
      <div>
      <input className="edit-issue-input"
        type="text"
        value={text}
        onChange={handleInputChange}
      />
      <button className="save-button" onClick={handleButtonClick}></button>
      <button className="cross-button" onClick={handleButtonCancelClick}></button></div>
    ) : (
      <h1 className="detail-title-text">
        {issue && <div className='id-issue '>#{issue.data.id}</div>}
        <span onClick={handleTextClick}>{issue && <h2 className='issue-subject'>{issue.data.subject}
        </h2>}</span>
      </h1>
    )}
    <div className='subheader'>
      <div className='activity-text'>
          <h4>
            <a>Created by Marc</a>
          </h4>
          <h5 className='date'>{issue && issue.data.creationdate}</h5>
        </div>
        <div className='activity-pfp'>
          {issue && <img src="https://www.cripto-valuta.net/wp-content/uploads/2022/11/shiba-inu.jpg" alt="Profile" />}
        </div>

    </div>
  </div>
  );
}

export default EditIssue;
