'use strict';

/* Services */

var BaseUrl   = 'https://es.wikipedia.org/w/api.php?action=query&list=geosearch';
var Radius    = 5000;
var Limit     = 10;
var Latitude  = 36.6763129;
var Longitude = -6.1430144;

angular.module('leafletAJS.services', [])
    .factory('places', function($http)
    {
        return $http.jsonp(BaseUrl + '&gsradius=' + Radius + '&gscoord=' + Latitude + '%7C' + Longitude + '&gslimit=' + Limit + '&format=json&callback=JSON_CALLBACK')//
            .success(function(data)
            {
                return data;
            })
            .error(function(err)
            {
                return err;
            });
    });

