(function () {
    angular
        .module('palneacionHidalgo',['ngRoute','firebase']) 
        .controller('indexCtrl',indexCtrl);

    function indexCtrl($location,$firebaseAuth) {
        var self = this;
        self.estado = null;
        var auth = $firebaseAuth();
        auth.$onAuthStateChanged(function(firebaseUser) {
          self.firebaseUser = firebaseUser;
          // console.log('user: ',firebaseUser)
          self.email = firebaseUser.email;
      });

        this.logOut = function(){
            firebase.auth().signOut().then(function() {
            	window.location.replace("/#/login");
            }, function(error) {
              // An error happened.
            });
        };

        this.checkLogin = function(){
            firebase.auth().onAuthStateChanged(function(user) {
              if (user) {
                self.estado = true;
                // self.email = user.email;
                // console.log(user);
              } else {
                self.estado = false;
              }
            });
            // console.log(self.estado);
            var esta = self.estado;
            return self.estado;
        };
    }

    
    
})();