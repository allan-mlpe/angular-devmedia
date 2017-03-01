<?php

require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

header("Content-Type: application/json");

$app->get(
    '/livros',
    function () {
        echo json_encode(array("mensagem"=>"Lista todos os livros"));
    }
);

$app->get(
    '/livros/:idlivro',
    function ($idlivro) {
        echo json_encode(array("mensagem"=>"Retornar dados do livro ".$idlivro));
    }
);

$app->post(
    '/livros',
    function () use ($app) {
        $data = json_decode($app->request()->getBody());
        $id = (isset($data->id)) ? $data->id : "";
        $titulo = (isset($data->titulo)) ? $data->titulo : "";
        
        echo json_encode(array("mensagem"=>"Recebeu o ID do livro: ". $id));
    }
);

$app->run();
