/*const fs = require("fs");

function stats (file) {
    console.log("1");
    return new Promise((resolve, reject) => {
        console.log("2");
        console.log(file);
    })
}

stats('3').then((data) => console.log(data))
.catch((err) => console.log(err));
console.log("4");*/

function runFirst() {
    return new Promise( (resolve, reject ) => {
        console.log("first");
        resolve();
        console.log("aaaaa")
    })
}

runFirst().then(() => {console.log("last")} )