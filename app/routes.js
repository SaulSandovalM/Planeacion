// (function () {
    
//     angular
//         .module('palneacionHidalgo')
//         .config(routes)

//         .run(["$rootScope", "$location", function($rootScope, $location) {
//           $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
//             // We can catch the error thrown when the $requireSignIn promise is rejected
//             // and redirect the user back to the home page
//             if (error === "AUTH_REQUIRED") {
//               $location.path("/login");
//             }else{
//               console.log(error);
//             }
//           });
//         }])
//         .factory("Auth", ["$firebaseAuth",
//           function($firebaseAuth) {
//             return $firebaseAuth();
//           }])
//         // .controller('PerroController',function($routeParams){
//         //   console.log($routeParams);
//         // })
//         ;


//     function routes($routeProvider) {
//         $routeProvider
//             .when('/login',{
//                 template:`<login-component></login-component>`
//             })
//             .when('/info',{
//                 template:`<info-component></login-component>`
//             })
//             .when('/registro',{
//                 template:`<registro-component></registro-component>`
//             })
//             .when('/nuevo',{
//                 template:`<nuevo-component></nuevo-component>`,
//                 resolve: {
//                   // controller will not be loaded until $waitForSignIn resolves
//                   // Auth refers to our $firebaseAuth wrapper in the factory below
//                   "currentAuth": ["Auth", function(Auth) {
//                     // $waitForSignIn returns a promise so the resolve waits for it to complete
//                     return Auth.$requireSignIn();
//                     // return Auth.$waitForSignIn();
//                   }]
//                           } //resolve
                
//             })
//             .when('/propuesta/:id',{
//                 template:`<detalle-component></detalle-component>`
//             })
//     }


// })();

(function () {
    angular
        .module('palneacionHidalgo')
        .config(routes)

        .run(["$rootScope", "$location", function($rootScope, $location) {
          $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
            // We can catch the error thrown when the $requireSignIn promise is rejected
            // and redirect the user back to the home page
            if (error === "AUTH_REQUIRED") {
              $location.path("/login");
            }else{
              console.log(error);
            }
          });
        }])
        .factory("Auth", ["$firebaseAuth",
          function($firebaseAuth) {
            return $firebaseAuth();
          }])
        ;
        


    routes.$inject = ['$routeProvider','$locationProvider'];
    function routes($routeProvider,$locationProvider) {
        $routeProvider
            .when('/login',{
                template:`<login-component></login-component>`
            })
            .when('/info',{
                template:`<info-component></login-component>`
            })
            .when('/registro',{
                template:`<registro-component></registro-component>`
            })

            .when('/nuevo/',{
                template: `<nuevo-component></nuevo-component>`,
                
                // resolve: {
                //   // controller will not be loaded until $waitForSignIn resolves
                //   // Auth refers to our $firebaseAuth wrapper in the factory below
                //   "currentAuth": ["Auth", function(Auth) {
                //     // $waitForSignIn returns a promise so the resolve waits for it to complete
                //     return Auth.$requireSignIn();
                //     // return Auth.$waitForSignIn();
                //   }]
                //           } //resolve
                })


            .when('/propuesta/:id',{
                template:`<detalle-component></detalle-component>`
            })

            .otherwise({
                redirectTo: '/'
            });
            $locationProvider.html5Mode([true]);

            }

            
            
})();
