
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
    if (name === 0) localStorage.setItem('token', "1381821b0d47a92f5a9ac81e350542aa2e655c19");

    if (name === 1) localStorage.setItem('token', "user2");

    if (name === 2) localStorage.setItem('token', "user3");
}
