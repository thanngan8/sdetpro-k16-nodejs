const Post = require("./Post");
const RequestHandler = require("./RequestHandler");
const readline = require("readline");

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to get user input
function lab7() {
    readlineInterface.question("Enter user ID: ", (userId) => {
        readlineInterface.question("Enter post ID: ", (postId) => {
            lab7_1(userId, postId);
            readlineInterface.close();
        });
    });
}

// Execution
lab7();

// Function Declaration
async function lab7_1(userId, postId) {
    const requestHandler = new RequestHandler();

    await requestHandler.printTargetPost(userId, postId);
    await requestHandler.printAllPosts(userId);
}