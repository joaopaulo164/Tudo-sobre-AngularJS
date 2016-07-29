/**
 * Created by palotec on 21/07/16.
 */


angular.module("listaTelefonica").directive("uiAccordions", function () {
    //cria controller para compartilhar entre a directivas
    return {
        controller: function ($scope, $element, $attrs) {
            var accordions = [];

            // Registra o accordion
            this.registerAccordion = function (accordion) {
                accordions.push(accordion)
            };

            this.closeAll = function () {
                accordions.forEach(function (accordion) {
                    accordion.isOpened = false;

                })
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

            // Registrando accordion
            ctrl.registerAccordion(scope);
            scope.open = function () {
                ctrl.closeAll();
                scope.isOpened = true;  //função open() do scope interno
            }
        }
    };

});