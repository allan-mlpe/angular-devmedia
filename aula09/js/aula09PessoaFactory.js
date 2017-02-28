/**
 * As factories servem para que nós possamos criar objetos e retornar suas instâncias para fora.
 */
app.factory('Pessoa', function() { //o nome passado como primeiro parâmetro deve ser o mesmo da variável retornada
    
    /**
     * Cria um objeto Pessoa e o atribui à variável
     */
    var Pessoa = function() {
        this.nome = "Humano", //valor 'default'
        this.idade = "0", //valor 'default'

        this.cumprimentar = function() {
            return "Olá, " + this.nome + "!";
        }
    };

    return Pessoa;
});