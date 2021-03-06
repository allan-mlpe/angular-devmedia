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
	    <link rel="stylesheet" href="../css/loading-bar.min.css">
	    <link rel="stylesheet" href="../css/jquery.gritter.css">
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


			<div class="container" ng-show="chatUsuarios.length>0">
				<div class="row">
					<div class="col-xs-12">
						<h2>Atendimentos</h2>

						<div class="col-xs-12">
							<div class="alert alert-info" style="height:350px; overflow:scroll; overflow-x:hidden;" id="mostra_mensagens">
								<div class="well well-sm" ng-repeat="msg in chatUsuarios[usuarioAtivo].mensagens">
									<p>De : {{ msg.de }}</p>
									<p>Msg : {{ msg.msg }}</p>
								</div>
							</div>
						</div>

						<hr/>

						<div class="col-xs-12">
							<a href="#" class="btn btn-primary" ng-repeat="(key, u) in chatUsuarios" ng-click="setUsuarioAtivo(key)">
								{{ u.usuario }}
							</a>
						</div>

						<div class="col-xs-10">
							<input class="form-control" type="text" placeholder="Mensagem..." ng-model="novaMensagem" ng-keyup="$event.keyCode == 13 ? enviarMensagem() : null">

						</div>
						<div class="col-xs-2">
							<button class="btn btn-primary btn-block" ng-click="enviarMensagem()" ng-disabled="novaMensagem==''">
								Enviar
							</button>
						</div>
					</div>
				</div>
			</div>
			<hr/>


			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<div class="well well-sm">
							<button class="btn btn-primary" ng-click="showCadastroForm()">Cadastrar Notícia</button>
							<button class="btn btn-success" ng-hide="chat!=true" ng-click="chatStatus()">Chat online</button>
							<button class="btn btn-danger" ng-show="chat==false" ng-click="chatStatus()">Chat offline</button>
							<a href="../api/logout" class="btn btn-danger pull-right" onclick="return confirm('Deseja mesmo sair?')">Logout</a>
						</div>
					</div>
				
				</div>
			</div>

			<!-- inicio do form -->
			<div class="container" ng-show="showCadastro">

				<form ng-submit="formAction()">
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
							<button type="submit" class="btn btn-danger" ng-show="noticia.idnoticia==-1">Cadastrar</button>
							<button type="submit" class="btn btn-success" ng-show="noticia.idnoticia!=-1">Salvar Alterações</button>
						</div>
					</div>
				</form>
			</div>
	        <!-- fim do form -->

			<!-- lista de notícias -->
			<div class="container">
				<div class="row mbottom">
					<div class="col-xs-12">
						<table class="table table-bordered table-striped table-hover" ng-show="todasAsNoticias.length>0">
							<thead>
								<tr>
									<th width="90px">Data</th>
									<th>Título</th>
									<th width="60">Status</th>
									<th width="150">-</th>
								</tr>
							</thead>

							<tbody>
								<tr ng-repeat="noticia in todasAsNoticias">
									<td>{{ noticia.datanoticia }}</td>
									<td>{{ noticia.titulo_noticia }}</td>
									<td>
										<button class="btn btn-danger" title="Notícia bloqueada. Clique para ativar." ng-show="!noticia.status_noticia" ng-click="trocaStatus(noticia, 1)">
											<i class="glyphicon glyphicon-eye-close"></i>
										</button>
										<button class="btn btn-success" title="Notícia ativa. Clique para bloquear." ng-show="noticia.status_noticia" ng-click="trocaStatus(noticia, 0)">
											<i class="glyphicon glyphicon-eye-open"></i>
										</button>
									</td>
									<td>
										<a href="gerenciarImagens.php?idnoticia={{noticia.id_noticia}}" class="btn btn-primary" title="Gerenciar imagens"><i class="glyphicon glyphicon-picture"></i></a>
										<button class="btn btn-warning" ng-click="getNoticia(noticia.id_noticia)" title="Editar notícia"><i class="glyphicon glyphicon-pencil"></i></button>
										<button class="btn btn-danger" title="Excluir notícia" ng-click="excluirNoticia(noticia.id_noticia)"><i class="glyphicon glyphicon-trash"></i></button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div class="row" ng-show="todasAsNoticias.length==0">
                    <div class="col-xs-12">
                        <h5>Nenhuma notícia cadastrada</h5>
                    </div>
                </div>
			</div>
	    </div>

	    <!-- scripts javascript -->
	    <script src="../js/jquery-3.1.1.min.js"></script>
	    <script src="../js/jquery.gritter.min.js"></script>
	    <script src="../js/angular.min.js"></script>
		<script src="http://localhost:3000/socket.io/socket.io.js"></script>
		<script src="../js/ng-socket-io.js"></script>
	    <script src="../js/ui-utils.min.js"></script>
	    <script src="../js/loading-bar.min.js"></script>
	    <script src="../js/controller/painelInicialController.js"></script>
	</body>
</html>