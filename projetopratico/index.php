<!DOCTYPE html>
<html ng-app="app">
<head>
    <meta charset="UTF-8">
    <title>Lista de Notícias</title>

    <!-- folhas de estilo -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
</head>

<body>
    <div ng-controller="listaNoticiasController">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="page-header">
                        <h2>Nossas notícias</h2>
                    </div>
            
                    <div class="jumbotron">
                        <h1>Seja bem vindo!</h1>
                        <p>Sistema de Notícias usando AngularJS</p>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-xs-12">
                    
                    <div class="media" ng-repeat="obj in noticias">
                        <div class="media-left">
                            <a href="#">
                            <img width="60px" class="media-object" ng-src="upload/{{obj.noticia.imagens[0].arquivo_imagem}}" alt="{{obj.noticia.dados.titulo_noticia}}">
                            </a>
                        </div>
                        <div class="media-body">
                            <h3 class="media-heading"><span class="label label-primary" style="margin-right:10px;">{{ obj.noticia.dados.datanoticia }}</span>{{ obj.noticia.dados.titulo_noticia }}</h3>
                            <p>{{ obj.noticia.dados.descricao_noticia }}</p>
                        </div>
                        <hr/>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <!-- scripts javascript -->
    <script src="js/angular.min.js"></script>
    <script src="js/module/app.module.js"></script>
    <script src="js/controller/listaNoticiasController.js"></script>
</body>
</html>