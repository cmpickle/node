function Lib() {
    this.message = "<message not set>";
}

Lib.prototype.setMessage = function(txt) {
    this.message = txt;
};

Lib.prototype.printMessage = function() {
    console.log(this.message);
};

module.exports = Lib;