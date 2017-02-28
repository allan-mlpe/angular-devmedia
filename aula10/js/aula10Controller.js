//A declaração deste controller é mais uma forma diferente de fazê-lo.

/**
 * Declaração da função do controller fora da
 * instanciação do controller
 */
function Aula10Controller($scope, saudacaoFilter) { // Há 2 formas de passar um filtro para o controller.
                                                    //Na primeira, devemos acrescentar a palavra Filter ao nome
                                                    //do filtro para adicioná-lo como dependência
    //console.log("Oi, eu sou o controller!");

    //invocando o filtro
    console.log(saudacaoFilter('Zezinho'));

    $scope.pessoa = {
        nome : "Jão",
        idade : "50"
    };
}

/**
 * Instanciação do controller passando como segundo parâmetro
 * a função que declaramos externamente.
 */
app.controller('aula10Controller', Aula10Controller);


//============================ OUTRA FORMA DE PASSAR UM FILTRO PARA UM CONTROLLER ===========================
/*
 * A outra forma de passar o filtro para o controller. 
 * é passarmos a variável $filter como dependência do controller'.
 */
app.controller('aula10Controller2', function($scope, $filter) {

    //Para invocarmos o nosso filtro usamos a sintaxe: $filter('nomeDoFiltro')(parâmetros)
    console.log($filter('saudacao')('Chico'));

});