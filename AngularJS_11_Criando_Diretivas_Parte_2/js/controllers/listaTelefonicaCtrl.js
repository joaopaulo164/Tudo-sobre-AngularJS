/**
 * Created by john on 30/03/2016.
 */

angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosAPI, operadorasAPI, serialGenerator) {
    console.log(serialGenerator.generate());
    $scope.app = "Lista Telefonica";
    $scope.contatos = [];
    $scope.operadoras = [];

//    Testa fomatação de dada de milessegundos para um padrão determinado em uiDate. Ex: 11/11/1111
//    Testa fomatação do telefone o padrão determinado em uiDate. Ex. (99) 9999-9999

/*

    $scope.contato = {
        telefone: 1234567890,
        data: 946692000000
    };
*/


    var carregarContatos = function () {
        contatosAPI.getContatos().success(function (data) {
            $scope.contatos = data;
        }).error(function (data, status) {
            $scope.error = "N�o foi poss�vel carregar os dados!";
        });
    };

    var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().success(function (data) {
            $scope.operadoras = data;
        });
    };

    $scope.adicionarContato = function (contato) {
        var serial = "";
        while (serial.length < 20) {
            serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32)
        }
        contato.serial = serialGenerator.generate();
        contato.data = new Date();
        contatosAPI.saveContato(contato).success(function (data) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregarContatos();
        });
    };
    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    };
    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

    carregarContatos();
    carregarOperadoras();
});
