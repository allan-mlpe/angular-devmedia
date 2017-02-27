app.controller('aula07Controller', function($scope) {

    //o array não pode ter dados duplicados, caso contrário uma exceção será estourada
    $scope.nomes = ["Jão", "Maria", "Jaozão", "Zeca", "Severina"];

    $scope.pessoas = [];

    //definimos o status false como default
    $scope.newPessoa = { status: false};

    $scope.pessoas.push(
        {nome: "Jão", idade: 25, status: false},
        {nome: "Jaozão", idade: 43, status: false},
        {nome: "Maria", idade: 21, status: true}
    );

    /**
     * Adiciona uma nova pessoa no array de pessoas.
     */
    $scope.adicionarPessoa = function() {
        //adicionamos a nova pessoa no array
        $scope.pessoas.push($scope.newPessoa);
        console.dir($scope.pessoas);

        //zeramos a variável newPessoa
        $scope.newPessoa = { status: false };

    };
});