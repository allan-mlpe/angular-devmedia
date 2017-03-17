app.controller('aula26Controller', function($scope){

    $scope.newAccordion = new Accordion();

    $scope.grupos = [
        {heading : "Título do Accordion Din1", content : "Conteúdo do accordion Din1"},
        {heading : "Título do Accordion Din2", content : "Conteúdo do accordion Din2"},
    ];

    /**
     * Adiciona um novo accordion ao grupo.
     */
    $scope.addAccordion = function() {
        $scope.grupos.push($scope.newAccordion);
        $scope.newAccordion = new Accordion();
    };

    /**
     * Construtor do objeto accordion.
     */
    function Accordion() {
        this.heading = "";
        this.content = "";
    };
    
});