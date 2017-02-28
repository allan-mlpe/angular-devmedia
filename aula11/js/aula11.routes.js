//configurando o esquema de rotas
app.config(function($routeProvider, $locationProvider) {
    /*
        Esta variável é a provedora das rotas da aplicação.
        É nela que mapeamos as rotas com seus respectivos
        controllers e templates.
    */
    $routeProvider
        .when('/', {    //nas cláusulas 'when' nós asassociamos cada path mapeado a um objeto JSON 
                        //onde definimos um template e um controller para o template
            templateUrl : "aula11Inicial.html",
            controller : "InicialController"
        })
        .when('/Pagina1', {
            templateUrl : "aula11Pagina1.html",
            controller : "Pagina1Controller"
        })
        .when('/Pagina2/:idProduto', { //nesta página estamos passando um parâmetro na URL
            templateUrl : "aula11Pagina2.html",
            controller : "Pagina2Controller"
        })
        .otherwise({ //caso uma rota não esteja mapeada, define o local que o usuário deve ser redirecionado
            redirectTo : '/'
        });

        //é preciso setar essa configuração para as rotas funcionarem
        $locationProvider.html5Mode(true);
});