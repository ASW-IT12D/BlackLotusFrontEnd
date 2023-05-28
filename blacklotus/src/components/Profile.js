import React, { useEffect, useState } from 'react';
import {  getToken } from '../Token';
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
          {profile && <img src="https://www.cripto-valuta.net/wp-content/uploads/2022/11/shiba-inu.jpg" alt="Profile" />}
        </div>
        <div className="profile-info">
          {profile && <h1>{profile.user.first_name}</h1>}
          {profile && <h2>@{profile.user.username}</h2>}
          <hr/>
          {profile && <p>{profile.profile.bio}</p>}
        </div>
      </div>
      <div className='spacer'/>
      <div className='timeline-col'>
        <div className='profile-activity'>
          {profile && <div>{profile.profile_activity.timeline.map(activity=>{
            return (
              <>
                <div className='activity'>
                    <div className='activity-pfp'>
                      {profile && <img src="https://www.cripto-valuta.net/wp-content/uploads/2022/11/shiba-inu.jpg" alt="Profile" />}
                    </div>
                    <div className='activity-text'>
                      <h4>
                        User <span style={{ color: '#0f0f0f' }}>{profile.user.username}</span> has updated the atribute "{activity.field}" from the issue with id <span style={{ color: '#1097a9' }}>{activity.issueChanged}</span>
                      </h4>
                    </div>
                    <div className='activity-date'>
                      <h5>{activity.creationdate}</h5>
                    </div>
                  
                  </div>
                <hr />
              </>
            )})}</div>}
        </div>
      </div>
    </div>
  );
}

export default Profile;