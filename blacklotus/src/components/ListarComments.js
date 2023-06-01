import React, { useEffect, useState} from 'react';
import { changeUser, getToken} from '../Token';
import './css/ListarComments.css';
import { useParams } from 'react-router-dom';
import AddComment from './postComment';

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
  if(idUser === 0) return "MarcChavez";
  else if(idUser === 1) return "a";
  else return "a";
}

function ListarComments() {
  const [comment, setComment] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const username = "a";
  changeUser(0);

  const { id } = useParams()

  useEffect(() => {
    
    fetch('http://127.0.0.1:8000/comment/' + id + '/', {
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
      <AddComment/>
      <div>
        {comment.map((comment, index) => {
          return (
              <>
                <div className='subheaderComments'>
                <div className='comment-pfp'>
                      <img src="https://www.cripto-valuta.net/wp-content/uploads/2022/11/shiba-inu.jpg" alt="Profile"/>
                  </div>
                  <div className='comment-text'>
                    <div className='containerCommentNameDate'>
                      <div>
                          <label className='CommentCreator'>
                              <a>{user(comment.creator)}</a>
                          </label>
                      </div>
                      <div >
                          <label className='CommentDate'>{formatDate(comment.creationDate)}</label>
                      </div>
                    </div>
                    <div className='Comment-id-wrapper'>
                        <label className='CommentMessage'>{comment.message}</label>
                    </div>
                  </div>
                </div>
                <hr/>
            </>
          )
        })}
      </div>
    </div>
  );
  
}

export default ListarComments;
