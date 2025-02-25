const readline = require('readline-sync');
const POST_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
const USER_ENDPOINT = 'https://jsonplaceholder.typicode.com/users'

const userId = readline.question("Enter user ID: ");
const targetPostId = readline.question("Enter post ID: ");


getAllPostFromUser(userId).then(function (allPosts) {
    const targetPostContent = filterPostContent(allPosts, targetPostId);
    if (!targetPostContent) {
        console.log(`The post with id ${targetPostId} is not found!`);
    } else {
        console.log(`Post Content for user ${userId} and post ${targetPostId}:`);
        console.log(targetPostContent);
    }
});

function getAllPostFromUser(userId) {
    return fetch(USER_ENDPOINT)
        .then(function (response) {
            if (!response.ok) {
                console.log('Failed to fetch users');
                return [];
            }
            return response.json();
        })
        .then(function (allUsers) {
            let hasUser = false;
            for (const user of allUsers) {
                if (user.id === parseInt(userId)) {
                    hasUser = true;
                    break;
                }
            }
            if (hasUser) {
                return fetch(`${POST_ENDPOINT}?userId=${userId}`);
            } else {
                console.log(`User with id ${userId} is not found`);
                return [];
            }
        })
        .then(function (response) {
            if (!response.ok) {
                console.log('Failed to fetch posts');
                return [];
            }
            return response.json();
        })
        .then(function (allPosts) {
            return allPosts;
        });
}

function filterPostContent(allPosts, targetPostId) {
    const targetPost = allPosts.find(function (post) {
        return post.id === parseInt(targetPostId);
    });
    return targetPost;
}