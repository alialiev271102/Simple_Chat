const changeUser = () => {
    const user = document.querySelector('#user');
    const tryGetUsername = window.localStorage.getItem("username");
    if (tryGetUsername) {
        user.textContent = tryGetUsername;
    }
    user.addEventListener('click', btn => {
        btn.preventDefault();
        if (user.innerHTML === 'Anonymous') {
            const name = prompt('Enter Your Name for chat');
            if (name) {
                user.textContent = name;
                window.localStorage.setItem("username", user.textContent);
            }
        } else {
            if (confirm('Logout ?')) {
                user.textContent = 'Anonymous';
                window.localStorage.removeItem("username");
            }
        }
    })
}

changeUser();