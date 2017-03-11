//precisamos injetar a dependência FileUploader
app.controller('aula21Controller', function($scope, FileUploader) {
    
    var uploader = $scope.uploader = new FileUploader({
        url : "http://localhost/angular-devmedia/service/upload.php" //url do serviço o qual queremos enviar a nossa imagem
    });

    /** 
     * Limita a quantidade de arquivos que podem ser submetidos a 4. 
    */
    uploader.filters.push({
        name : "tamanhoFile", //nome do filtro
        fn : function(item, options) { //função a ser executada
            return this.queue.length < 4;
        }
    });

    /**
     * Executa uma ação quando o arquivo é enviado com sucesso
     */
    uploader.onSuccessItem = function(fileItem) {
        console.log("Item enviado com sucesso!");
        fileItem.remove(); //remove o arquivo da fila quando o upload é feito
    };

    /**
     * Executa uma ação quando ocorre erro ao fazer o upload do item
     */
    uploader.onErrorItem = function(fileItem) {
        console.log("Erro no upload do item!");
    };

    /**
     * Executa um ação quando ocorre erro ao selecionar os arquivos. 
     */
    uploader.onWhenAddingFileFailed = function(fileItem) {
        console.log("Erro ao adicionar elemento. O limite de arquivos é 4.");
    };
});