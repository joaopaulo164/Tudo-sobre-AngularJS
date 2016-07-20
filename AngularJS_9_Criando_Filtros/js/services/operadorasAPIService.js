/**
 * Created by john on 30/03/2016.
 */
angular.module("listaTelefonica").service("operadorasAPI", function ($http, config) {
    this.getOperadoras = function () {
        return $http.get(config.baseUrl + "/operadoras");
    };

});