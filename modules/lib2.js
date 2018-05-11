// This variable is invisible outside lib2.js
let message = "<message not set>";

// call this function to set the message.
exports.setMessage = function(txt) {
    message = txt;
}

// This will print out the message
exports.printMessage = function() {
    console.log(message);
}