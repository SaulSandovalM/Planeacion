(function () {

    var login = {
        controller:loginController,
        templateUrl:'app/components/login.html'
    }

    function loginController($firebaseAuth,$location) {
        var self = this;
        self.estado = null;
        self.email = null;
        self.erro = false;

        self.auth = $firebaseAuth();

        this.err = function(){
            return self.erro != false;
        }

       
        this.logg = function(){
            $('#load').show();
            self.auth.$signInWithEmailAndPassword(self.email, self.password)
            .then(function(response){
                // console.log(response);

               window.location.replace("/#/nuevo");
            })
            .catch(function(response){
                // console.log(response);
                self.erro = 'Tu usuario y contraseña son incorrectos';
                self.err();
                $('#load').hide();
            });

        };

        // this.checkLogin = function(){
        //     self.auth.$onAuthStateChanged(function(user) {
        //       if (user) {
        //         self.estado = true;
        //         self.email = user.email;
        //         console.log(user);
        //       } else {
        //         self.estado = false;
        //       }
        //     });
        //     console.log(self.estado);
        //     return self.estado;
        // };

        this.logOut = function(){
            self.auth.$signOut()
            .then(function() {
               window.location.replace("/");
            }, function(error) {
              // An error happened.
            });
        }


    }


    angular
        .module('palneacionHidalgo')
        .component('loginComponent',login)
        
        .factory('Auth', authService);

        function authService($firebaseAuth){
            return firebase.auth();
            // return $firebaseAuth(link)
        }

})();