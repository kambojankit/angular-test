app.controller('MainController', ['$scope', function($scope) {
    $scope.apps = [
        {
            icon: 'img/move.jpg',
            title: 'MOVE',
            developer: 'MOVE, Inc.',
            price: 0.99
        },
        {
            icon: 'img/move.jpg',
            title: 'Shutterbugg',
            developer: 'Chico Dusty',
            price: 2.99
        },
        {
            icon: 'img/move.jpg',
            title: 'Gameboard',
            developer: 'Armando P.',
            price: 1.99
        },
        {
            icon: 'img/move.jpg',
            title: 'Forecast',
            developer: 'Forecast',
            price: 1.99
        }
    ];
}]);