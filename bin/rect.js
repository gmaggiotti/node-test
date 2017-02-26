
exports.perimeter = function(x,y) {
    return (2*(x+y));
};

exports.area = function(x,y, callback ) {
    callback(x);
    return (x*y);
};

