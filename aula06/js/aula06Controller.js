app.controller('aula06Controller', function($scope) { //scope é uma variável do angular que contém as variáveis e funções do controller

    //definimos no $scope variáveis e funções que podem ser usados dentro do HTML
    $scope.nome = "Curso AngularJS Devmedia";

    $scope.olaMundo = function(nome) {
        alert("Olá, " + nome + "!");
    };

});