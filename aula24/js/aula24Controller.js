function onGoogleReady() {
    angular.bootstrap(document.getElementsByTagName('body')[0], ['app']);
}

angular.module('app', ['uiGmapgoogle-maps'])
    .controller('aula24Controller', function($scope) {
        //definição do objeto map
        $scope.map = { 
            center : { latitude : 45, longitude : -73 }, 
            zoom : 10 
        };

        //definição de um marcador para o mapa
        $scope.marker = {
            id : 0,
            coords : {
                latitude : 45,
                longitude : -73
            }
        };

        console.log("blz");
    });