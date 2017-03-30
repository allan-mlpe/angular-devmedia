var app = angular.module("app", ['ui.mask', 'angular-loading-bar', 'socket-io']);

app.controller('painelInicialController', function($scope, $http, socket) {
    
    /**
     * Exibição do formulário de cadastro de notícia
     */
    $scope.showCadastro = false;

    /**
     * Representa um objeto contendo todas as notícias do sistema
     */
    $scope.todasAsNoticias = {};

    /**
     * Representa a notícia manipulada na view
     */
     $scope.noticia = objNoticia();

     /**
      * Cadastra uma nova notícia na base de dados
      */
    $scope.cadastrarNovaNoticia = function() {
        $http
            .post("../api/cadastrarNovaNoticia", $scope.noticia)
            .then(
                function onSuccessCallback(responseObject) {
                    var data = responseObject.data;

                    if(!data.erro) { //cadastro ok
                        
                        /*
                            Para adicionarmos o grid devemos informar os seguintes parâmatros:
                            title       -> título do gritter
                            text        -> texto complementar da mensagem
                            class_name  -> classe que definirá o estilo do gritter quando exibido na tela 
                        */
                        $.gritter.add({
                            title : "Tudo certo!",
                            text : "A notícia foi cadastrada com sucesso.",
                            class_name : "gritter"
                        });

                        $scope.showCadastro = false; //esconde o form de cadastro
                        $scope.noticia = objNoticia(); //zera o objeto notícia

                        /*
                            Após a inserção de uma nova notícia
                            o sistema deve chamar novamente a função
                            que lista todas as notícias. Assim, a lista
                            exibida será atualizada imediatamente devido
                            ao data bind do angular.
                        */
                        $scope.listarNoticias();

                    } else {
                        $.gritter.add({
                            title : "Ops!",
                            text : "Não foi possível cadastrar a notícia.",
                            class_name : "gritter"
                        });
                    }
                },

                function onErrorCallback(responseObject) {
                    console.dir(responseObject);
                    $.gritter.add({
                        title : "Erro!",
                        text : "Erro no serviço de cadastro.",
                        class_name : "gritter"
                    });
                }
            );

    };

    /**
     * Recupera todas as notícias cadastradas no sistema
     */
    $scope.listarNoticias = function() {
        $http
            .get("../api/listarNoticias")
            .then(
                function onSuccessCallback(responseObject) {
                    var data = responseObject.data;
                    $scope.todasAsNoticias = data.noticias;

                },

                function onErrorCallback(responseObject) {
                    console.dir(responseObject);
                    $.gritter.add({
                        title : "Ops!",
                        text : "Falha em obter notícias.",
                        class_name : "gritter"
                    });
                }
            );
    }

    /**
     * Recupera uma notícia do banco de dados pelo id da notícia
     */
    $scope.getNoticia = function(idnoticia) {
        $http
            .get("../api/getnoticia/"+idnoticia)
            .then(
                function onSuccessCallback(responseObject) {
                    //associa a notícia retornada à variável da view                    
                    $scope.noticia = handleData(responseObject.data.noticia);

                    //exibe o formulário de cadastro (já com os dados da noticia retornada)
                    $scope.showCadastro = true;
                },

                function onErrorCallback(responseObject) {
                    console.dir(responseObject);
                    $.gritter.add({
                        title : "Ops!",
                        text : "Falha em obter informações da notícia.",
                        class_name : "gritter"
                    });
                }
            );
    };

    /**
     * Altera o status de uma notícia
     */
    $scope.trocaStatus = function(noticia, novoStatus) {
        $http
            .get("../api/trocastatus/"+noticia.id_noticia+"/"+novoStatus)
            .then(
                function onSuccessCallback(responseObject) {
                   console.log(responseObject.data);

                   /*
                        Vamos apenas alterar a variável notícia 
                        para evitar fazer uma nova requisição ao
                        serviço ou então fazer um reload na página
                   */
                   noticia.status_noticia = novoStatus;
                },

                function onErrorCallback(responseObject) {
                    console.dir(responseObject);
                    $.gritter.add({
                        title : "Ops!",
                        text : "Falha na troca de status da notícia.",
                        class_name : "gritter"
                    });
                }
            );
    };
   
    /**
     * Exclui uma notícia
     */
    $scope.excluirNoticia = function(idNoticia) {
        console.log(idNoticia);

        /*
            por questões de acessibilidade, vamos pedir uma confirmação
            do usuário acerca da exclusão da notícia.        
        */
        if(!confirm("Tem certeza que deseja excluir esta notícia?")) return;

        $http
            .get("../api/excluirNoticia/"+idNoticia)
            .then(
                function onSuccessCallback(responseObject) {
                   console.log(responseObject.data);
                   
                   //após excluída a notícia, chamamos a função listar para atualizar a lista de notícias
                   $scope.listarNoticias();

                   $.gritter.add({
                        title : "Tudo certo!",
                        text : "Notícia excluída com sucesso.",
                        class_name : "gritter"
                    });
                },

                function onErrorCallback(responseObject) {
                    console.dir(responseObject);
                    $.gritter.add({
                        title : "Ops!",
                        text : "Falha na exclusão da notícia.",
                        class_name : "gritter"
                    });
                }
            );
    };

    $scope.alterarNoticia = function() {
        $http
            .post('../api/alterarNoticia/'+$scope.noticia.idnoticia, $scope.noticia)
            .then(
                function onSuccessCallback(responseObject) {
                    var data = responseObject.data;

                    if(!data.erro) { //alteração ok
                        $.gritter.add({
                            title : "Tudo certo!",
                            text : "A notícia foi atualizada com sucesso.",
                            class_name : "gritter"
                        });

                        $scope.showCadastro = false; //esconde o form de cadastro
                        $scope.noticia = objNoticia(); //zera o objeto notícia

                        $scope.listarNoticias();

                    } else {
                        $.gritter.add({
                            title : "Ops!",
                            text : "Não foi possível alterar a notícia.",
                            class_name : "gritter"
                        });
                    }
                },

                function onErrorCallback(responseObject) {
                    console.dir(responseObject);
                    $.gritter.add({
                        title : "Erro!",
                        text : "Erro no serviço de atualização.",
                        class_name : "gritter"
                    });
                }
            );

    }

    /**
     * Define qual ação será realizada após a submissão do formulário
     */
    $scope.formAction = function() {
        if($scope.noticia.idnoticia == -1) {
            $scope.cadastrarNovaNoticia();
        } else {
            $scope.alterarNoticia();
        }
    }

    /**
     * Exibe o cadastro de notícias na view
     */
    $scope.showCadastroForm = function() {
        //recria o objeto notícia para limpar o form de cadastro
        $scope.noticia = objNoticia();
        $scope.showCadastro = true;
    };

    /**
     * Retorna um objeto notícia default com os campos vazios
     */
    function objNoticia() {
        return {
            idnoticia : -1,
            noticiatitulo : "",
            noticiadescricao : "",
            noticiatexto : "",
            noticadata : ""
        };
    };

    /**
     * Converte o JSON com as chaves correspondentes do banco de dados
     * em um objeto noticia válido para a aplicação
     */
    function handleData(data) {
        return {

            idnoticia : data.id_noticia,
            noticiatitulo : data.titulo_noticia,
            noticiadescricao : data.descricao_noticia,
            noticiatexto : data.texto_noticia,
            noticiadata : data.datanoticia
        }
    };

    $scope.listarNoticias();


    //======================= CHAT ============================
     /**
     * Contém os usuários que estão conectados ao chat
     */
    $scope.chatUsuarios = [];

    /**
     * Representa uma nova mensagem que chega ao chat
     */
    $scope.novaMensagem = '';

    /**
     * Representa o índice do usuário que está ativo em um dado momento
     */
    $scope.usuarioAtivo = 0;

    /**
     * Indica o status atual do chat online/offline
     */
    $scope.chat = false;

    /**
     * Senha default para o usuário
     */
    $scope.senha = "123456";

    //realiza login do administrador no chat
    socket.emit('adminlogin', $scope.senha);

    /**
     * Define o status do chat para online/offline
     */
    $scope.chatStatus = function() {
        socket.emit('setChatStatus', $scope.senha);
    }

    socket.on('chatstatus', function(data) {
        $scope.chat = data.online;
    });

    /**
     * Ação a ser executada assim que um usuário entra no chat
     */
    socket.on('usuarioentrou', function(email) {
        $scope.chatUsuarios.push({ usuario : email, mensagens : [] });

        if($scope.chatUsuarios.length == 1) {
            $scope.usuarioAtivo = 0;
        }
    });

    socket.on('usuariosaiu', function(usuario){
        var ind = $scope.buscaUsuario(usuario);
        
        console.log('Usuário saiu');
        console.log($scope.chatUsuarios[ind]);
        
        $.gritter.add({
                        title : "Usuário saiu",
                        text : $scope.chatUsuarios[ind].usuario+" saiu",
                        class_name : "gritter"
                    });
        
        $scope.chatUsuarios.splice(ind, 1);
        $scope.usuarioAtivo = 0;
    });

    socket.on('novamensagemparaadmin', function(mensagem) {
        var ind = $scope.buscaUsuario(mensagem.de);
        $scope.chatUsuarios[ind].mensagens.push({
            de : mensagem.de,
            msg : mensagem.msg
        });
    });

    $scope.buscaUsuario = function(usuario) {
        var status = false;
        var cont = 0;

        while(cont < $scope.chatUsuarios.length) {
            if($scope.chatUsuarios[cont].usuario == usuario) {
                return cont;
            }
            cont++;
        }

        return false;
    };

    $scope.setaUsuarioAtivo = function(ind) {
        $scope.usuarioAtivo = ind;
    };

    $scope.scrollDown = function() {
        setTimeout(function() {
            $("#mostra_mensagens").scrollTop(1E10);
        }, 800);
    };

    $scope.enviarMensagem = function() {
        
        $scope.chatUsuarios[$scope.usuarioAtivo].mensagens.push({
            de : "Admin",
            msg : $scope.novaMensagem
        });

        socket.emit('enviarmensagemparausuario', {
            para : $scope.chatUsuarios[$scope.usuarioAtivo].usuario,
            msg : $scope.novaMensagem
        });
        
        $scope.novaMensagem = '';
        $scope.scrollDown();
    };
});