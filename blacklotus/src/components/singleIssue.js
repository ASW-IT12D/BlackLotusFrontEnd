import React, { useState } from 'react';
import { getToken } from '../Token';

function SingleIssue() {
  const [watcherName, setWatcherName] = useState('');
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

  const handleWatcherNameChange = (event) => {
    setWatcherName(event.target.value);
  };

  const handleAssignWatcher = () => {
    const data = {
      watchers: watcherName
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
      <label>Watcher Name: <input type="text" value={watcherName} onChange={handleWatcherNameChange} /></label>
      <br />
      <button onClick={handleAssignWatcher}>Asignar Watcher</button>
    </div>
  );
}

export default SingleIssue;
