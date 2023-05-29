import React, { useState, useEffect } from 'react';
import { getToken, getCookie } from '../Token';
import './styles/issue.css'
import 'react-quill/dist/quill.snow.css'; // Importa los estilos CSS de Quill


function Description() {
const [issue, setIssue] = useState(null)

const URL = 'http://127.0.0.1:8000/issue/12/';

useEffect(() => {
const fetchIssue = async () => {
try {
const response = await fetch(URL, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': 'Token ' + getToken()
}
});
if (response.ok) {
const data = await response.json();
setIssue(data);
} else {
throw new Error('Failed to fetch profile');
}
} catch (error) {
console.error(error);
}
};

fetchIssue();
}, []);

const [isEditingDes, setIsEditingDes] = useState(false);
const [description, setDescription] = useState('');


const handleTextClickDes = () => {
  setIsEditingDes(true);
  setDescription(issue.data.description);
  };


const handleButtonClick = () => {
const data = {
description: description,
};

setIsEditingDes(false);

issue.data.description = description;

fetch(URL, {
method: 'PUT',
headers: {
'Content-Type': 'application/json',
'X-CSRFToken': getCookie('X_CSRFTOKEN'),
'Authorization': 'Token ' + getToken()
},
body: JSON.stringify(data),
});

setDescription(issue.data.description);
};



const handleButtonCancelDesClick = () => {
  setIsEditingDes(false);
  };

  const handleInputChangeDes = (event) => {
    setDescription(event.target.value);
    };

return (
    <div className='issue-page' style={{ display: 'inline-block' }}>
        {isEditingDes ? (
            <div>
                <input className="edit-issue-description"
                    type="text"
                    value={description}
                    onChange={handleInputChangeDes}
            />
                <button className="save-button" onClick={handleButtonClick}></button>
                <button className="cross-button" onClick={handleButtonCancelDesClick}></button>
            </div>
            ) : (
            <div className='description-id-wrapper'>
                <span onClick={handleTextClickDes}>{issue && <h5 className='issue-description'>{issue.data.description}
            </h5>}</span>
            </div>
            )}
    </div>
);
}

export default Description;
