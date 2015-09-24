'use strict';

var app = angular.module('leafletAJS', [
    'ngRoute',
    'leaflet-directive',
    'leafletAJS.controllers',
    'leafletAJS.services'
]);

app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            controller: 'MainCtrl',
            templateUrl: 'views/main.tpl.html'
        })

        .when('/leaflet', {
            controller: 'MainCtrl',
            templateUrl: 'views/main.tpl.html'
        })

        .otherwise({
            redirectTo: '/'
        });
});
