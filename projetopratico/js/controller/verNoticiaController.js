app.controller('verNoticiaController', function($scope, $http, $location) {

    /**
     * Representa a lista de notícias que será exibida na tela inicial
     */
    $scope.noticia = {};

    /**
     * ID da notícia passado na URL
     */
    var idNoticia = $location.search().id;

    //setamos o id do objeto notícia
    $scope.noticia.idnoticia = idNoticia;

    /**
     * Representa uma foto em tamanho maior que será exibida no modal
     */
    $scope.fotoMaior = "";

    /**
     * Recupera a lista de todas as notícias cadastradas
     */
    $scope.getNoticia = function() {
        $http
            .get("api/getNoticiaFrontend/" + $scope.noticia.idnoticia)
            .then(
                function onSuccessCallback(responseObject) {
                    var data = responseObject.data;
                    console.log(data);
                    $scope.noticia = data.noticias[0].noticia;
                },
                function onErrorCallback(responseObject) {
                    var data = responseObject.data;
                    console.log("Erro");
                }
            );
    };

    /**
     * Exibe uma foto de uma notícia no modal
     */
    $scope.abreFoto = function(foto) {
        $scope.fotoMaior = foto;

        console.log($scope.fotoMaior);

        //função do bootstrap para abrir o modal
        $("#verFoto").modal("show");
    }; 

    //chama a função de listar notícias ao carregar o controller
    $scope.getNoticia();

});

/*
    Definindo as configurações do location
*/
app.config(function($locationProvider) {
    $locationProvider.html5Mode({
        enabled : true,
        requireBase : false
    });
});