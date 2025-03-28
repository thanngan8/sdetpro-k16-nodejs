const Post = require("./Post");

class RequestHandler {
    async printTargetPost(userId, postId) {
        const post = await this._getPostById(userId, postId);
        if (post) {
            console.log(`Post ID: ${post.id}\nTitle: ${post.title}\nBody: ${post.body}`);
        } else {
            console.log("Post does not exist.");
        }
    }

    async printAllPosts(userId) {
        const posts = await this._getAllPosts(userId);
        if (posts.length > 0) {
            for (let i = 0; i < posts.length; i++) {
                console.log(`Post ID: ${posts[i].id}\nTitle: ${posts[i].title}\nBody: ${posts[i].body}\n`);
            }
        } else {
            console.log("No posts found");
        }
    }

    async _getPostById(userId, postId) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const data = await response.json();
        if (data.userId === userId) {
            return new Post(data.id, data.title, data.body, data.userId);
        } else {
            return null;
        }
    }

    async _getAllPosts(userId) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const data = await response.json();
        
        const posts = [];
        for (let i = 0; i < data.length; i++) {
            const post = new Post(data[i].id, data[i].title, data[i].body, data[i].userId);
            posts.push(post);
        }
        return posts;
    }
}

module.exports = RequestHandler;