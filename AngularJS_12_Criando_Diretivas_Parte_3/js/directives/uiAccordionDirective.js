/**
 * Created by palotec on 21/07/16.
 */


angular.module("listaTelefonica").directive("uiAccordions", function () {
    //cria controller para compartilhar entre a directivas
    return {
        controller: function ($scope, $element, $attrs) {
            this.helloWorld = function () {
                console.log("Hello World")
            }
        }
    };

});

angular.module("listaTelefonica").directive("uiAccordion", function () {

    return {
        templateUrl: "view/accordion.html",
        transclude: true,
        scope: {
            title: "@title"  //realiza a interpolação com o title da directiva <ui-accordion> do aquivo index.html.
        },
        require: "^uiAccordions", //Acessa a API do pai uiAccordions, igual "ngModel" do uiDate só que naquele caso era local
        link: function (scope, element, attrs, ctrl) {
            ctrl.helloWorld();
            scope.open = function () {
                scope.isOpened = !scope.isOpened;  //função open() do scope interno
            }
        }
    };

});