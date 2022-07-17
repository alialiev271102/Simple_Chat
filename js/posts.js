const getPosts = async () => {
    const obj = await fetch('https://forum-a998e-default-rtdb.firebaseio.com/Posts.json/');
    const results = await obj.json();
    for(let result in results) {
        posts.push(results[result]);
    }
    posts.forEach(post => {
        addPage(post);
    })
}
const setPosts = async (post) => {
    try {
        const response = await fetch('https://forum-a998e-default-rtdb.firebaseio.com/Posts.json/', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(post)
        })
        console.log(response)
    } catch(e) {
        console.log(e);
    }
}

let posts = [];
let currentUser = 'Anonymous'

const addPage = (obj) => {
    const discussion = document.createElement('div');
    discussion.innerHTML = "<div class='message'>" + "<strong>" + obj.user + "</strong> : " + obj.content +"</div>";
    document.querySelector('.discussion-field').prepend(discussion);
}
getPosts();


const button = document.querySelector('#message-input');
button.addEventListener('submit', () => {
    const obj = {
        user: currentUser,
        content: document.querySelector('#discussion-content').value,
    }
    posts.push(obj);
    addPage(obj);
    setPosts(obj);
})
