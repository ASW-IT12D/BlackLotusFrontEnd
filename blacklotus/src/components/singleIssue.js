import React, { useState } from 'react';
import { changeUser, getToken} from '../Token';

function SingleIssue() {
  const [comment, setComment] = useState('');
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
  

  const handleComment = (event) => {
    setComment(event.target.value);
  };

  changeUser()

  const handleButtonClick = () => {
    const data = {
      comment: comment,
    };
    
    fetch('http://127.0.0.1:8000/comment/'+idIssue+'/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('X_CSRFTOKEN'),
            'Authorization': 'Token '+ getToken()
        },
        body: JSON.stringify(data),
    });

  };

  return (
    <div>
      <label>Comment here: <input type="text" value={comment} onChange={handleComment} /></label>
      <br></br><button onClick={handleButtonClick}>Comment</button>
    </div>
  );
}

export default SingleIssue;