import React, { useState } from 'react';
import './css/NavBar.css';

import {  getToken } from '../Token';
const NavBar = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  let componentToRender;

  console.log(props.userProp)
  
  switch (selectedOption) {
    case 'timeline':
      componentToRender = <Timeline profileProp={props.userProp}/>;
      break;
    case 'watchers':
      componentToRender = <Watchers profileProp={props.userProp}/>;
      break;
    case 'token':
      componentToRender = <Token/>;
      break;
    default:
      componentToRender = <Timeline profileProp={props.userProp}/>;
      break;
  }

  return (
    <div className='bar'>
      <nav>
        <ul>
          <li onClick={() => handleOptionClick('timeline')}>Timeline</li>
          <li onClick={() => handleOptionClick('watchers')}>Watchers</li>
          <li onClick={() => handleOptionClick('token')}>Token</li>
        </ul>
      </nav>
      {componentToRender}
    </div>
  );
};

const Timeline = (props) => {
    return (
      <div>
        {props.profileProp.profile_activity.timeline.map((activity, index) => (
          <React.Fragment key={index}>
            <div className='profile-activity'>
                <div className='profile-activity-pfp'>
                  <img src={props.profileProp.profile_image.url_image} alt="Profile" />
                </div>
                <div className='profile-activity-text'>
                  <h4>
                    User <span style={{ color: '#0f0f0f' }}>{props.profileProp.user.username}</span> has updated the atribute "{activity.field}" from the issue with id <span style={{ color: '#1097a9' }}>#{activity.issueChanged}</span>
                  </h4>
                </div>
                <div className='profile-activity-date'>
                  <h5>{activity.creationdate}</h5>
                </div>
              
                </div>
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
};
const Watchers = (props) => {
  return (      
  <div>
    {props.profileProp.profile_activity.watchers.map((issue, index) => (
      <React.Fragment key={index}>
        <div className='profile-activity'>
            <div className='profile-activity-pfp'>
              <img src={props.profileProp.profile_image.url_image} alt="Profile" />
            </div>
            <div className='profile-activity-text'>
                <h4><span style={{ color: '#1097a9' }}>#{issue.id}</span> {issue.subject}x</h4>
                
              
            </div>
            <div className='profile-activity-date'>
              <h5>{issue.modifieddate}</h5>
            </div>
          
            </div>
      <hr />
    </React.Fragment>
  ))}
</div>
    );
};

const Token = () => {
  return <div>{getToken()}</div>;
};

export default NavBar;