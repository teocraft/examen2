var detalle = function(){
	return {
		scope: {
			deta: '=',
			indice: '=' 
		},
		restrict: 'EA',
		templateUrl: 'detailsCompanies.html',
		
	};
}

var search = function(){
return {
		restrict: 'E',
		templateUrl: 'search.html'
	};
}

var table = function(){
	return {
		restrict: 'E',
		templateUrl: 'table.html'
	}
}
