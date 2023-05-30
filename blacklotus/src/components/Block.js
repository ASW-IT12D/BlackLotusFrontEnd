import React, { useState } from 'react';
import { changeUser, getToken } from '../Token';
import './css/Block.css';

function Block() {
  const [blocked_motive, setMotive] = useState('');
  const [blocked, setBlocked] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const idIssue = 12;
  
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
  
  const closeLightbox = () => {
    setLightboxOpen(false);
    if (blocked_motive.length > 0) {
      setBlocked(true);
      const data = {
        blocked_motive: blocked_motive,
        blocked: true
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
    if (blocked) {
      // Desbloquear
      setBlocked(false);
      setMotive('');
      const data = {
        blocked: false
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
          {blocked && (
            <div className="BlockmotiveContainer">
              Blocked: {blocked_motive}
            </div>
          )}
        </div>
        <br></br>
        <div> 
          <button
            onClick={() => {handleButtonClick();}}
            className={`blockButton ${blocked ? 'unblockedStyle' : 'blockedStyle'}`}
          >
          </button>
          {lightboxOpen && (
            <div className="lightboxBlock">
              <br></br>
              <button 
                onClick={closeLightbox}
                className="crossButtonBlock"
                >
              </button>
              <br></br>
              <h2>Blocking Issue</h2>
              <br></br>
              <textarea
                className="blockmotive"
                value={blocked_motive}
                onChange={(event) => setMotive(event.target.value)}
                placeholder="Please explain the motive."
              ></textarea>
              <br></br>
              <button 
                onClick={closeLightbox}
                className="savebuttonBlock"
                >Save
              </button>
            </div>)}
        </div>
    </div>
  );
  
}

export default Block;
