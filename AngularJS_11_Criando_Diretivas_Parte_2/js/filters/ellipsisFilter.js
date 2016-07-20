/**
 * Created by john on 06/04/2016.
 */

angular.module("listaTelefonica").filter("ellipsis", function () {
    return function (input, size) {
        if (input.length <= size) return input;
        var output = input.substring(0, (size || 10)) + "..."; //se size for undefined/false ele assume valor = 10
        return output;
    };
});
