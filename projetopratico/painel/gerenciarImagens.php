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
	    <title>Gerenciar de Imagens</title>

	    <!-- folhas de estilo -->
	    <link rel="stylesheet" href="../css/bootstrap.min.css">
	    <link rel="stylesheet" href="../css/loading-bar.min.css">
	    <link rel="stylesheet" href="../css/jquery.gritter.css">
	    <link rel="stylesheet" href="../css/style.css">

	</head>

	<body ng-app="app">

		<nav class="navbar navbar-default">
			<div class="container-fluid">
				<div class="navbar-header">
				<a class="navbar-brand" href="painel-inicial.php" target="_self"> <!--
                                                                                    O target="_self"" serve para que o 
                                                                                    angular considere os links href
                                                                                    mesmo com o $location declarado
                                                                                 --> 
					Gerenciar Imagens
				</a>
				</div>
			</div>
		</nav>

	    <div ng-controller="gerenciarImagensController">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="alert alert-info">
                            Notícia: <strong> {{ noticia.noticiatitulo }} - {{ noticia.noticiadata }} </strong>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <h3>Cadastro de Imagens</h3>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <input type="file" nv-file-select uploader="uploader" multiple />

                        <hr />

                        <ul>
                            <li ng-repeat="item in uploader.queue">
                                Nome: <span ng-bind="item.file.name"></span>
                                
                                <button ng-click="item.upload()">Upload</button>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <h3>Imagens Cadastradas</h3>
                    </div>
                </div>
            </div>
	    </div>

	    <!-- scripts javascript -->
	    <script src="../js/jquery-3.1.1.min.js"></script>
	    <script src="../js/jquery.gritter.min.js"></script>
	    <script src="../js/angular.min.js"></script>
	    <script src="../js/angular-file-upload.min.js"></script>
	    <script src="../js/ui-utils.min.js"></script>
	    <script src="../js/loading-bar.min.js"></script>
	    <script src="../js/module/gerenciarImagens.module.js"></script>
	    <script src="../js/service/imgUploadService.js"></script>
	    <script src="../js/controller/gerenciarImagensController.js"></script>
	</body>
</html>