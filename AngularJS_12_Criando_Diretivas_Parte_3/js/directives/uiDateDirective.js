/**
 * Created by john on 06/04/2016.
 */

angular.module("listaTelefonica").directive("uiDate", function ($filter) {
    return {
        require: "ngModel", // acessa a api da diretiva
        link: function (scope, element, attrs, ctrl) {
            //element manipula DOM por meio da jQuery Lite
            //attrs manipula os atributos da directiva
            //recebe o controller da ngModel

            //formata data
            var _formatDate = function (date) {
                date = date.replace(/[^0-9]+/g, "");
                if(date.length > 2) {
                    date = date.substring(0,2) + "/" + date.substring(2);
                }
                if(date.length > 5) {
                    date = date.substring(0,5) + "/" + date.substring(5,9);
                }
                return date
            };

            //visualiza tudo que for digitado
            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
                ctrl.$render();
            });

            //Intercepta Biding e só retorna quando value (date) for = 10. Ex: 01/01/1111.
            ctrl.$parsers.push( function (value) {
                if (value.length == 10) {
                    var dateArray = value.split("/");
                    console.log(new Date(dateArray[2], dateArray[1]-1, dateArray[0]).getTime());
                    return new Date(dateArray[2], dateArray[1]-1, dateArray[0]).getTime();
                }
            });

            //formata a data (caso já venha uma do scope) de milessegundos para o padrão setado
            ctrl.$formatters.push(function (value) {
                return $filter("date")(value, "dd/MM/yyyy");

            });

        }

    };
});
