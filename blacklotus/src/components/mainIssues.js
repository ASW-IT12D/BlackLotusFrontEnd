import React, { useEffect, useState } from 'react';
import { changeUser, getToken } from '../Token';

function MainIssues() {

  const [issues, setIssues] = useState([])
  changeUser()

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };

    const handleButtonClick = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/issues/", {
        'method':'GET',
        headers: {'Content-Type':'application/json','Authorization': 'Token ' + getToken() }
        }).then(resp => resp.json()).then(resp => setIssues(resp))
    }, [])

  return (
    <div>
      <div>
          {issues.map(issue => {
              return <h2>{issue.subject}</h2>
              }
          )}
      </div>
      <div>
        <button onClick={handleButtonClick}>Filtrar</button>
        {isDropdownOpen && (
          <div className="dropdown">
            <label>
              <input
                type="radio"
                value="option1"
                checked={selectedOption === 'option1'}
                onChange={handleOptionChange}
              />
              Opción 1
            </label>
            <label>
              <input
                type="radio"
                value="option2"
                checked={selectedOption === 'option2'}
                onChange={handleOptionChange}
              />
              Opción 2
            </label>
          </div>
        )}
      </div>
    </div>
  );

}

export default MainIssues;