// `This` will refer to the global object
console.log(Object.keys(this));

// How many keys are there on the global object?
console.log(Object.keys(window).length)

// in node.js
console.log(Object.keys(global).length)
