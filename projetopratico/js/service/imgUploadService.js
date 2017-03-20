app.service('imgUploadService', function($location, FileUploader) {

    /**
     * Representa o id da notícia que receberá as imagens
     */
    var idNoticia = $location.search().idnoticia;

    var uploader = this.uploader = new FileUploader({
        url : "../api/cadastrarImagem/"+idNoticia //url do serviço o qual queremos enviar a nossa imagem
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