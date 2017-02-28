app.controller('aula08Controller', function($scope) {
    
    $scope.estados = ["PE", "PB", "CE", "BA", "SP", "RS"];
    
    $scope.pessoa = novaPessoa();
    //console.log($scope.pessoa);

    $scope.pessoas = [];

    $scope.salvarPessoa = function(pessoa) {
        $scope.pessoas.push(pessoa);

        //redefine o objeto pessoa para o default
        $scope.pessoa = novaPessoa();

        //torna o estado dos campos do formulário igual a como se nunca tivessem sido acessados.
        $scope.frm.$setUntouched(); //frm é o nome que nós demos ao formulário no HTML. É acessado com o $scope
        
        //torna o estado do formulário igual ao estado inicial
        $scope.frm.$setPristine();
    }

    /**
     * Cria uma pessoa com os atributos vazios/default
     */
    function novaPessoa() {
        return {
            nome : "",
            email : "",
            sexo : "F",
            estado : "PE"
        };
    }
});