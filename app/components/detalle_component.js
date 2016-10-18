(function () {


    var detalle = {
        controller:detalleController,
        templateUrl:'app/components/detalle.html'
    }

    function detalleController($routeParams) {
        var detalle = this;
        firebase.database().ref('propuestas/'+ $routeParams.id).on('value', function(snapshot) {
            detalle.propuesta = snapshot.val();
            console.log(detalle.propuesta)
        });

    }

    angular
        .module('palneacionHidalgo')
        .component('detalleComponent',detalle);
})();