import React, { useState } from 'react';
import { changeUser, getToken } from '../Token';

function SingleIssue() {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');
  const [status, setStatus] = useState('New');
  const [type, setType] = useState('Bug');
  const [severity, setSeverity] = useState('Whishlist');

  const [deadline, setDeadline] = useState(false);
  const idIssue = 17;

  function getCookie(name) {
    let cookieValue = null;

    console.log(document)

    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();

            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));

                break;
            }
        }
    }

    return cookieValue;
}


  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleSeverityChange = (event) => {
    setSeverity(event.target.value);
  };

  changeUser()

  const handleButtonClick = () => {
    /*
    const data = {
      subject: subject,
      description: description,
      status: status,
      type: type,
      severity: severity,
      priority: priority
    };
    */

    setDeadline(false);
    const data = {
      deadline: deadline
    };

    fetch('http://127.0.0.1:8000/issue/'+idIssue+'/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('X_CSRFTOKEN'),
            'Authorization': 'Token ' + getToken()
        },
        body: JSON.stringify(data),
    });

  };

  return (
    <div>
      <div>
          <br></br><button onClick={handleButtonClick}>DelDeadline</button>
      </div>
      <label>Subject: <input type="text" value={subject} onChange={handleSubjectChange} /></label>
      <br></br>
      <label>Description: <input type="text" value={description} onChange={handleDescriptionChange} /></label>
      <br></br>
      <label>Status:
        <select value={status} onChange={handleStatusChange}>
          <option value="New">New</option>
          <option value="In progress">In progress</option>
          <option value="Ready for test">Ready for test</option>
          <option value="Closed">Closed</option>
          <option value="Needs info">Needs info</option>
          <option value="Rejected">Rejected</option>
          <option value="Postponed">Postponed</option>
        </select>
      </label>
      <br></br>
      <label>Types:
        <select value={type} onChange={handleTypeChange}>
          <option value="Bug">Bug</option>
          <option value="Question">Question</option>
          <option value="Disables">Disables</option>
        </select>
      </label>
      <br></br>
      <label>Severity:
        <select value={severity} onChange={handleSeverityChange}>
          <option value="Whishlist">Whishlist</option>
          <option value="Minor">Minor</option>
          <option value="Normal">Normal</option>
          <option value="Important">Important</option>
          <option value="Critical">Critical</option>
        </select>
      </label>
      <br></br>
      <label>Priority:
        <select value={priority} onChange={handlePriorityChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </label>
      <br></br><button onClick={handleButtonClick}>Submit</button>
    </div>
  );
}

export default SingleIssue;