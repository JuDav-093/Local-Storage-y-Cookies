

function showCookies() {
    document.getElementById('all-cookies').innerHTML = '';
    const cookies = document.cookie.split('; ');
    const ul = document.getElementById('all-cookies');
    cookies.forEach(cookie => {
        const li = document.createElement('li');
        li.textContent = cookie;
        ul.appendChild(li);
    });
}

function deleteCookie(nombre) {
    document.cookie = `${nombre}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

function deleteAllCookies() {
    console.log('Se eliminarán todas las cookies');
    const cookies = document.cookie.split('; ');
    cookies.forEach(cookie => {
        const cookieName = cookie.split('=')[0];
        deleteCookie(cookieName);
    });
    showCookies();
}
