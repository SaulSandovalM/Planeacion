(function () {

    var info = {
        templateUrl:'app/components/info.html',
        controller:infoController
    }

    function infoController($firebaseArray,$firebaseAuth) {
        var info = this;
        var link = firebase.database().ref('/propuestas') 
        info.propuestas = $firebaseArray(link);
        console.log(info.propuestas);

        info.estado = false;
        info.email = null;

        info.auth = $firebaseAuth();


        //checamos inmediatamente al usuario
        info.auth.$onAuthStateChanged(function(user) {
              if (user) {
                info.estado = true;
                info.email = user.email;
                console.log(user);
              } else {
                info.estado = false;
              }
            });


        this.checkLogin = function(){
            return info.estado;
        };
    }


    angular
        .module('palneacionHidalgo')
        .component('infoComponent',info);
})();