import React, { useEffect, useState } from 'react';
import { getToken,getUsernameId } from '../Token';
import './css/Issues.css';
import {Link} from 'react-router-dom';
function MainIssues() {
  const [issues, setIssues] = useState([]);
  useEffect(() => {
    console.log(getToken())
    fetch("http://127.0.0.1:8000/issues/", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + getToken()
      }
    })
      .then(resp => resp.json())
      .then(data => setIssues(data))
      .catch(error => console.error(error));
  }, []);

  
  const getClassName = (num) => {
    switch (num) {
      case 1:
        return "level-0";
      case 2:
        return "level-1";
      case 3:
        return "level-2";
      case 4:
        return "level-3";
      case 5:
        return "level-4";
      default:
        return "";
    }
  };

  const getTextStatus = (num) => {
    switch (num) {
      case 1:
        return "New";
      case 2:
        return "In progress";
      case 3:
        return "Ready for test";
      case 4:
        return "Closed";
      case 5:
        return "Needs info";
      case 6:
        return "Rejected";
      case 7:
        return "Postponed";
      default:
        return "";
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <div className='table'>
      {issues.map((issue, index) => (
        <React.Fragment key={index}>
          <div className='row-issue'>
            <div className={getClassName(issue.type)} />
            <div className={getClassName(issue.severity)} />
            <div className={getClassName(issue.priority)} />
            <div className='issue-text'>
              <a>
                <span style={{ color: '#1097a9' }}>#{issue.id}</span> {issue.subject}
              </a>
            </div>
            <div className='issue-status'>
              <a>{getTextStatus(issue.status)}</a>
            </div>
            <div className='issue-date'>
              <a>{formatDate(issue.modifieddate)}</a>
            </div>
            {issue.asignedTo[0] &&(
            <div className='issue-assign'>
              
              <Link to={'/profile/'+ getUsernameId(issue.asignedTo[0])}  className="nav-link">
                {getUsernameId(issue.asignedTo[0])}
              </Link>
            </div>)}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default MainIssues;
