/*
    As boas práticas recomendam que o DOM seja manipulado apenas por meio de diretivas.
    Como queremos modificar o DOM usando o jQuery, criamos uma diretiva e inserimos
    código do jQuery dentro.
*/
app.directive('tooltip', function() {
    return {
        restrict : "A",

        //na função link é que realizamos a manipulação do DOM
        link : function(scope, element, attributes) {
            console.log(element.html());

            element.tooltipsy({
                offset : [0, 10],
                content : scope.textoTooltip //linkando o valor da variável do $scope do controller
            });
        }
    }
});