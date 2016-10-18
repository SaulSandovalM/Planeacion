(function(){
	// var check = {
 //        controller:checkController,
 //        controllerAs:'elCheck'
 //        // templateUrl:'app/components/login.html'
 //    }


    function checkController($firebaseAuth) {
    	var self = this;

    	self.estado = false;
    	self.auth = $firebaseAuth();

    	self.auth.$onAuthStateChanged(function(firebaseUser) {
		  if (firebaseUser) {
		    console.log("Signed in as:", firebaseUser.uid);
		    self.estado = true;
		  } else {
		    console.log("Signed out");
		  }
		});

		self.checkEstado = function(){
			return self.estado;
		}

    }

    angular
        .module('palneacionHidalgo')
        .controller('checkController',checkController)


     










})();