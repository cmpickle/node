//  Load up lib.js, and run it.
let lib = require("./lib.js");
let obj = require("./libConstructor.js");

lib.setMessage("Setting lib's message...");
lib.printMessage();

let msg1 = new obj();
msg1.setMessage("Message 1!");

let msg2 = new obj();
msg2.setMessage("Message 2!");

msg1.printMessage();
msg2.printMessage();