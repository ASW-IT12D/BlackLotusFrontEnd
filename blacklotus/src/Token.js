
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
    if(localStorage.getItem('token')){
        return localStorage.getItem('token');
    }
    else {
        changeUser(0)
        return localStorage.getItem('token')
    }
}

export function changeUser(id)
{
    
    switch(id) {
        case 0:
            localStorage.setItem('token', "04344c746a62a5b214d71c1e696d3617d600d0c8");//bee lluis123
            
            break;
        case 1:
            localStorage.setItem('token', "04344c746a62a5b214d71c1e696d3617d600d0c8");//llpfdc lluis123
            
            break;
        
        case 2: 
            localStorage.setItem('token', "04344c746a62a5b214d71c1e696d3617d600d0c8");//admin admin
            
            break;
        
        default:
            localStorage.setItem('token', "04344c746a62a5b214d71c1e696d3617d600d0c8");
            
            break;
    }
}

export function getUsername() {
    
    switch(localStorage.getItem('token')) {
        case "04344c746a62a5b214d71c1e696d3617d600d0c8":
            return "MarcChavez";
        case "04344c746a62a5b214d71c1e696d3617d600d0c8":
            return "MarcChavez"
        case "04344c746a62a5b214d71c1e696d3617d600d0c8": 
            return "MarcChavez";
    }
}

export function getIdUser() {
    switch(localStorage.getItem('token')) {
        case "04344c746a62a5b214d71c1e696d3617d600d0c8":
            return 0;
        case "04344c746a62a5b214d71c1e696d3617d600d0c8":
            return 1;        
        case "04344c746a62a5b214d71c1e696d3617d600d0c8": 
            return 2;
    }
}

export function getUsernameId(id){
    switch (id) {
        case 1:
            return "MarcChavez"
        case 2:
            return "MarcChavez"
        case 3:
            return "MarcChavez"
    }
}
