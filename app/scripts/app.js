'use strict';

var app = angular.module('app', ['ngSanitize']);

function RemoteResource($http, baseUrl)
{
    this.get = function(fnOK, fnError)
    {
        $http({
            method: 'GET',
            url: baseUrl + '/datos.json'
        })
        .success(function(data, status, headers, config)
        {
            fnOK(data);
        })
        .error(function(data, status, headers, config)
        {
            fnError(data, status);
        });
    }
}

// Definimos un provider
function RemoteResourceProvider()
{
    var _baseUrl;
    this.setBaseUrl = function(baseUrl)
    {
        _baseUrl = baseUrl;
    }

    this.$get = ['$http', function($http)
    {
        return new RemoteResource($http, _baseUrl);
    }];
}

app.provider('remoteResource', RemoteResourceProvider);

// URL de la que obtendremos los datos futuros de servicios REST, etc...
app.constant('baseUrl', '.');
app.config(['baseUrl', 'remoteResourceProvider', function(baseUrl, remoteResourceProvider)
{
    remoteResourceProvider.setBaseUrl(baseUrl);
}]);

app.controller('SeguroController', ['$scope', '$log', 'remoteResource', function($scope, $log, remoteResource)
{
    $scope.mensaje = 'Hola <strong>Mundo</strong>';

    $scope.urlLogo="http://www.cursoangularjs.es/lib/exe/fetch.php?cache=&media=unidades:04_masdirectivas:medical14.png";

    $scope.sexos = [
        {
            codSexo: 'H',
            descripcion: 'Hombre'
        },
        {
            codSexo: 'M',
            descripcion: 'Mujer'
        }
    ];

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

    remoteResource.get(function(seguro)
    {
        $scope.seguro = seguro;
    }, function(data, status)
    {
        alert('Ha fallado la peticion. Estado HTTP: ' + status);
    });

}]);
