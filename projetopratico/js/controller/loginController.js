app.controller("loginController", function($scope, $http) {

	$scope.user = {
		usuario : "",
		senha : ""
	};

	$scope.doLogin = function() {
		$http
			.post("../api/login", $scope.user) //enviamos o objeto para a url do recurso de login da API
			.then( //recebe uma função de callback para sucesso e outra para erro
				function succsessCallback(responseObject) {
					console.dir(responseObject);

					var data = responseObject.data;
					console.log(data.logado)

					if(data.logado) {
						window.location = "painel-inicial.php";
					} else {
						alert("Verifique usuário ou senha!")
					}
				},

				function errorCallback() {

				}
			);

	}

});