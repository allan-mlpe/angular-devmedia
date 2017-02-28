/*
    Atenção para os parâmetros passados para o controller.
*/
app.controller('aula11Controller', function($scope, $route, $routeParams, $location) {
    
    //setamos variáveis no $scope para poder usá-las no página HTML
    $scope.route = $route;
    $scope.routeParams = $routeParams;
    $scope.location = $location;


});

/**
 * Controller da página inicial
 */
app.controller('InicialController', function($scope) {
    console.log("Entrou no controller da página inicial");

});

/**
 * Controller da página 1
 */
app.controller('Pagina1Controller', function($scope) {
    console.log("Entrou no controller da página 1");

});

/**
 * Controller da página 2
 */
app.controller('Pagina2Controller', function($scope, $routeParams) { //routeParams traz os parâmetros passados na URL
    console.log("Entrou no controller da página 2");

    $scope.parametros = $routeParams;
    console.log("ID do produto: " + $scope.parametros.idProduto);   //a chave idProduto deve ser igual ao nome do
                                                                    //parâmetro definido nas rotas do router.

});