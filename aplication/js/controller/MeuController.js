myApp.controller('MeuController', function($scope) {
	$scope.pessoa = {};
	$scope.dados = [{
		id : 1,
		nome : 'Luiz',
		email : 'luiz@ciss.com.br',
		telefone : '(46)9999-9999'
	},{
		id : 2,
		nome : 'Henrique',
		email : 'henrique@ciss.com.br',
		telefone : '(46)8888-8888'
	},{
		id : 3,
		nome : 'Medeiro',
		email : 'medeiro@ciss.com.br',
		telefone : '(46)7777-7777'
	}];
	
	$scope.enviaDados = function(pessoa) {
		var p = angular.copy(pessoa)
		$scope.dados.push(p);
		$scope.pessoa = {};
	}
})