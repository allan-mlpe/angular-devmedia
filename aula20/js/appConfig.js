/*
    Nas configurações do app que nós definimos os idiomas e as traduções disponívels.
    Devemos passar a dependência do $translateProvider
*/
app.config(function($translateProvider) {
   
    /*
        Permite que nós passemos uma tradução. Neste caso,
        passamos a sigla do idioma como primeiro parâmetro
        e as respectivas traduções em um objeto no segundo parâmetro
    */
    $translateProvider.translations('pt-br', {
        TITULO : "Seja bem vindo!",
        PARAGRAFO : "Este é um parágrafo",
        BTN_OK : "Confirmar",
        BTN_CANCEL : "Cancelar",
        IDIOMA : "Idioma"
    });

    $translateProvider.translations('en', {
        TITULO : "Welcome!",
        PARAGRAFO : "This is an paragraph",
        BTN_OK : "Confirm",
        BTN_CANCEL : "Cancel",
        IDIOMA : "Language"
    });

    //define uma linguagem preferencial para aplicação
    $translateProvider.preferredLanguage('pt-br');

});
