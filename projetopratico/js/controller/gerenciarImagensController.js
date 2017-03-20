app.controller('gerenciarImagensController', function($scope, $http, $location, FileUploader, imgUploadService) {
    
    //printa no console o id da notícia passado
    console.log($location.search().idnoticia);

    /**
     * Notícia que está sendo manupulada na view
     */
    $scope.noticia = {};

    /**
     * Contém o id da notícia recebido por parâmetro na URL
     */
    var idNoticia = $location.search().idnoticia;

    /**
     * Recupera uma notícia do banco de dados pelo id da notícia
     */
    $scope.getNoticia = function(idnoticia) {
        $http
            .get("../api/getnoticia/"+idnoticia)
            .then(
                function onSuccessCallback(responseObject) {
                    //associa a notícia retornada à variável da view                    
                    $scope.noticia = handleData(responseObject.data.noticia);

                    //exibe o formulário de cadastro (já com os dados da noticia retornada)
                    $scope.showCadastro = true;
                },

                function onErrorCallback(responseObject) {
                    console.dir(responseObject);
                    $.gritter.add({
                        title : "Ops!",
                        text : "Falha em obter informações da notícia.",
                        class_name : "gritter"
                    });
                }
            );
    };

    //chamamos a função para obter os dados da notícia com id passado como parâmetro
    $scope.getNoticia(idNoticia);

    $scope.uploader = imgUploadService.uploader;


    /**
     * Converte o JSON com as chaves correspondentes do banco de dados
     * em um objeto noticia válido para a aplicação
     */
    function handleData(data) {
        return {

            idnoticia : data.id_noticia,
            noticiatitulo : data.titulo_noticia,
            noticiadescricao : data.descricao_noticia,
            noticiatexto : data.texto_noticia,
            noticiadata : data.datanoticia
        }
    };

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