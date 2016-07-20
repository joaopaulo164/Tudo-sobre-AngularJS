/**
 * Created by john on 01/04/2016.
 */

angular.module("listaTelefonica").provider("serialGenerator", function (config) {
    console.log(config);

    var _length = 20;

    this.getLength = function () {
        return _length;
    };

    this.setLengh = function (length) {
        _length = length;
    };

    this.$get = function () {
        return {
            generate: function () {
                var serial = "";
                while (serial.length < _length) {
                    serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32)
                }
                return serial;
            }

        };
    };
});