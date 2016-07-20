/**
 * Created by john on 30/03/2016.
 */

angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosAPI, operadorasAPI, serialGenerator) {
    console.log(serialGenerator.generate());
    $scope.app = "Lista Telefonica";
    $scope.contatos = [];
    $scope.operadoras = [];

    var carregarContatos = function () {
        contatosAPI.getContatos().success(function (data) {
            $scope.contatos = data;
        }).error(function (data, status) {
            $scope.error = "Não foi possível carregar os dados!";
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
