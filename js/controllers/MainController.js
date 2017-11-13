app.controller('MainController', ['$scope', function($scope){
    $scope.title = 'My Title';
    $scope.promo = 'My Promo';
    $scope.product = {
        name: 'The Book of Trees',
        price: 19
    }
}]);