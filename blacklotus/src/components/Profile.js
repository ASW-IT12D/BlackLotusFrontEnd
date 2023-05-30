import React, { useEffect, useState } from 'react';
import { changeUser, getToken, getUsername } from '../Token';
import NavBar from './NavBarProfile';
import './css/Profile.css';

function Profile() {
  const [profile, setProfile] = useState(null);
  const [selectedUser, setSelectedUser] = useState(0);

  const fetchProfileData = async (username) => {
    const URL = 'http://127.0.0.1:8000/profile/' + username + '/';
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
        setProfile(data);
      } else {
        throw new Error('Failed to fetch profile');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const username = getUsername(selectedUser);
    fetchProfileData(username);
  }, [selectedUser]);

  const handleButtonClick = () => {
    const newSelectedUser = Number(document.getElementById('userSelector').value);
    setSelectedUser(newSelectedUser);
    changeUser(newSelectedUser);
  };

  return (
    <div className='profile'>
      <div className='profile-col'>
        <div className='profile-image'>
          {profile && <img src={profile.profile_image.url_image} alt="Profile" />}
        </div>
        <div className="profile-info">
          {profile && <h1>{profile.user.first_name}</h1>}
          {profile && <h2>@{profile.user.username}</h2>}
          <hr />
          <div className='profile-bio'>
            {profile && <p>{profile.profile.bio}</p>}
          </div>
          <hr />
          <div className='profile-change'>
            
            <div className='profile-select-user'>
              <select id="userSelector">
                <option value="" disabled>Change the user</option>
                <option value={0}>bee</option>
                <option value={1}>llpfdc</option>
                <option value={2}>admin</option>
              </select>
            </div>
            <div className='profile-select-button'>
              <button className='button-changeUser' onClick={handleButtonClick}>CHANGE</button>
            </div>
          </div>
        </div>
      </div>
          
      <div className='timeline-col'>
        <div className='profile-activity'>
          <NavBar userProp={profile} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
