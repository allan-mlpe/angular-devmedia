app.controller('aula17Controller', function($scope) {
    $scope.items = ['1', '2', '3'];

    /**
     * Função auxiliar que checará se todos os itens do array
     * são diferentes do valor de $scope.itemAdd. Ou seja, checará
     * se o valor de $scope.itemAdd não já foi inserido no array.
     */
    var containsItem = function(item) {
        return item != $scope.itemAdd;
    };

    $scope.addItem = function() {
        if($scope.items.every(containsItem)) { //chamando a função auxiliar containsItem
            $scope.items.push($scope.itemAdd);
        }
    };
});