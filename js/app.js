var app = angular.module('app',[]);

/*Contolador de tabla empresas*/
app.controller('tablaController', tableController); 

/*Directives ..*/
app.directive('detalle', detalle);

app.directive('search', search);

app.directive('tabla', table);
/*Factories......*/
app.factory('serviceEmpresas', serviceEmpresas);

	