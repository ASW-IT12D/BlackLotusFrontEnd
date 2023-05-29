
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
    return localStorage.getItem('token');

}

export function changeUser(name)
{
    if (name === 0) localStorage.setItem('token', "2e96be54b3e7cfe60ce9037709b2cb7fe24c458a");

    if (name === 1) localStorage.setItem('token', "user2");

    if (name === 2) localStorage.setItem('token', "user3");
}
