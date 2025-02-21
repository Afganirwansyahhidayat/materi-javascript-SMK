async function helloAyo() {
    return "Hello";
}



async function hello() {
    return "Hello";
}

hello().then(() => {
        console.log("Promise Resolved");
    })
    .catch(() => {
        console.log("Promise Rejected");
    });
helloAyo()

    