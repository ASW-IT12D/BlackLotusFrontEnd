
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
    if (name === 0) localStorage.setItem('token', "7113cb8311ce77c16b9227e88aba4241e3b478c9");

    if (name === 1) localStorage.setItem('token', "user2");

    if (name === 2) localStorage.setItem('token', "user3");
}
