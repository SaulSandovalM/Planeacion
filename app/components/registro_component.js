(function () {

    var registro = {
        controller:registroController,
        templateUrl:'app/components/registro.html'
    }

    function registroController($location) {
        var self = this;
        self.estado;
        self.message = false;

        self.crearUsuario = function(){
            $('#load').show();
            firebase.auth().createUserWithEmailAndPassword(self.email, self.password)
            .then(function(){
                alert("Tu usuario se ha creado con exito");
                window.location.replace("/#/login");
            })
            .catch(function(error) {
              // Handle Errors here.
             console.log(error);
             alert("Error al crear el usuario, intentalo nuevamente");
              // ...
            });
        };

    }


    angular
        .module('palneacionHidalgo')
        .component('registroComponent',registro);
})();