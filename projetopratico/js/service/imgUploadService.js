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
     * Filtro para permitir o upload apenas de arquivos de imagem
     */
    uploader.filters.push({
            name: 'imageFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        });

    /**
     * Executa uma ação antes do upload do item
     */
    uploader.onBeforeUploadItem = function(fileItem) {
        
        //adicionando um objeto com a chave imagemtitulo
        fileItem.formData.push({
            imagemtitulo : fileItem._file.name
        });
    };

    /**
     * Executa uma ação quando o arquivo é enviado com sucesso
     */
    uploader.onSuccessItem = function(fileItem) {
        console.log("Item enviado com sucesso!");
        fileItem.remove(); //remove o arquivo da fila quando o upload é feito
        uploader.runCallback();
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
        alert("Somente arquivos de imagem são permitidos.");
    };

    /**
     * Executa uma função de callback recebida do controller após o upload do item
     */
    uploader.runCallback = function() {
        if(!uploader.callback) return;
        uploader.callback(idNoticia);
    };

    /**
     * Define uma função de callback personalizada para ser executada após o upload do item
     */
    uploader.setCallback = function(callback) {
        uploader.callback = callback;
    }

});