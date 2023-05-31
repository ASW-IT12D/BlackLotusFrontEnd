import './css/EditProfile.css';
import { useState } from 'react';
import { getToken, getUsername } from '../Token';
import { useNavigate } from 'react-router-dom';
function EditProfile() {
    const [email,setEmail] = useState('')
    const [fullName,setFullName] = useState('')
    const [bio, setBio] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const username = getUsername()
        var jsonUser = {}
        if(bio !== '') {
            jsonUser.bio = bio
        }
        if(email !== '') {
            jsonUser.email = email
        }

        if(fullName !== '') {
            jsonUser.first_name = fullName
        }

        const URL = 'http://127.0.0.1:8000/profile/' + username + '/';
        fetch( URL,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + getToken()
            },
            body: JSON.stringify(jsonUser)
        }).then(()=>{
            navigate('/')
        })
    }
  return (
    <div className='edit-user'>
        <h2>User Settings</h2>
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
                type='email'
                required
                value={getUsername()}
                disabled
            />
            <label>Email</label>
            <input
                type='email'
                required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            <label>Full name</label>
            <input
                type='text'
                required
                value={fullName}
                onChange={(e)=>setFullName(e.target.value)}
            />
            <label>Bio</label>
            <textarea
                required
                value={bio}
                onChange={(e)=>setBio(e.target.value)}
            />
            <button>SAVE</button>
        </form>
    </div>
  );
}

export default EditProfile;
