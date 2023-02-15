let obj2 = new obj.constructor();

function Object(prop) {
    this.prop = prop
}

Object.prototype.action = true;


let obj = new Object(prop);// works!

//OR:

function Object1(prop) {
    this.prop = prop
}

Object1.prototype = { // also works
    action: true,
    constructor: Object1
} 


function Object2(prop) {
    this.prop = prop
}

Object.prototype = { // doesn't work, the prototype property is fully rewritten 
     action: true
}