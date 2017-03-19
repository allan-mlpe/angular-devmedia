var app = angular.module("app", ['ui.mask']);

app.controller('painelInicialController', function($scope, $http) {
    
    /**
     * Exibição do formulário de cadastro de notícia
     */
    $scope.showCadastro = false;

    /**
     * Representa a notícia manipulada na view
     */
     $scope.noticia = objNoticia();

     /**
      * Cadastra uma nova notícia na base de dados
      */
    $scope.cadastrarNovaNoticia = function() {
        $http
            .post("../api/cadastrarNovaNoticia", $scope.noticia)
            .then(
                function onSuccessCallback(responseObject) {
                    var data = responseObject.data;

                    if(!data.erro) { //cadastro ok
                        alert("Cadastro efetuado com sucesso!");
                        $scope.showCadastro = false; //esconde o form de cadastro
                        $scope.noticia = objNoticia(); //zera o objeto notícia
                    } else {
                        alert("Falha no cadastro da notícia!");    
                    }
                },

                function onErrorCallback(responseObject) {
                    console.dir(responseObject);
                    alert("Falha no serviço ou na requisição!");
                }
            );

    };

    /**
     * Exibe o cadastro de notícias na view
     */
    $scope.showCadastroForm = function() {
        $scope.showCadastro = true;
    };

    /**
     * Retorna um objeto notícia default com os campos vazios
     */
    function objNoticia() {
        return {
            idnoticia : -1,
            noticiatitulo : "",
            noticiadescricao : "",
            noticiatexto : "",
            noticadata : ""
        };
    };

});