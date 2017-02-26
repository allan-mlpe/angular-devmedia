/**
 * O módulo é a aplicação (ou uma parte da aplicação) em si.
 */
//o objeto angular é criado assim que adicionamos a lib do Angular
var appSaudacao = angular.module('appSaudacao', []); //nas chaves nós podemos injetar dependências como plugins e recursos externos do angular

appSaudacao.filter('ola', function() {
    return function(nome) {
        return "Olá, " + nome + "!";
    }

});