
var serviceEmpresas = function($http){
	
	var urlCompanies = 'dataJson/companies.json';
	var urlClients = 'dataJson/clients';
	var urlProducts = 'dataJson/products';
 	var demoFactor = { 

		getCompanies : function(){
					return $http.get(urlCompanies)
						   .then( function(data){						
								return data.data.result.companies;
							});
				},
		getClients : function(idComp){
			return $http.get(urlClients + idComp + '.json')
					.then( function(response){
						return response.data.result.clients;
					} );
		},

		getProducts : function(idComp){
			return $http.get(urlProducts + idComp + '.json')
					.then( function(response){
						console.log(response.data.result.productos);
						return response.data.result.productos;
					});
		}
		
	}
	return demoFactor;
}