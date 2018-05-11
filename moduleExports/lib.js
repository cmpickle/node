// This variable is invisible outside lib2.js
let message = "<message not set>";

module.exports = {
    setMessage: function(txt) {
        message = txt;
    },

    printMessage: function() {
        console.log(message);
    }
}