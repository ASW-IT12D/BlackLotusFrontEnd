import React, { useEffect, useState} from 'react';
import { changeUser, getToken} from '../Token';
import './css/ListarComments.css';

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${day} ${month} ${year} ${hours}:${minutes}`;
}

function user(idUser){
  if(idUser === 0) return "a";
  else if(idUser === 1) return "a";
  else return "a";
}

function SingleIssue() {
  const [comment, setComment] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const username = "a";
  const idIssue = 13;
  changeUser(0);

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
      fetch('http://127.0.0.1:8000/profile/' + username + '/', {
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
      <br></br>
      <div>
        {comment.map((comment, index) => (
          <h2 key={index}>
            <tr className='TableComments'>
              <th> <label className='CommentFoto'> {profiles[index] && profiles[index].image} </label> </th>
              <th> <label className='CommentCreator'>{user(comment.creator)}</label></th>
              <th> <label className='CommentDate'>{formatDate(comment.creationDate)}</label></th>
            </tr>
            <tr><th><label className='CommentMessage'>{comment.message}</label></th></tr>
          </h2>
        ))}
      </div>
    </div>
  );
  
}

export default SingleIssue;
