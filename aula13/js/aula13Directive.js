app.directive('ngOla', function() {
    //restrict e template são os dois elementos básicos de uma diretiva.
    return {
        /*
            O restrict define a forma com que podemos usar a diretiva.
            A -> a diretiva pode ser usada dentro de tags HTML.         Ex.: <div ng-ola></div>
            E -> podemos criar uma tag com o nome da diretiva.          Ex.: <ng-ola></ng-ola>
            C -> colocamos a diretiva como uma classe do elemento HTML. Ex.: <div class="ng-ola"></div>         

        */
        restrict : 'AEC',

        //pegamos o valor que foi passado dentro de
        //uma diretiva chamada ng-nome declarada no elemento HTML
        scope : {
            ngNome : '@' //utilizamos @ para representar o valor passado para a diretiva ng-nome
        },

        //este é um controller específico para a diretiva.
        //Ele não tem acesso ao DOM da página!
        controller : ['$scope', function($scope) {
            $scope.digaOla = function(nome) {
                alert('Olá, ' + nome + '!');
            };
        }],

        //a função link serve para nós fazermos algum tratamento no DOM da página.
        //como o controller não tem acesso ao DOM, precisamos usar o elemento link
        /**
         * @scope   representa o $scope do controller.
         * @htmlElement     representa o elemento HTML que contém a diretiva
         * @elementAttributes   contém os atributos do elemento HTML que contém a diretiva
         */
        link : function(scope, htmlElement, elementAttributes) {
            console.log(scope);
            console.log(htmlElement);
            console.log(elementAttributes);

            scope.digaOla(elementAttributes.ngNome);
        },

        template : '<h1>Olá, {{ ngNome }}!</h1>' //usamos o valor passado como parâmetro na diretiva ng-nome
    };
});