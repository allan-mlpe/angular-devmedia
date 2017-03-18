<?php
	session_start(); //inicia a sessão

	//se o usuário não estiver logado, será redirecionado para a página de login
	if(!isset($_SESSION['logado'])) {
		header("Location: index.php"); //redirecionamento
	}

?>

usuario logado