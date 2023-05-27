import React, { useEffect, useState } from 'react';
import {  getToken } from '../Token';

const URL = 'http://127.0.0.1:8000/profile/llpfdc/';

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
    <div>
      {profile && <h1>@{profile.user.username}</h1>}
      {profile && <h1>{profile.user.first_name}</h1>}
      {profile && <h1>{profile.profile.bio}</h1>}
      {profile && <img src={profile.profile_image.url_image} alt="Profile Image" />}
    </div>
  );
}

export default Profile;