app.controller('aula22Controller', function($scope) {
    $scope.texto = "Conteúdo de texto com uma breve descrição, conteúdo de texto com uma breve descrição, conteúdo de texto com uma breve descrição, conteúdo de texto com uma breve descrição, conteúdo de texto com uma breve descrição, conteúdo de texto com uma breve descrição";
  
    /*
        Regras para as máscaras:
            9 - somente números
            A - somente letras
            * - qualquer caractere
    */
    $scope.maskCpf = "999.999.999-99"
    $scope.maskFone = "(99) 9999-9999"
});