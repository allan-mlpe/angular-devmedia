//precisamos passar o $location como dependência para o nosso controller
app.controller('aula18Controller', function($scope, $location) {
    $scope.location = $location;

    /**
     * Esta função altera o id passado na URL para o valor de p_id
     */
    $scope.setId = function(p_id) {
        $location.search({ id : p_id });
    };

    /*
        a função watch monitora o valor de uma variável passada no primeiro parâmetro
        e executa a função passada como o segundo parâmetro.

        OBS: chamamos a variável direto pelo seu nome, sem precisar colocar o prefixo $scope
    */
    $scope.$watch('location.search().id', function(id) {
        console.log("Mudou o valor do ID para " + id);
    });

});