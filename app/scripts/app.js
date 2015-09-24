'use strict';

var app = angular.module('app', []);

// Establecemos una variable por defecto para el idioma, por si queremos implementar
// cambios de idiomas.
app.constant('language', 'es-ES');

app.controller('SeguroController', ['$scope', '$log', '$http', 'language', function($scope, $log, $http, language)
{
    $scope.seguro={
        nif: '',
        nombre: '',
        ape1: '',
        edad: undefined,
        sexo: '',
        casado: false,
        numHijos: undefined,
        embarazada: false,
        coberturas: {
            oftalmologia: false,
            dental: false,
            fecundacionInVitro: false
        },
        enfermedades:{
            corazon: false,
            estomacal: false,
            rinyones: false,
            alergia: false,
            nombreAlergia: ''
        },
        fechaCreacion:new Date()
    };

    $log.debug('Acabamos de crear el $scope');
    $log.debug(language);

    $http({
        method: 'GET',
        url: 'datos.json'
    })
    .success(function(data, status, headers, config)
    {
        $scope.seguro = data;
    })
    .error(function(data, status, headers, config)
    {
        alert('Ha fallado la petición. Estado HTTP: ' + status);
    });

}]);
