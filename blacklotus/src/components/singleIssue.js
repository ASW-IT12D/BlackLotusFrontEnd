import React, { useState } from 'react';
import { changeUser, getToken } from '../Token';

function SingleIssue() {
  const [blocked_motive, setMotive] = useState('');
  const [blocked, setblock] = useState(true);
  const idIssue = 13;
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
  

  const handleMotiveChange = (event) => {
    setMotive(event.target.value);
  };

  changeUser()

  const handleButtonClick = () => {
    setblock(true);
    const data = {
      blocked_motive: blocked_motive,
      blocked: blocked
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
      <label>Motive: <input type="text" value={blocked_motive} onChange={handleMotiveChange} /></label>
      <br></br><button onClick={handleButtonClick}>Block</button>
    </div>
  );
}

export default SingleIssue;