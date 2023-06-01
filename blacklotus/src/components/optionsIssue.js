import React, { useState, useEffect } from 'react';
import { getToken, getCookie } from '../Token';
import './css/issue.css'
import { useParams } from 'react-router-dom';
import Block from './blockIssue';


function OptionsIssue() {

return (
    <div className="button-options">
        <button className="deadline">Botón 1</button>
        <Block/>
        <button className="delete">Botón 3</button>
    </div>
);
}

export default OptionsIssue;
