var tableController = function($scope, serviceEmpresas){

	var detailsCompanies = {};
	$scope.detalle = {};
	$scope.ver = Array(3);
	
	$scope.ocultar = function(){
		$scope.ver.fill(false);
	}

	$scope.mostrar = function(i,empId){
		$scope.ocultar();
		$scope.ver[i] = true;
		$scope.details(empId, i);
	}

s/* 	
	uso de factory serviceEmpresas como servicio 
*/
	serviceEmpresas.getCompanies()
	.then( function(response){
		$scope.empresas = response;
	} );

	var getClienteProducto = function(id){

		serviceEmpresas.getClients(id)
		.then( function(response){
			detailsCompanies.cliente = response;
		});

		serviceEmpresas.getProducts(id)
		.then( function(response){
			detailsCompanies.productos = response;
		} );

	}

	$scope.details = function(id, index){
		
		getClienteProducto(id);

			detailsCompanies.empresa = $scope.empresas[index];
			$scope.detalle = detailsCompanies;
		
		return detailsCompanies;
	}

}
