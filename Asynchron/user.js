function getUser() {
    return new Promise ((resolve,reject) => {
        setTimeout(()=> {
            resolve({
                posts:['post1','post2'],
                comments:['comment1','comment2']
            });
        },2000);
    })
}

function getPosts(user) {
    console.log(user.posts);
    return user;
}

function getComment(user) {
    console.log(user.comments);
}

getUser()
.then(val => getPosts(val))
.then(val => getComment(val));

