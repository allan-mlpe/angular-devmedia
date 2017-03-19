var app = angular.module("app", ['ui.mask', 'angular-loading-bar']);

app.controller('painelInicialController', function($scope, $http) {
    
    /**
     * Exibição do formulário de cadastro de notícia
     */
    $scope.showCadastro = false;

    /**
     * Representa um objeto contendo todas as notícias do sistema
     */
    $scope.todasAsNoticias = {};

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
                        
                        /*
                            Para adicionarmos o grid devemos informar os seguintes parâmatros:
                            title       -> título do gritter
                            text        -> texto complementar da mensagem
                            class_name  -> classe que definirá o estilo do gritter quando exibido na tela 
                        */
                        $.gritter.add({
                            title : "Tudo certo!",
                            text : "A notícia foi cadastrada com sucesso.",
                            class_name : "gritter"
                        });

                        $scope.showCadastro = false; //esconde o form de cadastro
                        $scope.noticia = objNoticia(); //zera o objeto notícia

                        /*
                            Após a inserção de uma nova notícia
                            o sistema deve chamar novamente a função
                            que lista todas as notícias. Assim, a lista
                            exibida será atualizada imediatamente devido
                            ao data bind do angular.
                        */
                        $scope.listarNoticias();

                    } else {
                        $.gritter.add({
                            title : "Ops!",
                            text : "Não foi possível cadastrar a notícia.",
                            class_name : "gritter"
                        });
                    }
                },

                function onErrorCallback(responseObject) {
                    console.dir(responseObject);
                    $.gritter.add({
                        title : "Erro!",
                        text : "Erro no serviço de cadastro.",
                        class_name : "gritter"
                    });
                }
            );

    };

    /**
     * Recupera todas as notícias cadastradas no sistema
     */
    $scope.listarNoticias = function() {
        $http
            .get("../api/listarNoticias")
            .then(
                function onSuccessCallback(responseObject) {
                    var data = responseObject.data;
                    $scope.todasAsNoticias = data.noticias;

                },

                function onErrorCallback() {
                    console.dir(responseObject);
                    $.gritter.add({
                        title : "Ops!",
                        text : "Falha em obter notícias.",
                        class_name : "gritter"
                    });
                }
            );
    }

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

    $scope.listarNoticias();

});