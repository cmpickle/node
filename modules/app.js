//  Load up lib.js, and run it.
require("./lib.js");

let lib2 = require("./lib2.js");

lib2.setMessage("Setting lib2's message...");
lib2.printMessage();

let msg = 'Hello World';
console.log(msg);