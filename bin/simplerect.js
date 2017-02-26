var rec = require("./rect");

console.log("perimeter is: " + rec.perimeter(2,2) );
console.log("perimeter is: " + rec.area(2,2, function(x){
        console.log("Executing the callback with value: "+x);
    }) );