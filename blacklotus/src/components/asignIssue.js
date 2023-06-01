import React, { useState, useEffect } from 'react';
import { changeUser, getToken,getCookie } from '../Token';
import './css/Watchers.css';
import { useParams } from 'react-router-dom';

function Asign() {
  const [watcherName, setWatcherName] = useState('');
  const [lightboxOpen, setLightboxOpen] = useState(false);
 
  const { id } = useParams();
  
  const openLightbox = () => {
    setLightboxOpen(true);
  };
  
  const realCloseLightbox = () => {
    setLightboxOpen(false)
  };

  const handleWatcherNameChange = (event) => {
    setWatcherName(event.target.value);
  };

  const closeLightbox = () => {
    const data = {
      watchers: watcherName
    };

      fetch('http://127.0.0.1:8000/issue/' + id + '/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCookie('X_CSRFTOKEN'),
          'Authorization': 'Token ' + getToken()
        },
        body: JSON.stringify(data),
      });
      realCloseLightbox();
  };
  

  changeUser()

  const handleButtonClick = () => {
    const data = {
        asignTo: watcherName
    };
    
      fetch('http://127.0.0.1:8000/issue/' + id + '/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCookie('X_CSRFTOKEN'),
          'Authorization': 'Token ' + getToken()
        },
        body: JSON.stringify(data),
      });
      
     
  
   openLightbox();
    
  };

  const handleButtonAddMe = () => {
    setWatcherName('PouEmo');
    const data = {
      watchers: watcherName
    };
    
      fetch('http://127.0.0.1:8000/issue/' + id + '/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCookie('X_CSRFTOKEN'),
          'Authorization': 'Token ' + getToken()
        },
        body: JSON.stringify(data),
      });
      
     
  
   realCloseLightbox();
    
  };

  return (
    <div>
    <label>Assigned</label>
    <div>
        {watcherName && (
        <div className='watcher-Profiles'>
            <img src="https://www.cripto-valuta.net/wp-content/uploads/2022/11/shiba-inu.jpg" alt="Icono" className="iconoBoton" />
            <a>
                {watcherName}
            </a>
    </div>
        )}
    </div>
    <br></br>
    <div>
        <button className='boton-Watchers'
                onClick={()=> {handleButtonClick();}}>
                    + Add Asigned
        </button>
        <button className='boton-WatchersMe'
                onClick={()=> {handleButtonAddMe();}}>
            Asign to me
        </button>
        {lightboxOpen && (
        <div className="lightboxDeadline">
            <br></br>
            <button
                    onClick={realCloseLightbox}
                    className="crossButtonWatchers"
            >
            </button>
            <br></br>
            <h2>Asign to</h2>
            <br></br>
            <div className='boton-Profiles'>
                <img src="https://www.cripto-valuta.net/wp-content/uploads/2022/11/shiba-inu.jpg" alt="Icono" className="iconoBoton" />
                <button>
                    User 1
                </button>
            </div>
            <div className='boton-Profiles'>
                <img src="https://www.cripto-valuta.net/wp-content/uploads/2022/11/shiba-inu.jpg" alt="Icono" className="iconoBoton" />
                <button>
                    User 2
                </button>
            </div>
            <div className='boton-Profiles'>
                <img src="https://www.cripto-valuta.net/wp-content/uploads/2022/11/shiba-inu.jpg" alt="Icono" className="iconoBoton" />
                <button>
                    User 3
                </button>
            </div>
            <br></br>
            <button onClick={closeLightbox} className="savebuttonDeadline">
                Save
            </button>
        </div>
        )}
    </div>
</div>
  );
}

export default Asign;