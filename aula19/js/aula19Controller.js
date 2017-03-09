/*
    Precisamos também adicionar a dependência $cookieStore para o controller
*/
app.controller('aula19Controller', function($scope, $cookieStore) {
    /*
       a sintaxe para adicionar um cookie é:
            $cookieStore.put(nome_do_cookie, valor_do_cookie)
    */
    //$cookieStore.put("nome", "devmedia.com");

    /*
        a sintaxe para remover um cookie é:
            $cookieStore.remove(nome_do_cookie)
    */
    //$cookieStore.remove("nome");

    /*
        a sintaxe para obter o valor de um cookie é:
            $cookieStore.get(nome_do_cookie)
    */
    //$cookieStore.get("nome");

    //============================================================
    /**
     * Adiciona o cookie dados
     */
    $scope.createCookie = function() {
        $cookieStore.put("dados", {nome : "Jão", idade : 104});
        console.log("Cookie criado.");
    };

    /**
     * Remove o cookie dados
     */
    $scope.removeCookie = function() {
        $cookieStore.remove("dados");
        $scope.getCookie();
        console.log("Cookie removido");
    };

    /**
     * Retorna o valor do cookie dados
     */
    $scope.getCookie = function() {
        $scope.cookieValue = $cookieStore.get("dados");
    }
});


app.controller('aula19Controller2', function($scope, $cookieStore) {
    /**
     * Retorna o valor do cookie dados no segundo controller
     */
    $scope.getCookie2 = function() {
        $scope.cookieValue = $cookieStore.get("dados");
    };
});