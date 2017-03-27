<!DOCTYPE html>
<html ng-app="app" ng-controller="verNoticiaController">
<head>
    <meta charset="UTF-8">
    <title>{{ noticia.dados.titulo_noticia }}</title>

    <!-- folhas de estilo -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
</head>

<body>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="page-header">
                        <h3>
                            {{ noticia.dados.titulo_noticia }}

                            <span class="label label-info pull-right">
                                {{ noticia.dados.datanoticia }}
                            </span>
                        </h3>
                    </div>

                    <p style="text-align:justify;" ng-bind-html="noticia.dados.texto_noticia">

                    </p>
                </div>
            </div>

            <div class="row">  
                <div class="col-xs-12 col-sm-4 col-md-2" ng-repeat="img in noticia.imagens">
                    <a href="#" title="{{img.arquivo_imagem}}" ng-click="abreFoto(img.arquivo_imagem)">
                        <img class="img-responsive" ng-src="upload/{{img.arquivo_imagem}}" title="{{img.titulo_imagem}}">
                    </a>
                </div>
            </div>
        </div>

        <!-- modal para exibição de foto maior -->
        <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" id="verFoto">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">{{fotoMaior}}</h4>
                    </div>

                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xs-12">
                                <img ng-src="upload/{{fotoMaior}}" class="img-responsive" style="margin:0 auto;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>

    <!-- scripts javascript -->
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/angular.min.js"></script>
    <script src="js/angular-sanitize.min.js"></script>
    <script src="js/module/vernoticia.module.js"></script>
    <script src="js/controller/verNoticiaController.js"></script>
</body>
</html>