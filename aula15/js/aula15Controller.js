app.controller('aula15Controller', function($scope, Livros) {

    $scope.carregaLivros = function() {
        //executando um GET no resource
        Livros.get(function(data) { //podemos também passar uma função de callback para tratar os dados
            console.log(data.mensagem);
        });
    };

    $scope.getLivro = function(livroId) {
        /*
            Para passar parâmetros para o recurso nós podemos passar
            um objeto chave-valor com os parâmetros desejados e, em seguida,
            definimos a função de callback de tratamento dos dados recebidos.

            A chave do objeto passado como primeiro parâmetro deve
            ter o mesmo nome do parâmetro definido no $resource.
            No caso, a chave do objeto é 'livroId' porque nós definimos
            no $resource o nome :livroId.

            O valor da chave do objeto passado como primeiro parâmetro,
            neste caso, é igual ao do parâmetro recebido pela função getLivro. 
        */
        Livros.get({livroId : livroId}, function(data) {
            
            console.log(data.mensagem);
        });
    };

    $scope.salvarLivro = function() {
        var livro = {
            "id" : 40,
            "titulo" : "AngularJS"
        };

        /*
            Para invocar o método save passamos três argumentos:
            1) parâmetros de configuração;
            2) o objeto que queremos salvar.
            3) a função de callback que trata os dados retornados.
        */
        Livros.save({}, livro, function(data){
            console.log(data.mensagem);
        });
    };

});