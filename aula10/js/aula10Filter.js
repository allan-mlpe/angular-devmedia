/*
 * A sintaxe de filtros segue o padrão dos demais elementos do AngularJS:
 *  primeiro passamos o nome do filtro e em seguida passamos uma função.
 */
/**
 * Retorna uma saudação com o nome da pessoa passado como parâmetro.
 */
app.filter('saudacao', function() {
    return function(nome) { //o filtro retorna uma função
        return "Olá, " + nome + "!";
    }
});