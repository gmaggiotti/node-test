var async = require("async");

//using Promises
function promiseFirst() {
    return new Promise( (resolve, reject ) => {
        console.log("first");
        resolve();
        console.log("aaaaa")
    })
}

promiseFirst().then(() => {console.log("last")} )

//using regular callback with settimeout
function callbackFirst() {
    console.log("a");
    callbackSecond( () => {
        console.log("b");
    });
}

function callbackSecond( cb ) {
    console.log("c");
    setTimeout(cb,0)
    console.log("d");

}
callbackFirst();

console.log("--------------------------")

//using async
function firstAsync(){
    console.log("a");
    async.setImmediate(function() {
        secondAsync();
    });
    console.log("b")
}

function secondAsync() {
    console.log("c");
}

firstAsync();