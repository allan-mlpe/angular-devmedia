<!DOCTYPE html>
<html ng-app="app">
<head>
    <meta charset="UTF-8">
    <title>Painel Administrativo - Login</title>

    <!-- folhas de estilo -->
    <link rel="stylesheet" href="../css/bootstrap.min.css">

</head>
<body>
    <div ng-controller="loginController">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="page-header">
                        <h3>Efetue o Login</h3>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xs-12 col-sm-7">

                    <!-- 
                        ao submeter o formulário, vamos executar a função doLogin 
                    -->
                    <form class="form-horizontal" ng-submit="doLogin()">
                      <div class="form-group">
                        <label for="inputEmail3" class="col-sm-2 control-label">Login</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="inputEmail3" placeholder="Seu login" ng-model="user.login" required>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="inputPassword3" class="col-sm-2 control-label">Senha</label>
                        <div class="col-sm-10">
                          <input type="password" class="form-control" id="inputPassword3" placeholder="Sua senha" ng-model="user.senha" required>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                          <button type="submit" class="btn btn-default">Entrar</button>
                        </div>
                      </div>
                    </form>
                </div>

                <div class="col-sm-5">
                    <h4>Instruções de Login</h4>
                    <p>Cuidado com letras maiúsculas e minúsculas.</p>

                </div>

            </div>
        </div>
    </div>

    <!-- scripts javascript -->
    <script src="../js/angular.min.js"></script>
    <script src="../js/app.module.js"></script>
    <script src="../js/loginController.js"></script>
</body>
</html>