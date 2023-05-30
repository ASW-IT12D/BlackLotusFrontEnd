import React, { useState, useEffect } from 'react';
import EditStatus from './editStatusesFolder/editStatus';
import EditType from './editStatusesFolder/editType';
import EditSeverity from './editStatusesFolder/editSeverity';
import EditPriority from './editStatusesFolder/editPriority';
import './styles/issue.css'
import 'react-quill/dist/quill.snow.css'; // Importa los estilos CSS de Quill


function StatusIssue() {


return (

  <div className='issue-page'>
    <EditStatus/>
    <EditType/>
    <EditSeverity/>
    <EditPriority/>
  </div>
);
}

export default StatusIssue;
