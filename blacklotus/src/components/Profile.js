import React, { useEffect, useState } from 'react';
import {  getToken } from '../Token';
import NavBar from './NavBarProfile';
import './css/Profile.css';
const URL = 'http://127.0.0.1:8000/profile/admin/';

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
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

    fetchProfile();
  }, []);

  return (
    <div className='profile'>
      <div className='profile-col'>
        <div className='profile-image'>
          {profile && <img src={profile.profile_image.url_image} alt="Profile" />}
        </div>
        <div className="profile-info">
          {profile && <h1>{profile.user.first_name}</h1>}
          {profile && <h2>@{profile.user.username}</h2>}
          <hr/>
          {profile && <p>{profile.profile.bio}</p>}
        </div>
      </div>
      
      <div className='timeline-col'>
        <div className='profile-activity'>
          <NavBar userProp={profile}/>
        </div>
      </div>
    </div>
  );
}

export default Profile;