/*
    A sintaxe abaixo é outra forma de declarar os controllers.
    Passamos um array onde os n primeiros parâmetros são as dependências do controller
    e o último parâmetro é a função que deve receber como parâmetro as dependências
    declaradas.
*/
app.controller("aula09Controller1", ['$scope', 'operacoes', 'Pessoa', function($scope, operacoes, Pessoa) {

    console.log(operacoes.somar(10, 10));

    $scope.pessoa = new Pessoa();
    
}]);

/*
    Também é possível passar as dependências declarando seus respectivos nomes
    como parâmetros da função do controller.
*/
app.controller("aula09Controller2", function($scope, operacoes, Pessoa) {

    $scope.outrapessoa = new Pessoa();

    $scope.outrapessoa.nome = "Jão";
    
    console.log(operacoes.subtrair(10, 10));
});