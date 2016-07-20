/**
 * Created by john on 06/04/2016.
 */

angular.module("listaTelefonica").directive("uiAlert", function () {
    return {
        templateUrl: "view/alert.html",
        replace: true,
        restrict: "AE",
        scope: {
            topic: "@title",  //vinculo com o title do  <ui-alert>
            message: "=message"  //vinculo bidirecional com o message do  <ui-alert>
        },
        transclude: true
    };
});
