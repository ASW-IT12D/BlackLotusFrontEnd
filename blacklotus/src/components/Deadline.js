import React, { useState } from 'react';
import { changeUser, getToken } from '../Token';
import './css/Deadline.css';

function Deadline() {
  const [deadline_motive, setDeadlineMotive] = useState('');
  const [deadline_date, setDeadlineDate] = useState('');
  const [deadline, setDeadline] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
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

  const openLightbox = () => {
    setLightboxOpen(true);
  };
  
  const realCloseLightbox = () => {
    setLightboxOpen(false)
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    if (deadline_date.length > 0) {
      setDeadline(true);
      const data = {
        deadline_motive: deadline_motive,
        deadline_date:deadline_date,
        deadline: true
      };
  
      fetch('http://127.0.0.1:8000/issue/' + idIssue + '/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCookie('X_CSRFTOKEN'),
          'Authorization': 'Token ' + getToken()
        },
        body: JSON.stringify(data),
      });
    }
  };
  

  changeUser()

  const handleButtonClick = () => {
    if (deadline) {
      // Desdeadlinear 
      setDeadline(false);
      setDeadlineMotive('');
      const data = {
        deadline: false
      };
    
      fetch('http://127.0.0.1:8000/issue/' + idIssue + '/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCookie('X_CSRFTOKEN'),
          'Authorization': 'Token ' + getToken()
        },
        body: JSON.stringify(data),
      });
      
    } else {
      openLightbox();
    }
  };

  return (
    <div>
        <div>
          {deadline && (
            <div className="DeadlinemotiveContainer">
              {deadline_date}
            </div>
          )}
        </div>
        <br></br>
        <div> 
          <button
            onClick={() => {handleButtonClick();}}
            className={`deadlineButton ${deadline ? 'undeadlineStyle' : 'deadlinedStyle'}`}
          >
          </button>
          {lightboxOpen && (
            <div className="lightboxDeadline">
              <br></br>
              <button 
                onClick={realCloseLightbox}
                className="crossButtonDeadline"
                >
              </button>
              <br></br>
              <h2>Set due date</h2>
              <br></br>
              <textarea
                className="deadlinedate"
                value={deadline_date}
                onChange={(event) => setDeadlineDate(event.target.value)}
                placeholder="dd-mm-yyyy"
              ></textarea>
              <br></br>
              <textarea
                className="deadlinemotive"
                value={deadline_motive}
                onChange={(event) => setDeadlineMotive(event.target.value)}
                placeholder="Please explain the motive."
              ></textarea>
              <br></br>
              <button 
                onClick={closeLightbox}
                className="savebuttonDeadline"
                >Save
              </button>
            </div>)}
        </div>
    </div>
  );
  
}

export default Deadline;