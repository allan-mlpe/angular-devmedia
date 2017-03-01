//precisamos injetar a dependência $http para o controller
app.controller('aula14Controller', function($scope, $http) {

    $scope.dados = [];

    $scope.carregarDados = function() {
        /*
        Modelo de requisição:

                $http
                    .get(recurso_requisitado)
                    .then(funcao_de_callback_de_sucesso, funcao_de_callback_de_erro)
        */
        $http
            .get("data/dados.json") //recurso que será requisitado
            .then(
                function successCallback(responseObject) { //define a ação em caso de sucesso na requisição
                    console.log(responseObject);
                    $scope.dados = responseObject.data;
                }, 
                function errorCallback() { //define a ação em caso de erro na requisição
                    alert("Erro na requisição");
                }
            );
    };

});