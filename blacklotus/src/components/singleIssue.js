import React, { useState } from 'react';
import { changeUser, getToken } from '../Token';
import './css/Deadline.css';

function SingleIssue() {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');
  const [status, setStatus] = useState('New');
  const [type, setType] = useState('Bug');
  const [severity, setSeverity] = useState('Whishlist');

  //Elementos Deadline
  const [deadline, setDeadline] = useState(true);
  const [deadline_motive, setDeadlineMotive] = useState('');
  const [deadline_date, setDeadlineDate] = useState('27-06-2032');
  const idIssue = 19;

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


  const handleDeadlineMotiveChange = (event) => {
    setDeadlineMotive(event.target.value);
  };

  const handleDeadlineDateChange = (event) => {
    setDeadlineDate(event.target.value);
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

    setDeadline(true);
    const data = {
      deadline_date: deadline_date,
      deadline_motive: deadline_motive,
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
    <div className="container">
      <h1 className="title">Fijar fecha de vencimiento</h1>
      <div className="inputField">
        <input
          className="dateInput"
          type="text"
          value={deadline_date}
          onChange={handleDeadlineDateChange}
          placeholder="dd-mm-yyyy"
        />
      </div>
      <div className="inputField">
        <label className="motiveLabel">Motivo para fijar fecha de vencimiento</label>
        <br />
        <textarea
          className="motiveInput"
          value={deadline_motive}
          onChange={handleDeadlineMotiveChange}
          placeholder="¿Por qué esta issue necesita una fecha de vencimiento?"
          rows="4"
          cols="50"
        />
      </div>
      <div>
        <button className="button" onClick={handleButtonClick}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default SingleIssue;