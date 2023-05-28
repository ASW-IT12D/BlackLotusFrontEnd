import React, { useEffect, useState} from 'react';
import { changeUser, getToken} from '../Token';

function SingleIssue() {
  const [comment, setComment] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const idIssue = 13;
  changeUser();

  useEffect(() => {
    fetch('http://127.0.0.1:8000/comment/' + idIssue + '/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + getToken()
      }
    })
    .then(resp => resp.json())
    .then(resp => setComment(resp));
  }, []);

  useEffect(() => {
    comment.forEach(comment => {
      fetch('http://127.0.0.1:8000/profile/' + comment.creator + '/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + getToken()
        }
      })
      .then(resp => resp.json())
      .then(resp => setProfiles(prevProfiles => [...prevProfiles, resp]));
    });
  }, [comment]);

  return (
    <div>
      {comment.map((comment, index) => (
        <h2 key={index}>
          {profiles[index] && profiles[index].image} {comment.creator}, {comment.message}, {comment.creationDate}
        </h2>
      ))}
    </div>
  );
}

export default SingleIssue;
