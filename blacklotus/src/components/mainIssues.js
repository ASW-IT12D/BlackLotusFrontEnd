import React, { useEffect, useState } from 'react';
import { changeUser, getToken } from '../Token';

function MainIssues() {

  const [issues, setIssues] = useState([])
  changeUser(0)

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/issues/", {
        'method':'GET',
        headers: {'Content-Type':'application/json','Authorization': 'Token ' + getToken() }
        }).then(resp => resp.json()).then(resp => setIssues(resp))
    }, [])

  return (
    <div>
        {issues.map(issue => {
            return <h2>{issue.subject}</h2>
            }
        )}
    </div>
  );
}

export default MainIssues;