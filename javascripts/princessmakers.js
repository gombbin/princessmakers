var app = angular.module("princessmakers", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);

app.run(function ($rootScope) {
    Parse.initialize("vUgZ67x9bmKiImVpAe9766ochg4mTppQvhVDR32A",
                       "WunaSlPcxYgHVWNaYq0CkBWe4Fa8yvyRat2ii3Hd");
    // returns current loggedin user
    if (Parse.User.current() != null) {
        Parse.User.current().fetch().then(function (user) {
            $rootScope.sessionUser = user;
            $rootScope.sessionUserForm = user.toJSON();
            if ($rootScope.sessionUser != null) {
            }
        });
    }
};



app.controller('HomeController', ['$scope', '$rootScope', function ($scope, $rootScope) {
}]);
app.controller('RegisterController', ['$scope', '$rootScope', function ($scope, $rootScope) {
}]);
