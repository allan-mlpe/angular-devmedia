/*
    Precisamos adicionar as dependências do highlight e da mask
    ui.highlight e ui.mask, respectivamente. Para o que alguns
    recursos funcionem corretamente, é preciso utilizar também
    o angular-sanitize-min.js.
*/
var app = angular.module('app', ['ui.highlight', 'ui.mask', 'ngSanitize']);