import React, { useState, useEffect } from 'react';
import { changeUser, getToken } from '../Token';

function SingleIssue() {
  const [subject, setSubject] = useState('');
  const [filteredIssues, setFilteredIssues] = useState([]);

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  useEffect(() => {
    const url = `http://127.0.0.1:8000/issues/?subject=${subject}`;
  
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + getToken()
      }
    })
      .then(response => response.json())
      .then(data => setFilteredIssues(data))
      .catch(error => console.log(error));
  }, [subject]);
  

  return (
    <div>
      <label>
        Subject: <input type="text" value={subject} onChange={handleSubjectChange} />
      </label>
      <br />
      {filteredIssues.map((issue) => (
        <div key={issue.id}>
          <h2>{issue.subject}</h2>
          <p>{issue.description}</p>
        </div>
      ))}
    </div>
  );
}

export default SingleIssue;
