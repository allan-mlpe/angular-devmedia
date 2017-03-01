//injetamos a dependência $resource na factory
app.factory('Livros', function($resource) {

    /*
        O primeiro parâmetro é a URL do recurso que queremos requisitar.
        O segundo parâmetro é composto por configurações que desejamos passar.
    */
    return $resource('../api/livros/:livroId', {livroId: '@livroId'}); //neste caso o livroId é uma variável que 
                                                                    //receberá o parâmetro livroId passado na URL

});