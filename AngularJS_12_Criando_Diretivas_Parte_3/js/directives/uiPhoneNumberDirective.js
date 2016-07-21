/**
 * Created by john on 06/04/2016.
 */

angular.module("listaTelefonica").directive("uiPhoneNumber", function ($filter) {
    return {
        require: "ngModel", // acessa a api da diretiva
        link: function (scope, element, attrs, ctrl) {
            //element manipula DOM por meio da jQuery Lite
            //attrs manipula os atributos da directiva
            //recebe o controller da ngModel

            //formata numero do telefone
            var _formatPhoneNumber = function (phoneNumber) {
                phoneNumber = phoneNumber.replace(/[^0-9]+/g, "");
                if(phoneNumber.length > 0) {
                    phoneNumber = "(" + phoneNumber.substring(0,2) + ")" + phoneNumber.substring(2);
                }
                if(phoneNumber.length > 4) {
                    phoneNumber = phoneNumber.substring(0,4) + " " + phoneNumber.substring(4);
                }
                if(phoneNumber.length > 9) {
                    phoneNumber = phoneNumber.substring(0,9) + "-" + phoneNumber.substring(9,13);
                }
                // console.log(phoneNumber);
                return phoneNumber
            };

            //visualiza tudo que for digitado
            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatPhoneNumber(ctrl.$viewValue));
                ctrl.$render();
            });

            //Intercepta Biding e só retorna quando value (date) for = 10. Ex: 01/01/1111.
            ctrl.$parsers.push( function (value) {
                if (value.length == 14) {
                    var phoneNumber = value.substring(1,3) + value.substring(5,9) + value.substring(10,14);
                    console.log(phoneNumber);
                    return phoneNumber;
                }
            });


            //formata a telefone (caso já venha uma do scope) para o padrão setado na função _formatPhoneNumber
            ctrl.$formatters.push(function (value) {
                var phoneNumber;
                if (value) {
                    phoneNumber = _formatPhoneNumber(value.toString());
                    // console.log(phoneNumber);
                }
                return phoneNumber;
            });

        }

    };
});
