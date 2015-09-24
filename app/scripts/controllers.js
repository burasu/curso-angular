'use strict';

/* Controllers */

angular.module('leafletAJS.controllers', [])

    // Controlador con el que mostramos la vista principal.
    // Corresponde al mapa.
    .controller('MainCtrl', function($scope, places)
    {
        $scope.mapCenter = {
            lat: 37.4028036,
            lng: -122.0410981,
            zoom: 11
//            autoDiscover: true
        };

        $scope.defaults = {
            zoomControlPosition: 'bottomleft',
            tileLayerOptions: {
                opacity: 0.9,
                detectRetina: true,
                reuseTiles: true
            }
        };

        $scope.layers = {
            baselayers: {
                mapbox_light: {
                    name: 'Mapbox Light',
                    url: 'http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
                    type: 'xyz',
                    layerOptions: {
                        apikey: 'pk.eyJ1IjoiYnVmYW51dm9scyIsImEiOiJLSURpX0pnIn0.2_9NrLz1U9bpwMQBhVk97Q',
                        mapid: 'bufanuvols.lia22g09'
                    }
                },
                osm: {
                    name: 'OpenStreetMap',
                    url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    type: 'xyz'
                },
                blas: {
                    name: 'Blas Map',
                    url: 'http://{s}.tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png',
                    type: 'xyz',
                    maxZoom: 19,
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                }
            }
        };

        places.success(function(data)
        {
//            $scope.mapMarkers = geodataToMarkers(data);
        });

    });
