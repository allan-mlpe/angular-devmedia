/*
    Nas configurações do app é que nós podemos configurar
    como a aplicação pode interagir com o browser.
*/
app.config(function($locationProvider) {
    $locationProvider.html5Mode({
        enabled : true, //fornece alguns recursos mais avançados
        requireBase : false //se não definissemos como false, teríamos que inserir uma tag <meta base> no nosso html
    }).hashPrefix("#"); //define o elemento que será utilizado como âncora. O '#' é o default
});