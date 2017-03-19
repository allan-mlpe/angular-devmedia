<?php
	session_start(); //inicia a sessão

	//se o usuário não estiver logado, será redirecionado para a página de login
	if(!isset($_SESSION['logado'])) {
		header("Location: index.php"); //redirecionamento
	}

?>

<!DOCTYPE html>
<html>
	<head>
	    <meta charset="UTF-8">
	    <title>Painel Inicial</title>

	    <!-- folhas de estilo -->
	    <link rel="stylesheet" href="../css/bootstrap.min.css">
	    <link rel="stylesheet" href="../css/style.css">

	</head>

	<!-- também podemos usar a diretiva ng-app no body (e em qualquer lugar!) -->
	<body ng-app="app">

		<nav class="navbar navbar-default">
			<div class="container-fluid">
				<div class="navbar-header">
				<a class="navbar-brand" href="#">
					Painel de Notícias
				</a>
				</div>
			</div>
		</nav>

	    <div ng-controller="painelInicialController">

			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<div class="well well-sm">
							<button class="btn btn-primary" ng-click="showCadastroForm()">Cadastrar Notícia</button>
						</div>
					</div>
				
				</div>
			</div>

			<!-- inicio do form -->
			<div class="container" ng-show="showCadastro">

				<form ng-submit="cadastrarNovaNoticia()">
					<!-- título da notícia -->
					<div class="row mbottom">
						<div class="col-xs-3 text-right">
							Título:
						</div>
						<div class="col-xs-9">
							<input type="text" class="form-control" ng-model="noticia.noticiatitulo" required>
						</div>
					</div>

					<!-- descrição da notícia -->
					<div class="row mbottom">
						<div class="col-xs-3 text-right">
							Descrição:
						</div>
						<div class="col-xs-9">
							<input type="text" class="form-control" ng-model="noticia.noticiadescricao">
						</div>
					</div>

					<!-- data da notícia -->
					<div class="row mbottom">
						<div class="col-xs-3 text-right">
							Data:
						</div>
						<div class="col-xs-9">
							<!-- aqui vamos utilizar uma máscara!! -->
							<input
								type="text"
								class="form-control"
								ng-model="noticia.noticiadata"
								ui-mask="99/99/9999" 
								model-view-value="true"
								required
							>
						</div>
					</div>

					<!-- texto da notícia -->
					<div class="row mbottom">
						<div class="col-xs-3 text-right">
							Texto:
						</div>
						<div class="col-xs-9">
							<textarea class="form-control" rows="5" ng-model="noticia.noticiatexto">
							
							</textarea>
						</div>
					</div>

					<!-- -->
					<div class="row mbottom">
						<div class="col-xs-9 col-xs-offset-3">
							<button type="submit" class="btn btn-danger">Cadastrar</button>
						</div>
					</div>
				</form>
			</div>
	        <!-- fim do form -->
	    </div>

	    <!-- scripts javascript -->
	    <script src="../js/angular.min.js"></script>
	    <script src="../js/ui-utils.min.js"></script>
	    <script src="../js/controller/painelInicialController.js"></script>
	</body>
</html>