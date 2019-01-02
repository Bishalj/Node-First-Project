var methods = {};
var output = 1000;
methods.updateServer = function() {
    console.log('Important functions');
}

methods.cookies = function() {
    console.log('Love cookies');
}

methods.node = function() {
    console.log("Node is Awesome");
}

methods.multiply = function(a){
    output = a*a;
    return output;
}


exports.data = methods;
exports.output = output;