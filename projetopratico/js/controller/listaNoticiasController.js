app.controller('listaNoticiasController', function($scope, $http) {

    /**
     * Representa a lista de notícias que será exibida na tela inicial
     */
    $scope.noticias = {};

    /**
     * Recupera a lista de todas as notícias cadastradas
     */
    $scope.getNoticias = function() {
        $http
            .get("api/getNoticiaFrontend")
            .then(
                function onSuccessCallback(responseObject) {
                    var data = responseObject.data;
                    $scope.noticias = data.noticias;
                    console.dir($scope.noticias);
                },
                function onErrorCallback(responseObject) {
                    var data = responseObject.data;
                    console.log("ERro");
                }
            );
    };

    //chama a função de listar notícias ao carregar o controller
    $scope.getNoticias();
});