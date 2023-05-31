import React, { useEffect, useState } from 'react';
import { changeUser, getToken } from '../Token';
import './css/Filtros.css'

function MainIssues() {

  const [issues, setIssues] = useState([])
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isSeverityOpen, setIsSeverityOpen] = useState(false);
  const [isPriorityOpen, setIsPriorityOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isAssignedOpen, setIsAssignedOpen] = useState(false);
  const [isCreatorOpen, setIsCreatorOpen] = useState(false);

  const handleTypeClick = () => {
    setIsTypeOpen(!isTypeOpen);
  };

  const handleSeverityClick =() =>{
    setIsSeverityOpen(!isSeverityOpen);
  }

  const handlePriorityClick =() =>{
    setIsPriorityOpen(!isPriorityOpen);
  }

  const handleStatusClick =() =>{
    setIsStatusOpen(!isStatusOpen);
  }

  const handleAssignedClick =() =>{
    setIsAssignedOpen(!isAssignedOpen);
  }

  const handleCreatorClick=() =>{
    setIsCreatorOpen(!isCreatorOpen);
  }

  changeUser()

    const [isFiltrosOpen, setIsFiltrosOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };

    const handleButtonClick = () => {
      setIsFiltrosOpen(!isFiltrosOpen);
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
        {issues.map((issue) => {
          return <h2>{issue.subject}</h2>;
        })}
      </div>
      <div>
        <button onClick={handleButtonClick}>Filtrar</button>
        {isFiltrosOpen && (
          <div className="Filtros">
            <label>
              <input
                type="radio"
                value="option1"
                checked={selectedOption === 'option1'}
                onChange={handleOptionChange}
              />
              Include
            </label>
            <label>
              <input
                type="radio"
                value="option2"
                checked={selectedOption === 'option2'}
                onChange={handleOptionChange}
              />
              Exclude
            </label>
            <ul className='DropdownFiltros'>
              <li>
                <button onClick={handleTypeClick}>Type</button>
                {isTypeOpen && (
                  <ul>
                    <li>
                      <button>Bug</button>
                    </li>
                    <li>
                      <button>Question</button>
                    </li>
                    <li>
                      <button>Enchancement</button>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button onClick={handleSeverityClick}>Severity</button>
                {isSeverityOpen && (
                  <ul>
                    <li><button>Wishlist</button></li>
                    <li><button>Minor</button></li>
                    <li><button>Normal</button></li>
                    <li><button>Important</button></li>
                    <li><button>Critical</button></li>
                  </ul>
                )}
              </li>
              <li>
                <button onClick={handlePriorityClick}>Priorities</button>
                {isPriorityOpen && (
                  <ul>
                    <li><button>Low</button></li>
                    <li><button>Normal</button></li>
                    <li><button>Hight</button></li>
                  </ul>
                )}
              </li>
              <li>
                <button onClick={handleStatusClick}>Status</button>
                {isStatusOpen && (
                  <ul>
                    <li><button>New</button></li>
                    <li><button>In progress</button></li>
                    <li><button>Ready to Test</button></li>
                    <li><button>Closed</button></li>
                    <li><button>Needs Info</button></li>
                    <li><button>Rejected</button></li>
                    <li><button>Postponed</button></li>
                  </ul>
                )}
              </li>
              <li>
                <button onClick={handleAssignedClick}>Assigned to</button>
                {isAssignedOpen && (
                  <ul>
                    <li><button>a</button></li>
                    <li><button>b</button></li>
                    <li><button>c</button></li>
                  </ul>
                )}
              </li>
              <li>
                <button onClick={handleCreatorClick}>Created by</button>
                {isCreatorOpen && (
                  <ul>
                    <li><button>a</button></li>
                    <li><button>b</button></li>
                    <li><button>c</button></li>
                  </ul>
                )}
              </li>
              
            </ul>
          </div>
        )}
      </div>
    </div>
  );

}

export default MainIssues;