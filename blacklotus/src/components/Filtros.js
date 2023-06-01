import React, {useState } from 'react';
import { changeUser, getToken } from '../Token';
import './css/Filtros.css'


function Filtros() {


 const [issues, setIssues] = useState([])
 const [selectedType, setSelectedType] = useState('');
 const [selectedSeverity, setSelectedSeverity] = useState('');
 const [selectedPriority, setSelectedPriority] = useState('');
 const [selectedStatus, setSelectedStatus] = useState('');
 const [selectedAssigned, setSelectedAssigned] = useState('');
 const [selectedCreator, setSelectedCreator] = useState('');


 const handleTypeChange = (event) => {
   const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
   setSelectedType(selectedValues);
 }; 
  const handleSeverityChange = (event) => {
   const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
   setSelectedSeverity(selectedValues);
 };


 const handlePriorityChange = (event) => {
   const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
   setSelectedPriority(selectedValues);
 };


 const handleStatusChange = (event) => {
   const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
   setSelectedStatus(selectedValues);
 };


 const handleAssignedChange = (event) => {
   const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
   setSelectedAssigned(selectedValues);
 };


 const handleCreatorChange = (event) => {
   const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
   setSelectedCreator(selectedValues);
 };


   const [isFiltrosOpen, setIsFiltrosOpen] = useState(false);
   const [selectedOption, setSelectedOption] = useState('Inclusive');


   const handleOptionChange = (event) => {
     setSelectedOption(event.target.value);
   };


   const handleButtonClick = () => {
     setIsFiltrosOpen(!isFiltrosOpen);
   };


   changeUser()


   const AllIssues = () => {
       setIsFiltrosOpen();
       setSelectedSeverity([]);
       setSelectedAssigned([]);
       setSelectedPriority([]);
       setSelectedStatus([]);
       setSelectedCreator([]);
       setSelectedType([]);
       fetch(`http://127.0.0.1:8000/issues/`, {
       method:'GET',
       headers: {'Content-Type':'application/json','Authorization': 'Token ' + getToken() }
       }).then(resp => resp.json()).then(resp => setIssues(resp))
    
   }


   const sendFiltros = () => {
     const url = `http://127.0.0.1:8000/issues/?Type%20of%20filter=${encodeURIComponent(selectedOption)}&Types=${encodeURIComponent(selectedType)}&Priorities=${encodeURIComponent(selectedPriority)}&Severities=${encodeURIComponent(selectedSeverity)}&Statuses=${encodeURIComponent(selectedStatus)}&AssignedTo=${encodeURIComponent(selectedAssigned)}&CreatedBy=${encodeURIComponent(selectedCreator)}`;
  
     fetch(url, {
       method: 'GET',
       headers: {
         'Content-Type': 'application/json',
         'Authorization': 'Token ' + getToken()
       },
     })
       .then(resp => resp.json())
       .then(resp => setIssues(resp));
   }
  


  


 return (
   <div>
     <div>
       {issues.map((issue) => {
         return <h2>{issue.subject}</h2>;
       })}
     </div>
    
     <div className='Globalfiltros'>
       <button className="ActivateFiltrosButton"onClick={handleButtonClick}>
         {isFiltrosOpen ? 'Close Filters' : 'Filters'}
       </button>
       {isFiltrosOpen && (
         <div className="Filtros">
           <br></br>
           <button onClick={sendFiltros}> Update Filters </button>
           <button onClick={AllIssues}> Clean Filters</button>
           <br></br>
           <label>
             <input
               type="radio"
               value="Inclusive"
               defaultChecked={true}
               checked={selectedOption === 'Inclusive'}
               onChange={handleOptionChange}
             />
             Inclusive
           </label>
           <label>
             <input
               type="radio"
               value="Exclusive"
               checked={selectedOption === 'Exclusive'}
               onChange={handleOptionChange}
             />
             Exclusive
           </label>
           <ul className='DropdownFiltros'>
               <li>
                   <select name="type" id="Type" multiple onChange={handleTypeChange}>
                        <option value="type" disabled>Type</option>
                        <option value="Bug">Bug</option>
                        <option value="Question">Question</option>
                        <option value="Disabled">Disabled</option>
                    </select>
               </li>
               <li>
                   <select name="severity" id="severity" multiple onChange={handleSeverityChange}>
                        <option value="severity" disabled>Severity</option>
                        <option value="Whishlist">Whishlist</option>
                        <option value="Minor">Minor</option>
                        <option value="Normal">Normal</option>
                        <option value="Important">Important</option>
                        <option value="Critical">Critical</option>
                    </select>
               </li>
               <li>
                   <select name="priority" id="priority" multiple onChange={handlePriorityChange}>
                        <option value="priority" disabled>Priority</option>
                        <option value="Low">Low</option>
                        <option value="Normal">Normal</option>
                        <option value="High">High</option>
                    </select>
               </li>
               <li>
                   <select name="status" id="status" multiple onChange={handleStatusChange}>
                      <option value="status" disabled>Status</option>
                      <option value="New">New</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Ready for Test">Ready for Test</option>
                      <option value="Closed">Closed</option>
                      <option value="Needs Info">Needs Info</option>
                      <option value="Rejected">Rejected</option>
                      <option value="Postponed">Postponed</option>
                   </select>
               </li>
               <li>
                   <select name="assignations" id="assignations" multiple onChange={handleAssignedChange}>
                       <option value="assignations" disabled> Assignations</option>
                       <option value="Unassigned"> Unassigned </option>
                       <option value="a"> a</option>
                       <option value="b"> b</option>
                       <option value="c"> c</option>
                          
                   </select>
               </li>
               <li>
                   <select name="creator" id="creator" multiple onChange={handleCreatorChange}>
                       <option value="creator" disabled>Created By</option>
                       <option value="a">a</option>
                       <option value="b">b</option>
                       <option value="c">c</option>
                   </select>
               </li>
           </ul>
         </div>
       )}
     </div>
   </div>
 );


}


export default Filtros;
