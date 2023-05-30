
export function getCookie(name) {
    let cookieValue = null;


    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();

            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));

                break;
            }
        }
    }

    return cookieValue;
}

export function getToken()
{
    if(localStorage.getItem('token') === null) localStorage.setItem('token', "2dc487c2d30e176a981e8d3f8e9b7c83da7a19f5");
    return localStorage.getItem('token');

}

export function changeUser(id)
{

    switch(id) {
        case 0:
            localStorage.setItem('token', "2dc487c2d30e176a981e8d3f8e9b7c83da7a19f5");//bee lluis123
            console.log(localStorage.getItem('token'))
            break;
        case 1:
            localStorage.setItem('token', "c63178cb814c3593c902a1ec6e3ec73ba2b79b15");//llpfdc lluis123
            console.log(localStorage.getItem('token'))
            break;
        
        case 2: 
            localStorage.setItem('token', "a75780f3f06775ba59fbc34db552d6d91a8f8a56");//admin admin
            console.log(localStorage.getItem('token'))
            break;
        
        default:
            localStorage.setItem('token', "2dc487c2d30e176a981e8d3f8e9b7c83da7a19f5");
            console.log(localStorage.getItem('token'))
            break;
    }
}

export function getUsername(id) {
    switch(id) {
        case 0:
            return "bee";//bee lluis123
        case 1:
            return "llpfdc"//llpfdc lluis123
        
        case 2: 
            return "admin"//admin admin
        
        default:
            return "bee"
    }
}
