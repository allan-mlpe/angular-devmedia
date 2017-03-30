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

                    <button 
                        type="button" 
                        class="btn btn-success btn-block" 
                        ng-hide="chat!=true" 
                        ng-click="abrirModalChat()">
                        Chat está online
                    </button>
                    
                    <button 
                            type="button" 
                            class="btn btn-danger btn-block" 
                            ng-show="chat==false" disabled>
                        Chat está offline
                    </button>
                    
                    <hr/>
                    
                    <div class="media" ng-repeat="obj in noticias">
                        <div class="media-left">
                            <a href="verNoticia.php?id={{obj.noticia.dados.id_noticia}}">
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

        <div class="modal fade" id="chat" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title" id="myModalLabel">Chat</h4>
                  </div>
                  
                    <div class="modal-body">
                    
                      <div>
                        <div class="container-fluid">
                            <div class="row">
                               
                                <div ng-show="mostra_entrar_chat">
                                    <div class="col-xs-12 text-center">Informe seu nickname:</div>
                                        <div class="col-xs-10">
                                            <input 
                                                   type="text" 
                                                   class="form-control" 
                                                   placeholder="fulano@email.com" ng-model="usuariochat.email">
                                        </div>
                                        <div class="col-xs-2">
                                            <button 
                                                    type="button" 
                                                    class="btn btn-success btn-block" 
                                                    ng-disabled="usuariochat.email==''" 
                                                    ng-click="entrarChat()">
                                                Entrar
                                            </button>
                                        </div>
                                </div>
                                
                                
                                <div ng-show="mostra_batepapo">
                                    
                                        <div class="col-xs-12">
                                            <div class="alert alert-info" style="height:350px; overflow:scroll; overflow-x:hidden" id="mostra_mensagens">
                                                
                                                <div class="well well-sm" ng-repeat="msg in usuariochat.mensagens">
                                                    <p>De: {{msg.de}}</p>
                                                    <p>{{msg.msg}}</p>
                                                </div>
                                                
                                                
                                            </div>
                                        </div>
                                        
                                        <hr/>
                                        <div class="col-xs-10">
                                            <input type="text" 
                                                   class="form-control" 
                                                   placeholder="Mensagem" 
                                                ng-model="novaMensagem" 
                                                   id="cp_texto_enviar"
                                                   ng-keyup="$event.keyCode == 13 ? enviarMensagem() : null"
                                                   >
                                        </div>
                                        <div class="col-xs-2">
                                            <button 
                                                    type="button" class="btn btn-success btn-block" ng-click="enviarMensagem()" ng-disabled="novaMensagem==''">Enviar</button>
                                        </div>
                                </div>
                                
                            </div>  
                        </div>
                      </div>
                      
                      
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary" ng-click="sairChat()">Sair do chat</button>
                  </div>
                </div>
              </div>
            </div>
    </div>

    <!-- scripts javascript -->
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/angular.min.js"></script>
    <script src="http://localhost:3000/socket.io/socket.io.js"></script>
    <script src="js/ng-socket-io.js"></script>
    <script src="js/module/index.module.js"></script>
    <script src="js/controller/listaNoticiasController.js"></script>
</body>
</html>