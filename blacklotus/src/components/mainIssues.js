import React, { useEffect, useState } from 'react';

function MainIssues() {

    const [issues, setIssues] = useState([])

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/issues/", {
        'method':'GET',
        headers: {'Content-Type':'application/json','Authorization': 'Token 21bcd501e8c7eed561c6990c8e6fc2f6af84a0dd'}
        }).then(resp => resp.json()).then(resp => setIssues(resp))
    }, [])

  return (
    <div>
        { issues.map(issue => {
            return <h2>{issue.subject}</h2>
            }
        )}
    </div>
  );
}

export default MainIssues;