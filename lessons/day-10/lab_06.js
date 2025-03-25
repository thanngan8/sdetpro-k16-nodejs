const USER_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';
const POST_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
const userId = 1;
const targetPostId = 1;

getAllPostFromUser(userId).then(function (allPosts) {
    const targetPostContent = filterPostContent(allPosts, targetPostId);
    if (!targetPostContent) {
        console.log(`The post with id ${targetPostId} is not found!`);
    } else {
        console.log(targetPostContent);
    }
});

function getAllPostFromUser(userId) {
    fetch(USER_ENDPOINT)
    .then(function (allUsers){
        let hasUser = false;
        for (const user of allUsers) {
            if (user.id === userId) {
                hasUser = true;
                break;
            }
        }
    });
    if (hasUser) {
        return fetch(POST_ENDPOINT).then(function (response) {
            return response.json();
        })
            .then(function (allPosts) {
                return allPosts.filter(function (post) {
                    return post.userId === userId;
                });
            });
    } else {
        console.log(`User with id ${userId} is not found`);
        exit(1);
    }
}

function filterPostContent(allPosts, targetPostId) {
    const targetPost = allPosts.find(function (post) {
        return post.id === targetPostId;
    });
    return targetPost;
}
