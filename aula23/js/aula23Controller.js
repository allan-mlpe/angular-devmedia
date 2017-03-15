app.controller('aula23Controller', function($scope) {

    // ui.unique possibilita a filtragem de um array 
    //eliminando as repetições (deixando apenas 1)
    $scope.usuarios = [
        {nome: "Jão", email: "jao@email.com"},
        {nome: "Jaozão", email: "jaozao@email.com"},
        {nome: "Zefinha", email: "zefa@email.com"},
        {nome: "Jão", email: "jao@email.com"},
        {nome: "Jão", email: "jaaaao@email.com"},
        {nome: "Alípio", email: "lip@email.com"},
        {nome: "Jão", email: "jao@email.com"},
    ];

    /**
     * Valida se a confirmação da senha é igual a senha informada anteriormente
     */
    $scope.validar = function(valor) {
        return valor === $scope.senha1;
    }

});