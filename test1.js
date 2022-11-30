let { z } = require("./test");

function add(a,b){
    c = a+b;
    return c;
};

function sub(x,y){
    z = x-y;
    return z;
};
add(2,2);
sub(5,2);

module.exports = {c, z};