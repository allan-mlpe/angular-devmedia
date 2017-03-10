/*
    devemos injetar a dependência $translate para lidar
    com o plugin de tradução de idiomas no controller
*/
app.controller('aula20Controller', function($scope, $translate) {
    console.dir($translate);
    
    //valor default para pageLanguage
    $scope.pageLanguage = "en";

    $scope.languages = [
        {
            initials : "pt-br",
            name : "Português"
        },

        {
            initials : "en",
            name : "English"
        }
    ];

    $scope.$watch("pageLanguage", function(lang) {
        //define a linguagem a ser utilizada
        $translate.use(lang);
    });
 
});