
var run = function(){
   console.log("run func");
    run1(function(){console.log("run2")})
    console.log('end');
};

var run1 = function(callback) {
    setTimeout(function () {
        console.log('run1');
        callback();
    }, 1000);

};

var exec = function(){


}

run();

const numbers = [2,4,1,5,4]

function isBiggerThanTwo (num) {
    return num > 2
}

numbers.filter(isBiggerThanTwo);

function first( ) {
    return new Promise(function ( resolve, reject) {
        resolve( () => {return "hola"} );
        console.log("3 - first func");
    }, 1 );
}

var second = function () {
    console.log("1 -beginning of second");
    first().then(( result ) => {
        console.log(result());
        console.log("2 - first CB");
    });
        console.log("4 - end of second");
}

second();