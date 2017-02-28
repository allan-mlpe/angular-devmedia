/**
 * O primeiro parâmetro do service é o seu nome.
 * Em seguida passamos uma função contendo todos os serviçoes
 * providos pelo service.
 */
app.service('operacoes', function() {

    console.log("Criou o service operacoes");

    //devemos declarar os serviços com a keyword this
    /**
     * Serviço de soma
     */
    this.somar = function (valor1, valor2) {
        return valor1+valor2;
    };

    /**
     * Serviço de subtração
     */
    this.subtrair = function (valor1, valor2) {
        return valor1-valor2;
    };
});