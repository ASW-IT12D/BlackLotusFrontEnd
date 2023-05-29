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

  changeUser();

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

    fetch(`http://127.0.0.1:8000/issue/${idIssue}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
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
      <button onClick={handleButtonClick}>Submit</button>
    </div>
  );
}  

export default SingleIssue;