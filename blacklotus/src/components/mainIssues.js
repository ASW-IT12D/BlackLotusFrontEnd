import React, { useEffect, useState } from 'react';
import { getToken, changeUser } from '../Token';
import {Link} from 'react-router-dom';

function MainIssues() {

  const [issues, setIssues] = useState([])

  changeUser(0);
  
  useEffect(()=>{
        fetch("http://127.0.0.1:8000/issues/", {
        'method':'GET',
        headers: {'Content-Type':'application/json','Authorization': 'Token ' + getToken() }
        }).then(resp => resp.json()).then(resp => setIssues(resp))
    }, [])

  return (
    <div>
        {issues.map(issue => {
            return  <li class="nav-item active">
                      <Link to={"issue/"+issue.id} className="nav-link"> {issue.id} {issue.subject} </Link>
                    </li>
            }
        )}
    </div>
  );
}

export default MainIssues;