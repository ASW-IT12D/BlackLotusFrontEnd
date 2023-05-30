import React, { useState, useEffect } from 'react';
import './creaIssue.css'
import { getToken, getCookie } from '../../Token';
import { useParams } from 'react-router-dom';


function CreaIssue() {


  const URL = 'http://127.0.0.1:8000/issues/';
  

var [subject, setSubject] = useState('');
var [description, setDescription] = useState('');


  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleInputChangeDes = (event) => {
    setDescription(event.target.value);
  };

  const handleSelectChange = (event) => {
    
};


  return (
    <div>
        <div>
            <h1> New Issue</h1>
            <div className='containerSubject'>
            <input placeholder='Subject' className='subjectContainer' type="text" value={subject} onChange={handleSubjectChange} />
            <textarea
                placeholder='Please add descriptive text to help others understand this issue'
                value={description}
                className='descriptionContainer'
                onChange={handleInputChangeDes}/>
            </div>
        </div>
        <div>
            <select className='status-dropdown' id="dropdown" value={"New"} onChange={handleSelectChange}>
                <option value="New">New</option>
                <option value="In progress">In progress</option>
                <option value="Ready for test">Ready for test</option>
                <option value="Closed">Closed</option>
                <option value="Needs info">Needs info</option>
                <option value="Rejected">Rejected</option>
                <option value="Postponed">Postponed</option>
            </select>
        </div>
    </div>
  );
}

export default CreaIssue;